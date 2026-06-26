"use client";

import {
  ShieldIcon,
  SwordIcon,
  DiamondIcon,
  EmeraldIcon,
  CrownIcon,
  NetherStarIcon,
  CoinIcon,
  CoinPileIcon,
  RedstoneIcon,
  XPBottleIcon,
  PlayerHeadIcon,
  BowIcon,
  WandIcon,
  TrophyIcon
} from "./PixelIcons";

import type { IconKey } from "@/lib/products";

const iconMap = {
  shield: ShieldIcon,
  sword: SwordIcon,
  diamond: DiamondIcon,
  emerald: EmeraldIcon,
  crown: CrownIcon,
  "nether-star": NetherStarIcon,
  coin: CoinIcon,
  "coin-pile": CoinPileIcon,
  redstone: RedstoneIcon,
  xp: XPBottleIcon,
  player: PlayerHeadIcon,
  bow: BowIcon,
  wand: WandIcon,
  trophy: TrophyIcon
} as const;

export default function PixelIcon({
  name,
  size = 64,
  className = ""
}: {
  name: IconKey;
  size?: number;
  className?: string;
}) {
  const Comp = iconMap[name];
  if (!Comp) return null;
  return <Comp size={size} className={className} />;
}
