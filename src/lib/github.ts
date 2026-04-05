const GITHUB_REPO = process.env.GITHUB_REPO || "thuegli/forestheightsvet";
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main";

function headers() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error("GITHUB_TOKEN is not set");
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github.v3+json",
  };
}

function contentsUrl(path: string) {
  return `https://api.github.com/repos/${GITHUB_REPO}/contents/${path}`;
}

function repoUrl(path: string) {
  return `https://api.github.com/repos/${GITHUB_REPO}/${path}`;
}

// ─── File Operations ─────────────────────────────────────────────

export async function getFile(
  path: string,
  branch?: string
): Promise<{ content: string; sha: string }> {
  const ref = branch || GITHUB_BRANCH;
  const res = await fetch(`${contentsUrl(path)}?ref=${ref}`, {
    headers: headers(),
  });

  if (!res.ok) {
    throw new Error(`Failed to get file ${path}: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  const content = Buffer.from(data.content, "base64").toString("utf-8");
  return { content, sha: data.sha };
}

export async function updateFile(
  path: string,
  content: string,
  message: string,
  sha?: string,
  branch?: string
): Promise<void> {
  const body: Record<string, string> = {
    message,
    content: Buffer.from(content).toString("base64"),
    branch: branch || GITHUB_BRANCH,
  };

  if (sha) {
    body.sha = sha;
  }

  const res = await fetch(contentsUrl(path), {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`Failed to update file ${path}: ${res.status} ${res.statusText}`);
  }
}

export async function deleteFile(
  path: string,
  sha: string,
  message: string
): Promise<void> {
  const res = await fetch(contentsUrl(path), {
    method: "DELETE",
    headers: headers(),
    body: JSON.stringify({
      message,
      sha,
      branch: GITHUB_BRANCH,
    }),
  });

  if (!res.ok) {
    throw new Error(`Failed to delete file ${path}: ${res.status} ${res.statusText}`);
  }
}

export async function listDirectory(
  path: string,
  branch?: string
): Promise<Array<{ name: string; path: string; sha: string }>> {
  const ref = branch || GITHUB_BRANCH;
  const res = await fetch(`${contentsUrl(path)}?ref=${ref}`, {
    headers: headers(),
  });

  if (!res.ok) {
    throw new Error(`Failed to list directory ${path}: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  if (!Array.isArray(data)) {
    throw new Error(`Path ${path} is not a directory`);
  }

  return data.map((item: { name: string; path: string; sha: string }) => ({
    name: item.name,
    path: item.path,
    sha: item.sha,
  }));
}

export async function uploadImage(
  path: string,
  imageBase64: string,
  message: string
): Promise<void> {
  const res = await fetch(contentsUrl(path), {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify({
      message,
      content: imageBase64,
      branch: GITHUB_BRANCH,
    }),
  });

  if (!res.ok) {
    throw new Error(`Failed to upload image ${path}: ${res.status} ${res.statusText}`);
  }
}

// ─── Branch Operations ───────────────────────────────────────────

export async function createBranch(branchName: string): Promise<void> {
  // Get the SHA of the main branch
  const res = await fetch(repoUrl(`git/ref/heads/${GITHUB_BRANCH}`), {
    headers: headers(),
  });

  if (!res.ok) {
    throw new Error(`Failed to get main branch SHA: ${res.status}`);
  }

  const data = await res.json();
  const sha = data.object.sha;

  // Create the new branch
  const createRes = await fetch(repoUrl("git/refs"), {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      ref: `refs/heads/${branchName}`,
      sha,
    }),
  });

  if (!createRes.ok) {
    const err = await createRes.text();
    // Branch might already exist — that's fine
    if (!err.includes("Reference already exists")) {
      throw new Error(`Failed to create branch ${branchName}: ${createRes.status} ${err}`);
    }
  }
}

export async function mergeBranch(branchName: string): Promise<void> {
  const res = await fetch(repoUrl("merges"), {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      base: GITHUB_BRANCH,
      head: branchName,
      commit_message: `Merge preview branch ${branchName}`,
    }),
  });

  if (!res.ok) {
    throw new Error(`Failed to merge branch ${branchName}: ${res.status} ${res.statusText}`);
  }

  // Clean up — delete the branch after merge
  await deleteBranch(branchName);
}

export async function deleteBranch(branchName: string): Promise<void> {
  const res = await fetch(repoUrl(`git/refs/heads/${branchName}`), {
    method: "DELETE",
    headers: headers(),
  });

  if (!res.ok && res.status !== 422) {
    throw new Error(`Failed to delete branch ${branchName}: ${res.status}`);
  }
}
