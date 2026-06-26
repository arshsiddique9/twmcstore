"use client";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function CopyIPButton({ ip }: { ip: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(ip);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="group inline-flex items-center gap-3 bg-black/70 border-2 border-twmc-red/70 hover:border-twmc-red px-5 py-3 rounded-sm shadow-glow transition"
    >
      <span className="font-pixel text-[10px] text-twmc-ash">IP</span>
      <span className="font-pixel text-sm md:text-base text-white tracking-wider group-hover:text-twmc-red transition">
        {ip}
      </span>
      <span className="text-twmc-red">
        {copied ? <Check size={18} /> : <Copy size={18} />}
      </span>
    </button>
  );
}

