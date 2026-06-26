"use client";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "HOME" },
  { href: "/ranks", label: "RANKS" },
  { href: "/coins", label: "COINS" },
  { href: "/vote", label: "VOTE" },
  { href: "/donators", label: "TOP DONATORS" },
  { href: "/staff", label: "STAFF" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-black/85 backdrop-blur-md border-b-2 border-twmc-red/50 shadow-glow">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="TWMC" width={40} height={40} className="drop-shadow-[0_0_8px_rgba(255,0,0,0.7)]" />
          <span className="font-pixel text-twmc-red glow-red text-sm">TWMC</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className="font-pixel text-[10px] px-3 py-2 text-twmc-ash hover:text-twmc-red hover:bg-red-900/20 rounded-sm transition">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://discord.gg/DGRBG9R2ZB" target="_blank" rel="noreferrer"
            className="hidden md:inline-flex font-pixel text-[10px] px-3 py-2 text-white bg-[#5865F2]/90 hover:bg-[#5865F2] rounded-sm transition border border-[#5865F2]">
            DISCORD
          </a>
          <button className="relative p-2 border-2 border-twmc-red/60 rounded-sm hover:shadow-glow">
            <ShoppingCart size={18} className="text-twmc-red" />
            <span className="absolute -top-2 -right-2 bg-twmc-red text-black text-[10px] font-pixel rounded-full w-5 h-5 flex items-center justify-center">0</span>
          </button>
          <button className="lg:hidden p-2 text-white" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden bg-black/95 border-t border-twmc-red/30 p-4 flex flex-col gap-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="font-pixel text-[10px] py-2 px-3 text-twmc-ash hover:text-twmc-red">
              {l.label}
            </Link>
          ))}
          <a href="https://discord.gg/DGRBG9R2ZB" target="_blank" rel="noreferrer"
            className="font-pixel text-[10px] py-2 px-3 text-white bg-[#5865F2]/90 rounded-sm mt-2 text-center">
            JOIN DISCORD
          </a>
        </nav>
      )}
    </header>
  );
}
