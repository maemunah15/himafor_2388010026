import { query } from "@/lib/db";

interface LayananRow {
  id: number;
  nama: string;
  icon: string;
  deskripsi: string;
  urutan: number;
}

export default async function ServicesSection() {
  let services: LayananRow[] = [];
  try {
    services = await query<LayananRow>("SELECT id, nama, icon, deskripsi, urutan FROM layanan ORDER BY urutan ASC, id ASC");
  } catch (error) {
    console.error("Failed to fetch layanan:", error);
  }

  return (
    <section id="services" className="services">
      <h2 className="section-title">
        Inovasi <span className="text-gradient">Terdepan</span>
      </h2>
      <p className="section-subtitle">
        Kami menyediakan solusi teknologi end-to-end untuk transformasi digital bisnis Anda
      </p>
      <div className="services-grid">
        {services.length > 0 ? (
          services.map((s, i) => (
            <div className="card" key={s.id} style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="card-icon">{s.icon || "💻"}</span>
              <h3>{s.nama}</h3>
              <p>{s.deskripsi}</p>
              <div className="card-shine" />
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", gridColumn: "1 / -1" }}>Belum ada layanan.</p>
        )}
      </div>
    </section>
  );
}
