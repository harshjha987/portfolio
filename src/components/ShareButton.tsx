 "use client";

  import { useState } from "react";
  import { Share2, Check } from "lucide-react";

  export default function ShareButton({ title }: { title: string }) {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
      const url = window.location.href;

      if (navigator.share) {
        try {
          await navigator.share({ title, url });
        } catch {
          // user cancelled
        }
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    };

    return (
      <button
        onClick={handleShare}
        className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300
  hover:text-white transition ml-auto"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-400" />
        ) : (
          <Share2 className="w-4 h-4" />
        )}
        {copied ? "Copied!" : "Share"}
      </button>
    );
  }