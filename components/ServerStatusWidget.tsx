"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, Users, Wifi, WifiOff } from "lucide-react";

type Status = {
  online: boolean;
  players?: { online: number; max: number; list?: { name: string }[] };
  motd?: { clean?: string[]; html?: string[] };
  version?: string;
  hostname?: string;
};

export default function ServerStatusWidget() {
  const [data, setData] = useState<Status | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchStatus(manual = false) {
    if (manual) setRefreshing(true);
    try {
      const res = await fetch("/api/server-status", { cache: "no-store" });
      const json = await res.json();
      setData(json);
      setError(null);
    } catch (e: any) {
      setError("Could not reach server");
    } finally {
      setLoading(false);
      setTimeout(() => setRefreshing(false), 600);
    }
  }

  useEffect(() => {
    fetchStatus();
    const id = setInterval(fetchStatus, 20000);
    return () => clearInterval(id);
  }, []);

  const online = !!data?.online;
  const cur = data?.players?.online ?? 0;
  const max = data?.players?.max ?? 0;
  const list = data?.players?.list ?? [];
  const motd = data?.motd?.clean?.join(" ") || "Welcome to TWMC";

  return (
    <div className="relative pixel-border p-5 md:p-6 rounded-md w-full max-w-md mx-auto scanlines">
      {/* Outer glow */}
      <div className="absolute -inset-1 rounded-md bg-gradient-to-br from-red-700/30 via-transparent to-red-900/30 blur-lg -z-10" />

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-pixel text-[11px] md:text-xs text-twmc-red glow-red tracking-widest">
          ◆ SERVER STATUS
        </h3>
        <button
          onClick={() => fetchStatus(true)}
          className="text-twmc-ash hover:text-twmc-red transition"
          aria-label="Refresh"
        >
          <RefreshCw size={16} className={refreshing ? "animate-spin" : ""} />
        </button>
      </div>

      {/* Status row */}
      <div className="flex items-center gap-3 mb-4">
        <span className={`relative inline-flex h-3 w-3 rounded-full ${
          online ? "bg-green-500" : "bg-red-600"
        } ${online ? "animate-pulseRed" : ""}`}>
          <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
            online ? "bg-green-400" : "bg-red-500"
          } animate-ping`} />
        </span>
        <div className="flex items-center gap-2">
          {online ? <Wifi size={16} className="text-green-400" /> : <WifiOff size={16} className="text-red-500" />}
          <span className={`font-pixel text-[10px] ${online ? "text-green-400" : "text-red-500"}`}>
            {loading ? "CONNECTING…" : online ? "ONLINE" : "OFFLINE"}
          </span>
        </div>
        <span className="ml-auto font-pixel text-[10px] text-twmc-ash">
          play.twmc.fun
        </span>
      </div>

      {/* Player counter (big pixel display) */}
      <div className="relative bg-twmc-crack border-2 border-twmc-blood/60 rounded-sm p-4 mb-4 overflow-hidden">
        {refreshing && (
          <div className="absolute inset-0 shimmer-bg animate-shimmer pointer-events-none" />
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-twmc-ash">
            <Users size={14} />
            <span className="font-pixel text-[9px] tracking-widest">PLAYERS</span>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={cur}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              className="font-pixel text-2xl text-twmc-red glow-red"
            >
              {cur}<span className="text-twmc-ash text-base"> / {max}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* progress bar */}
        <div className="mt-3 h-2 w-full bg-black border border-twmc-blood/40 rounded-sm overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: max ? `${Math.min(100, (cur / max) * 100)}%` : "0%" }}
            transition={{ duration: 0.8 }}
            className="h-full bg-gradient-to-r from-red-700 via-red-500 to-orange-500 shadow-glow"
          />
        </div>
      </div>

      {/* MOTD */}
      <div className="mb-4">
        <p className="font-pixel text-[8px] text-twmc-ash mb-1">MOTD</p>
        <p className="text-sm text-white/90 italic break-words">{motd}</p>
      </div>

      {/* Online players */}
      {list.length > 0 && (
        <div>
          <p className="font-pixel text-[8px] text-twmc-ash mb-2">ONLINE NOW</p>
          <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
            {list.slice(0, 30).map((p) => (
              <span
                key={p.name}
                className="text-[10px] font-pixel px-2 py-1 bg-black/60 border border-twmc-red/40 text-twmc-ember hover:bg-twmc-red/20 transition rounded-sm"
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {error && <p className="text-xs text-red-400 mt-2">{error}</p>}
    </div>
  );
}
