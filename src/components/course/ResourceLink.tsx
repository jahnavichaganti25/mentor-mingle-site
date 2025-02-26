
import { ExternalLink } from "lucide-react";

interface ResourceLinkProps {
  platform: string;
  url: string;
}

export const ResourceLink = ({ platform, url }: ResourceLinkProps) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
  >
    <span>{platform}</span>
    <ExternalLink className="w-4 h-4 text-gray-500" />
  </a>
);
