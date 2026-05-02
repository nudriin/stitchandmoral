import styles from "./WhyUs.module.css";

const reasons = [
  {
    icon: "👔",
    title: "Kualitas Premium",
    desc: "Setiap jas dipilih dari bahan berkualitas tinggi dan dijaga perawatannya secara profesional.",
  },
  {
    icon: "💰",
    title: "Harga Terjangkau",
    desc: "Tampil elegan tanpa perlu merogoh kocek dalam. Harga bersahabat untuk semua kalangan.",
  },
  {
    icon: "📏",
    title: "Fitting Tersedia",
    desc: "Layanan fitting untuk memastikan jas yang Anda pilih pas dan nyaman dipakai.",
  },
  {
    icon: "📍",
    title: "Lokasi Strategis",
    desc: "Berlokasi di pusat Kota Palangka Raya, mudah dijangkau dari berbagai penjuru kota.",
  },
];

export default function WhyUs() {
  return (
    <section className={styles.whyus} id="keunggulan" aria-label="Keunggulan Stitch & Moral">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Mengapa Kami</span>
          <h2 className="section-title">Keunggulan Stitch &amp; Moral</h2>
          <p className="section-subtitle">
            Kami berkomitmen memberikan pengalaman sewa jas terbaik di Palangka Raya.
          </p>
        </div>

        <div className={styles.whyusGrid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.whyusCard}>
              <div className={styles.whyusIcon}>{reason.icon}</div>
              <h3 className={styles.whyusTitle}>{reason.title}</h3>
              <p className={styles.whyusDesc}>{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
