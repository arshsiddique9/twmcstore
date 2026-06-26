"use client";

type IconProps = {
  size?: number;
  className?: string;
};

type PixelsProps = {
  rows: string[];
  palette: Record<string, string>;
  size?: number;
  className?: string;
};

function Pixels({ rows, palette, size = 64, className = "" }: PixelsProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
      className={className}
      style={{ imageRendering: "pixelated" }}
    >
      {rows.map((row, y) =>
        row.split("").map((c, x) =>
          palette[c] ? (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width="1"
              height="1"
              fill={palette[c]}
            />
          ) : null
        )
      )}
    </svg>
  );
}

/* ── SHIELD ───────────────────────────── */
export const ShieldIcon = ({ size = 64, className = "" }: IconProps) => (
  <Pixels
    size={size}
    className={className}
    palette={{
      ".": "transparent",
      "1": "#d9d9d9",
      "2": "#8f8f8f",
      "3": "#444444",
      "r": "#ff2a2a",
      "k": "#000000"
    }}
    rows={[
      "................",
      ".kkkkkkkkkkkkkk.",
      ".k111111111111k.",
      ".k11rrrrrrrr11k.",
      ".k1rr111111rr1k.",
      ".k1r11rrrr11r1k.",
      ".k1r1rrrrrr1r1k.",
      ".k1r1rr11rr1r1k.",
      ".k1r1rrrrrr1r1k.",
      ".k1r11rrrr11r1k.",
      ".k1rr111111rr1k.",
      ".k11rrrrrrrr11k.",
      ".k111111111111k.",
      "..k2222222222k..",
      "...k33333333k...",
      ".....kkkkkk....."
    ]}
  />
);

/* ── SWORD ────────────────────────────── */
export const SwordIcon = ({ size = 64, className = "" }: IconProps) => (
  <Pixels
    size={size}
    className={className}
    palette={{
      ".": "transparent",
      "1": "#7ce8ef",
      "2": "#45b7bf",
      "3": "#1b7b83",
      "4": "#8a5a2b",
      "5": "#5a3a1b",
      "k": "#000000"
    }}
    rows={[
      "..............k.",
      ".............k1k",
      "............k12k",
      "...........k123k",
      "..........k123k.",
      ".........k123k..",
      "........k123k...",
      ".......k123k....",
      "......k123k.....",
      ".....k123k......",
      "....k45k........",
      "...k454k........",
      "..k45k..........",
      ".k5k............",
      "kk..............",
      "................"
    ]}
  />
);

/* ── DIAMOND ──────────────────────────── */
export const DiamondIcon = ({ size = 64, className = "" }: IconProps) => (
  <Pixels
    size={size}
    className={className}
    palette={{
      ".": "transparent",
      "1": "#c9fbff",
      "2": "#72e8f0",
      "3": "#35b6c0",
      "4": "#1a6f77",
      "k": "#000000",
      "w": "#ffffff"
    }}
    rows={[
      "................",
      "................",
      "...kkkkkkkkkk...",
      "..k1ww2222333k..",
      ".k1w2222233333k.",
      ".k122222333344k.",
      ".k222233333444k.",
      "..k2233333444k..",
      "..k2333344444k..",
      "...k33344444k...",
      "...k334444kk....",
      "....k44444k.....",
      ".....kkkk.......",
      "................",
      "................",
      "................"
    ]}
  />
);

/* ── EMERALD ──────────────────────────── */
export const EmeraldIcon = ({ size = 64, className = "" }: IconProps) => (
  <Pixels
    size={size}
    className={className}
    palette={{
      ".": "transparent",
      "1": "#c3ffd3",
      "2": "#49e17a",
      "3": "#19a348",
      "4": "#0c5a26",
      "k": "#000000",
      "w": "#ffffff"
    }}
    rows={[
      "................",
      "...kkkkkkkkkk...",
      "..k1ww2222333k..",
      ".k1w2222233334k.",
      ".k122222333344k.",
      ".k222233333444k.",
      "..k2233333444k..",
      "..k2333344444k..",
      "...k33344444k...",
      "...k334444kk....",
      "....k44444k.....",
      ".....kkkk.......",
      "................",
      "................",
      "................",
      "................"
    ]}
  />
);

/* ── CROWN ────────────────────────────── */
export const CrownIcon = ({ size = 64, className = "" }: IconProps) => (
  <Pixels
    size={size}
    className={className}
    palette={{
      ".": "transparent",
      "1": "#ffe066",
      "2": "#ffb000",
      "3": "#7a4a00",
      "r": "#ff3030",
      "k": "#000000"
    }}
    rows={[
      "................",
      "k...k...k...k...",
      "k1..k1..k1..k1..",
      "k11.k11.k11.k11.",
      "k111k111k111k111",
      "k1112111r111111k",
      "k1112221r122211k",
      "k1122222r222211k",
      "k2222r2222r2222k",
      "k2222222222222k.",
      "k3333333333333k.",
      "kkkkkkkkkkkkkkkk",
      "................",
      "................",
      "................",
      "................"
    ]}
  />
);

/* ── NETHER STAR ──────────────────────── */
export const NetherStarIcon = ({ size = 64, className = "" }: IconProps) => (
  <Pixels
    size={size}
    className={className}
    palette={{
      ".": "transparent",
      "1": "#ffffff",
      "2": "#ffe066",
      "3": "#ffb000",
      "k": "#000000"
    }}
    rows={[
      ".......k........",
      "......k1k.......",
      "......k2k.......",
      "k.....k2k.....k.",
      "kk....k2k....kk.",
      ".k1kkk232kkk1k..",
      "..k2233333322k..",
      "...k22333322k...",
      "..k2233333322k..",
      ".k1kkk232kkk1k..",
      "kk....k2k....kk.",
      "k.....k2k.....k.",
      "......k2k.......",
      "......k1k.......",
      ".......k........",
      "................"
    ]}
  />
);

/* ── COIN ─────────────────────────────── */
export const CoinIcon = ({ size = 64, className = "" }: IconProps) => (
  <Pixels
    size={size}
    className={className}
    palette={{
      ".": "transparent",
      "1": "#ffe066",
      "2": "#ffb000",
      "3": "#a36800",
      "k": "#000000",
      "w": "#fff5b0"
    }}
    rows={[
      "................",
      "....kkkkkk......",
      "..kk111111kk....",
      ".k1ww111122k....",
      "k1ww1112222k....",
      "k1w11122223k....",
      "k1112222333k....",
      "k1122233344k....",
      "k1223344444k....",
      "k2233444444k....",
      ".k33344444k.....",
      "..k444444k......",
      "...kkkkkk.......",
      "................",
      "................",
      "................"
    ]}
  />
);

/* ── COIN PILE ────────────────────────── */
export const CoinPileIcon = ({ size = 64, className = "" }: IconProps) => (
  <Pixels
    size={size}
    className={className}
    palette={{
      ".": "transparent",
      "1": "#ffe066",
      "2": "#ffb000",
      "3": "#a36800",
      "k": "#000000",
      "w": "#fff5b0"
    }}
    rows={[
      "................",
      "....kkkkkk......",
      "...k111111k.....",
      "..k1ww1122k.....",
      "..k1w1122kkk....",
      "..k11122k1111k..",
      "..k11223k1ww22k.",
      "..k12223k1w112k.",
      ".kkkkk222k111k..",
      "k111111k223k....",
      "k1ww1122kkkkk...",
      "k1w11222k11111k.",
      "k1112222k1ww223k",
      "k1112222k1w1223k",
      "k1122223k1122233",
      "kkkkkkkkkkkkkkkk"
    ]}
  />
);

/* ── REDSTONE BLOCK ───────────────────── */
export const RedstoneIcon = ({ size = 64, className = "" }: IconProps) => (
  <Pixels
    size={size}
    className={className}
    palette={{
      ".": "transparent",
      "1": "#ff3030",
      "2": "#c41010",
      "3": "#700808",
      "4": "#400404",
      "k": "#000000",
      "w": "#ff9090"
    }}
    rows={[
      "kkkkkkkkkkkkkkkk",
      "k11w1111111w111k",
      "k1w111122211111k",
      "k11122222221111k",
      "k11222233222211k",
      "k12223333322221k",
      "k12233343333221k",
      "k12333444333221k",
      "k12334444433321k",
      "k12233444333221k",
      "k12223333322221k",
      "k11222233222211k",
      "k11122222221111k",
      "k11111111111111k",
      "kkkkkkkkkkkkkkkk",
      "................"
    ]}
  />
);

/* ── XP BOTTLE ────────────────────────── */
export const XPBottleIcon = ({ size = 64, className = "" }: IconProps) => (
  <Pixels
    size={size}
    className={className}
    palette={{
      ".": "transparent",
      "1": "#a0ffd0",
      "2": "#30d090",
      "3": "#108050",
      "g": "#7a5a2a",
      "k": "#000000",
      "w": "#ffffff"
    }}
    rows={[
      "................",
      ".....kggk.......",
      ".....kggk.......",
      ".....kggk.......",
      "....k1111k......",
      "...k112221k.....",
      "..k11223221k....",
      ".k1w22333321k...",
      ".k122333333k....",
      ".k122333333k....",
      ".k122333332k....",
      "..k1222232k.....",
      "...k11221k......",
      "....kkkkk.......",
      "................",
      "................"
    ]}
  />
);

/* ── PLAYER HEAD ──────────────────────── */
export const PlayerHeadIcon = ({ size = 64, className = "" }: IconProps) => (
  <Pixels
    size={size}
    className={className}
    palette={{
      ".": "transparent",
      "s": "#d3a48b",
      "h": "#3a2410",
      "e": "#ffffff",
      "p": "#1a1a1a",
      "k": "#000000",
      "m": "#7a4a2a"
    }}
    rows={[
      "................",
      ".kkkkkkkkkkkkkk.",
      ".khhhhhhhhhhhhk.",
      ".khhhhhhhhhhhhk.",
      ".khsssssssssshk.",
      ".khseepkkpeeshk.",
      ".khseepkkpeeshk.",
      ".khssssmmsssshk.",
      ".khssssmmsssshk.",
      ".khsssmmmmsshhk.",
      ".khssmmmmmmsshk.",
      ".khsssssssssshk.",
      ".khhhhhhhhhhhhk.",
      ".kkkkkkkkkkkkkk.",
      "................",
      "................"
    ]}
  />
);

/* ── BOW ──────────────────────────────── */
export const BowIcon = ({ size = 64, className = "" }: IconProps) => (
  <Pixels
    size={size}
    className={className}
    palette={{
      ".": "transparent",
      "1": "#c08040",
      "2": "#8a5a2b",
      "3": "#5a3a1b",
      "s": "#dddddd",
      "f": "#ffb030",
      "k": "#000000"
    }}
    rows={[
      "...kk...........",
      "..k11k..........",
      ".k1221k.........",
      "k12233k.........",
      "k1223k..........",
      "k123ksssssssssss",
      "k123k..ffffffk..",
      "k123ksssssssssss",
      "k1223k..........",
      "k12233k.........",
      ".k1221k.........",
      "..k11k..........",
      "...kk...........",
      "................",
      "................",
      "................"
    ]}
  />
);

/* ── WAND ─────────────────────────────── */
export const WandIcon = ({ size = 64, className = "" }: IconProps) => (
  <Pixels
    size={size}
    className={className}
    palette={{
      ".": "transparent",
      "1": "#e0b0ff",
      "2": "#a060e0",
      "3": "#5030a0",
      "4": "#8a5a2b",
      "5": "#5a3a1b",
      "w": "#ffffff",
      "k": "#000000",
      "s": "#ffd24a"
    }}
    rows={[
      "................",
      ".....s..s.s.....",
      "....kkkkkk......",
      "...k1w1221k.....",
      "...k1w2233k.s...",
      "....k12233k.....",
      ".....kk22k......",
      ".......k4k......",
      "......k45k......",
      ".....k45k.......",
      "....k45k........",
      "...k45k.........",
      "..k45k..........",
      ".k45k...........",
      "k5k.............",
      "k..............."
    ]}
  />
);

/* ── TROPHY ───────────────────────────── */
export const TrophyIcon = ({ size = 64, className = "" }: IconProps) => (
  <Pixels
    size={size}
    className={className}
    palette={{
      ".": "transparent",
      "1": "#ffe066",
      "2": "#ffb000",
      "3": "#a36800",
      "4": "#5a3a00",
      "w": "#fff5b0",
      "k": "#000000"
    }}
    rows={[
      "................",
      "k.kkkkkkkkkkkk.k",
      "k.k1w11111111k.k",
      "kk.k111122221.kk",
      ".k.k112222223.k.",
      ".k..k122223k..k.",
      "..k.k12233k.k...",
      "...k.k223k.k....",
      "....k.k3k.k.....",
      ".....kk3kk......",
      ".....k333k......",
      "....k33333k.....",
      "...k3333333k....",
      "..k333333333k...",
      ".kkkkkkkkkkkkk..",
      "................"
    ]}
  />
);
