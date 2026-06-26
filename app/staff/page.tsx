const staff = [
  { name: "† TWツDark",    role: "Owner",     avatar: "https://mc-heads.net/avatar/MHF_Steve/100" },
  { name: "† TW KRITO",    role: "Admin",     avatar: "https://mc-heads.net/avatar/MHF_Alex/100" },
  { name: "FlickZZ (Arsh)",  role: "WEB Developer", avatar: "https://mc-heads.net/avatar/MHF_Steve/100" },
  { name: "Unknown",  role: "Builder",   avatar: "https://mc-heads.net/avatar/MHF_Alex/100" },
];
export default function Staff() {
  return (
    <section className="container mx-auto px-6 py-12">
      <h1 className="font-pixel text-2xl text-twmc-red glow-red mb-8">⚒ STAFF TEAM</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {staff.map((s) => (
          <div key={s.name} className="pixel-border rounded-md p-5 text-center hover:shadow-glowStrong transition">
            <img src={s.avatar} alt={s.name} className="w-20 h-20 mx-auto rounded-sm pixelated border-2 border-twmc-red shadow-glow"/>
            <div className="font-pixel text-sm text-white mt-3">{s.name}</div>
            <div className="font-pixel text-[10px] text-twmc-red mt-1">{s.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
