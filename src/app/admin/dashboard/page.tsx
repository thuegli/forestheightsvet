"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// ─── Types ───────────────────────────────────────────────────────
interface Draft {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

type Tab = "drafts" | "chat" | "upload";

// ─── Main Dashboard ──────────────────────────────────────────────
export default function DashboardPage() {
  const [tab, setTab] = useState<Tab>("drafts");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-forest-dark text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-heading text-lg font-bold">FHV Admin</h1>
          <nav className="flex gap-1">
            {(["drafts", "chat", "upload"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  tab === t
                    ? "bg-white/20 text-white"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {t === "drafts" ? "Blog Drafts" : t === "chat" ? "Site Chat" : "Upload Photos"}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {tab === "drafts" && <DraftsPanel />}
        {tab === "chat" && <ChatPanel />}
        {tab === "upload" && <UploadPanel />}
      </main>
    </div>
  );
}

// ─── Drafts Panel ────────────────────────────────────────────────
function DraftsPanel() {
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [preview, setPreview] = useState<{
    slug: string;
    title: string;
    content: string;
    category: string;
    date: string;
    description: string;
  } | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const loadDrafts = useCallback(async () => {
    const res = await fetch("/api/admin/blog/drafts");
    if (res.ok) setDrafts(await res.json());
    setLoading(false);
  }, []);

  useEffect(() => {
    loadDrafts();
  }, [loadDrafts]);

  async function generate() {
    setGenerating(true);
    const res = await fetch("/api/admin/blog/generate", { method: "POST" });
    if (res.ok) {
      await loadDrafts();
    } else {
      alert("Failed to generate draft. Check API keys.");
    }
    setGenerating(false);
  }

  async function viewDraft(slug: string) {
    const res = await fetch(`/api/admin/blog/${slug}`);
    if (res.ok) {
      setPreview(await res.json());
    }
  }

  async function approve(slug: string) {
    setActionLoading(slug);
    const res = await fetch(`/api/admin/blog/${slug}`, { method: "POST" });
    if (res.ok) {
      setPreview(null);
      await loadDrafts();
    }
    setActionLoading(null);
  }

  async function reject(slug: string) {
    if (!confirm("Delete this draft?")) return;
    setActionLoading(slug);
    const res = await fetch(`/api/admin/blog/${slug}`, { method: "DELETE" });
    if (res.ok) {
      setPreview(null);
      await loadDrafts();
    }
    setActionLoading(null);
  }

  if (preview) {
    return (
      <div>
        <button
          onClick={() => setPreview(null)}
          className="text-sm text-forest hover:text-forest-dark mb-4 inline-flex items-center gap-1"
        >
          &larr; Back to drafts
        </button>
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold text-forest uppercase tracking-wider">
              {preview.category}
            </span>
            <span className="text-xs text-gray-400">{preview.date}</span>
          </div>
          <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">
            {preview.title}
          </h2>
          <p className="text-gray-500 text-sm mb-6 italic">{preview.description}</p>
          <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-wrap">
            {preview.content}
          </div>
          <div className="flex gap-3 mt-8 pt-6 border-t border-gray-100">
            <button
              onClick={() => approve(preview.slug)}
              disabled={actionLoading === preview.slug}
              className="bg-forest text-white px-6 py-2 rounded-md font-medium text-sm hover:bg-forest-dark transition-colors disabled:opacity-50"
            >
              {actionLoading === preview.slug ? "Publishing..." : "Approve & Publish"}
            </button>
            <button
              onClick={() => reject(preview.slug)}
              disabled={actionLoading === preview.slug}
              className="bg-red-50 text-red-700 px-6 py-2 rounded-md font-medium text-sm hover:bg-red-100 transition-colors disabled:opacity-50"
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-heading text-xl font-bold text-gray-900">
            Blog Drafts
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            AI-generated posts waiting for your approval. New drafts are
            generated automatically every two weeks.
          </p>
        </div>
        <button
          onClick={generate}
          disabled={generating}
          className="bg-forest text-white px-5 py-2 rounded-md font-medium text-sm hover:bg-forest-dark transition-colors disabled:opacity-50"
        >
          {generating ? "Generating..." : "Generate New Draft"}
        </button>
      </div>

      {loading ? (
        <p className="text-gray-400 text-sm">Loading drafts...</p>
      ) : drafts.length === 0 ? (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
          <p className="text-gray-500">No drafts waiting for approval.</p>
          <p className="text-gray-400 text-sm mt-1">
            Click &ldquo;Generate New Draft&rdquo; to create one, or wait for
            the next automatic generation.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {drafts.map((draft) => (
            <div
              key={draft.slug}
              className="bg-white rounded-lg border border-gray-200 p-5 flex items-center justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-forest uppercase tracking-wider">
                  {draft.category}
                </span>
                <h3 className="font-heading font-bold text-gray-900 mt-1">
                  {draft.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {draft.description}
                </p>
              </div>
              <div className="flex gap-2 flex-shrink-0 ml-4">
                <button
                  onClick={() => viewDraft(draft.slug)}
                  className="text-sm text-forest hover:text-forest-dark font-medium px-3 py-1.5 rounded border border-forest/20 hover:bg-forest-lightest transition-colors"
                >
                  Preview
                </button>
                <button
                  onClick={() => approve(draft.slug)}
                  disabled={actionLoading === draft.slug}
                  className="text-sm bg-forest text-white font-medium px-3 py-1.5 rounded hover:bg-forest-dark transition-colors disabled:opacity-50"
                >
                  Approve
                </button>
                <button
                  onClick={() => reject(draft.slug)}
                  disabled={actionLoading === draft.slug}
                  className="text-sm text-red-600 hover:text-red-700 font-medium px-3 py-1.5 rounded border border-red-200 hover:bg-red-50 transition-colors disabled:opacity-50"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Chat Panel ──────────────────────────────────────────────────
function ChatPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [apiMessages, setApiMessages] = useState<
    Array<{ role: string; content: unknown }>
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [imageData, setImageData] = useState<{
    base64: string;
    name: string;
  } | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() && !imageData) return;

    let userContent = input.trim();
    if (imageData) {
      userContent += `\n\n[Attached image: ${imageData.name}, base64 data available for upload_image tool]`;
    }

    const userMsg: ChatMessage = { role: "user", content: userContent };
    setMessages((prev) => [...prev, userMsg]);

    const newApiMessages = [
      ...apiMessages,
      { role: "user", content: userContent },
    ];

    setInput("");
    setImageData(null);
    setLoading(true);

    const res = await fetch("/api/admin/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newApiMessages }),
    });

    if (res.ok) {
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
      setApiMessages(data.messages);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    }
    setLoading(false);
  }

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)]">
      <div className="mb-4">
        <h2 className="font-heading text-xl font-bold text-gray-900">
          Site Chat
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Tell me what you&rsquo;d like to change on the website. I can update
          text, hours, staff info, and more.
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto bg-white rounded-lg border border-gray-200 p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            <p className="text-sm">
              Try something like: &ldquo;Update our Friday hours to close at
              5pm&rdquo; or &ldquo;Add a new staff member named Dr. Smith&rdquo;
            </p>
          </div>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-3 text-sm whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-forest text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-400">
              Thinking...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tell me what to change..."
          disabled={loading}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading || (!input.trim() && !imageData)}
          className="bg-forest text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-forest-dark transition-colors disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
}

// ─── Upload Panel ────────────────────────────────────────────────
function UploadPanel() {
  const [file, setFile] = useState<File | null>(null);
  const [filename, setFilename] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setResult(null);

    // Auto-generate filename from original name if empty
    if (!filename) {
      const base = f.name
        .replace(/\.[^.]+$/, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-");
      setFilename(`staff-${base}.jpg`);
    }

    // Preview
    const reader = new FileReader();
    reader.onload = (ev) => setPreview(ev.target?.result as string);
    reader.readAsDataURL(f);
  }

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!file || !filename) return;

    setUploading(true);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("filename", filename);

    const res = await fetch("/api/admin/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      const data = await res.json();
      setResult(
        `Photo uploaded successfully to ${data.path}. The site will redeploy in 1-2 minutes. Use the Site Chat tab to update the staff page with the new photo.`
      );
      setFile(null);
      setPreview(null);
      setFilename("");
    } else {
      setResult("Upload failed. Please try again.");
    }
    setUploading(false);
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="font-heading text-xl font-bold text-gray-900">
          Upload Photos
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Upload staff photos or other images. Photos are automatically resized
          and compressed. After uploading, use the Site Chat to update the staff page.
        </p>
      </div>

      <form
        onSubmit={handleUpload}
        className="bg-white rounded-lg border border-gray-200 p-6 max-w-lg"
      >
        {/* Drop zone */}
        <label className="block border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-forest transition-colors">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="max-h-48 mx-auto rounded"
            />
          ) : (
            <div>
              <p className="text-gray-500 text-sm">
                Click to select a photo, or drag and drop
              </p>
              <p className="text-gray-400 text-xs mt-1">
                JPG, PNG, WebP, or HEIC
              </p>
            </div>
          )}
        </label>

        {/* Filename */}
        <label className="block mt-4">
          <span className="text-sm font-medium text-gray-700">
            Filename
          </span>
          <input
            type="text"
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
            placeholder="staff-firstname-lastname.jpg"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent"
          />
          <p className="text-xs text-gray-400 mt-1">
            Use &ldquo;staff-&rdquo; prefix for team photos (auto-resized to 800px).
          </p>
        </label>

        <button
          type="submit"
          disabled={!file || !filename || uploading}
          className="w-full mt-4 bg-forest text-white py-2 px-4 rounded-md font-medium text-sm hover:bg-forest-dark transition-colors disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Upload Photo"}
        </button>

        {result && (
          <p
            className={`mt-4 text-sm p-3 rounded ${
              result.includes("success")
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {result}
          </p>
        )}
      </form>
    </div>
  );
}
