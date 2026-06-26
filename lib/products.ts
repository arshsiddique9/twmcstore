export type Tier = "common" | "rare" | "epic" | "legendary";

export type Accent = "orange" | "purple" | "yellow" | "red" | "gold";

export type IconKey =
  | "shield" | "sword" | "diamond" | "emerald" | "crown" | "nether-star"
  | "coin" | "coin-pile" | "redstone" | "xp" | "player"
  | "bow" | "wand" | "trophy";

export type Product = {
  id: string;
  name: string;
  price: string;       // display with currency symbol
  priceNum: number;    // raw number
  currency: "INR" | "USD";
  oldPrice?: string;
  desc: string;
  tier: Tier;
  perks: string[];
  iconKey: IconKey;
  tebexId?: string;
  accent: Accent;
};

/* ─────────── RANKS (₹ INR) ─────────── */
export const ranks: Product[] = [
  {
    id: "hunter", 
    tebexId: "7523976", // ✅ REAL ID DAAL DI
    name: "HUNTER",
    tier: "common", 
    price: "₹299", 
    priceNum: 299, 
    currency: "INR",
    desc: "Perfect starter premium rank.", 
    iconKey: "bow", 
    accent: "orange",
    perks: [
      "3x Set Homes", "3x Auction Listings", "2x Vaults",
      "Access to /kit hero", "Access to /sit", "Access to /craft",
      "Access to /hat", "Access to /recipe"
    ]
  },
  {
    id: "wizard", 
    tebexId: "7523988", // ✅ REAL ID DAAL DI
    name: "WIZARD",
    tier: "rare", 
    price: "₹599", 
    priceNum: 599, 
    currency: "INR",
    desc: "Improved survival perks.", 
    iconKey: "wand", 
    accent: "purple",
    perks: [
      "5x Set Homes", "5x Auction Listings", "4x Vaults",
      "Access to /kit jerry", "Access to /smithingtable", "Access to /craft",
      "Access to /enderchest", "Access to /hat"
    ]
  },
  {
    id: "archer", 
    tebexId: "7523992", // ✅ REAL ID DAAL DI
    name: "ARCHER",
    tier: "epic", 
    price: "₹899", 
    priceNum: 899, 
    currency: "INR",
    desc: "PvP focused power rank.", 
    iconKey: "bow", 
    accent: "yellow",
    perks: [
      "7x Set Homes", "7x Auction Listings", "5x Vaults",
      "Access to /kit lion", "Access to /smithingtable", "Access to /craft",
      "Access to /enderchest", "Access to /hat"
    ]
  },
  {
    id: "titan", 
    tebexId: "7523997", // ✅ REAL ID DAAL DI
    name: "TITAN",
    tier: "epic", 
    price: "₹1199", 
    priceNum: 1199, 
    currency: "INR",
    desc: "High tier competitive rank.", 
    iconKey: "sword", 
    accent: "red",
    perks: [
      "10x Set Homes", "10x Auction Listings", "6x Vaults",
      "Access to /kit titan", "Access to /smithingtable", "Access to /craft",
      "Access to /enderchest", "Access to /hat", "Access to /anvil"
    ]
  },
  {
    id: "champion", 
    tebexId: "7524003", // ✅ REAL ID DAAL DI
    name: "CHAMPION",
    tier: "legendary", 
    price: "₹1499", 
    priceNum: 1499, 
    currency: "INR",
    desc: "Ultimate top-tier rank.", 
    iconKey: "trophy", 
    accent: "gold",
    perks: [
      "Access to ALL Rank Kits", "Access to ALL Perks",
      "Unlimited Homes", "Unlimited Vaults",
      "Custom Prefix", "Priority Tab"
    ]
  }
];

/* ─────────── COINS (USD) ─────────── */
export const coins: Product[] = [
  {
    id: "coins-700", 
    tebexId: "COIN_ID_HERE", // ⚠️ YAHAN APNI COIN ID DAALNA (700 coins wali)
    name: "700 Coins",
    tier: "common", 
    price: "$0.62", 
    priceNum: 0.62, 
    currency: "USD",
    desc: "Quick pocket money for the journey.", 
    iconKey: "coin", 
    accent: "gold",
    perks: ["700 in-game coins", "Instant delivery", "Tradable in shops"]
  },
  {
    id: "coins-1500", 
    tebexId: "COIN_ID_HERE", // ⚠️ YAHAN APNI COIN ID DAALNA (1500 coins wali)
    name: "1,500 Coins",
    tier: "common", 
    price: "$1.24", 
    priceNum: 1.24, 
    currency: "USD",
    desc: "Starter pouch — great daily top-up.", 
    iconKey: "coin", 
    accent: "gold",
    perks: ["1,500 in-game coins", "Instant delivery", "Tradable in shops"]
  },
  {
    id: "coins-2800", 
    tebexId: "COIN_ID_HERE", // ⚠️ YAHAN APNI COIN ID DAALNA (2800 coins wali)
    name: "2,800 Coins",
    tier: "rare", 
    price: "$2.50", 
    priceNum: 2.5, 
    currency: "USD",
    desc: "Solid mid-tier wallet boost.", 
    iconKey: "coin-pile", 
    accent: "gold",
    perks: ["2,800 in-game coins", "Instant delivery", "Bonus value vs starter"]
  },
  {
    id: "coins-5660", 
    tebexId: "COIN_ID_HERE", // ⚠️ YAHAN APNI COIN ID DAALNA (5660 coins wali)
    name: "5,660 Coins",
    tier: "rare", 
    price: "$4.60", 
    priceNum: 4.6, 
    currency: "USD",
    desc: "Best value for active players.", 
    iconKey: "coin-pile", 
    accent: "gold",
    perks: ["5,660 in-game coins", "+ bonus coins included", "Instant delivery"]
  },
  {
    id: "coins-7800", 
    tebexId: "COIN_ID_HERE", // ⚠️ YAHAN APNI COIN ID DAALNA (7800 coins wali)
    name: "7,800 Coins",
    tier: "epic", 
    price: "$6.50", 
    priceNum: 6.5, 
    currency: "USD",
    desc: "Power-player coin vault.", 
    iconKey: "coin-pile", 
    accent: "gold",
    perks: ["7,800 in-game coins", "Premium shop access", "Instant delivery"]
  },
  {
    id: "coins-15600", 
    tebexId: "COIN_ID_HERE", // ⚠️ YAHAN APNI COIN ID DAALNA (15600 coins wali)
    name: "15,600 Coins",
    tier: "legendary", 
    price: "$12.20", 
    priceNum: 12.2, 
    currency: "USD",
    desc: "Ultimate coin treasury.", 
    iconKey: "diamond", 
    accent: "gold",
    perks: [
      "15,600 in-game coins", "Maximum bonus tier",
      "Exclusive Tycoon flair", "Priority queue"
    ]
  }
];