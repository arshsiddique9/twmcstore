"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import CopyIPButton from "./CopyIPButton";
import ServerStatusWidget from "./ServerStatusWidget";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-lavaGlow pointer-events-none" />
      <div className="absolute inset-0 bg-crackedStone opacity-60 pointer-events-none" />

      <div className="relative container mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Logo + CTAs */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative inline-block animate-float"
          >
            <div className="absolute inset-0 blur-3xl bg-red-700/40 -z-10" />
            <Image
              src="/logo.png"
              alt="TWMC"
              width={360}
              height={360}
              priority
              className="drop-shadow-[0_0_35px_rgba(255,0,0,0.6)]"
            />
          </motion.div>

          <h1 className="mt-6 font-pixel text-2xl md:text-4xl text-white glow-red animate-flicker">
            WELCOME TO TWMC
          </h1>
          <p className="mt-3 text-twmc-ash max-w-md mx-auto lg:mx-0">
            The most epic Minecraft survival & PvP experience. Forge alliances,
            conquer the nether, become a legend.
          </p>

          <div className="mt-6"><CopyIPButton ip="play.twmc.net" /></div>

          <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link href="/ranks" className="btn-block font-pixel text-xs px-6 py-4 text-white rounded-sm">
              ⚔ BUY RANKS
            </Link>
            <a
              href="minecraft://?addExternalServer=TWMC|play.twmc.fun"
              className="font-pixel text-xs px-6 py-4 rounded-sm border-2 border-twmc-red text-twmc-red hover:bg-twmc-red hover:text-black transition shadow-glow"

 
            >
              ▶ JOIN NOW
            </a>
          </div>
        </div>

        {/* Right: Status widget */}
        <div className="flex justify-center">
          <ServerStatusWidget />
        </div>
      </div>
    </section>
  );
}
