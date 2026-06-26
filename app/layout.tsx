import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

export const metadata = {
  title: "TWMC Store — Official Minecraft Server Shop",
  description: "Ranks, kits, cosmetics & crates for TWMC. play.twmc.fun",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-twmc-black text-white font-body">
        <ParticleBackground />
        <div className="relative z-10">
          <Navbar />
          <main className="min-h-[calc(100vh-160px)]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
