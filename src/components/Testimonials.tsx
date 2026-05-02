import { Star } from "lucide-react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    text: "Jas-nya bagus dan terawat. Pas dipakai wisuda, banyak yang tanya sewanya dimana. Highly recommended!",
    name: "Ahmad Rizky",
    event: "Wisuda UPR 2024",
    initials: "AR",
    stars: 5,
  },
  {
    text: "Pelayanannya ramah dan fitting-nya nyaman. Jas yang saya pakai untuk wedding terasa premium. Terima kasih Stitch & Moral!",
    name: "Dimas Pratama",
    event: "Wedding 2024",
    initials: "DP",
    stars: 5,
  },
  {
    text: "Harga terjangkau tapi kualitas nggak murahan. Sangat cocok buat mahasiswa yang butuh jas wisuda berkualitas di Palangka Raya.",
    name: "Fajar Nugraha",
    event: "Wisuda UMP 2024",
    initials: "FN",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      className={styles.testimonials}
      id="testimoni"
      aria-label="Testimoni Pelanggan"
    >
      <div className="container">
        <div className="section-header">
          <span className="section-label">Testimoni</span>
          <h2 className="section-title" style={{ color: "white" }}>
            Apa Kata Mereka
          </h2>
          <p
            className="section-subtitle"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Kepuasan pelanggan adalah prioritas utama kami. Dengarkan cerita
            mereka.
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>&ldquo;</div>
              <div className={styles.stars}>
                {Array.from({ length: t.stars }).map((_, si) => (
                  <span key={si} className={styles.star}>
                    <Star size={16} fill="currentColor" strokeWidth={0} />
                  </span>
                ))}
              </div>
              <p className={styles.testimonialText}>{t.text}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>{t.initials}</div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{t.name}</span>
                  <span className={styles.authorEvent}>{t.event}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
