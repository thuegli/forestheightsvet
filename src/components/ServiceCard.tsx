import Link from "next/link";

interface ServiceCardProps {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard({
  href,
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
    >
      <div className="text-teal mb-3 flex justify-center group-hover:text-teal-dark transition-colors">
        {icon}
      </div>
      <h3 className="font-heading font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600">{description}</p>
    </Link>
  );
}
