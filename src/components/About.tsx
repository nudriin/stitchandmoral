import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="tentang" aria-label="Tentang Stitch & Moral">
      <div className="container">
        <div className={styles.aboutGrid}>
          {/* Image Side */}
          <div className={styles.aboutImageWrapper}>
            <div className={styles.aboutImageMain}>
              <Image
                src="/images/gallery/about.jpg"
                alt="Koleksi jas formal Stitch & Moral Palangka Raya"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.aboutImageAccent}>
              <div className={styles.accentContent}>
                <div className={styles.accentNumber}>2+</div>
                <div className={styles.accentLabel}>Tahun Melayani<br />Palangka Raya</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={styles.aboutContent}>
            <span className={styles.aboutLabel}>Tentang Kami</span>
            <h2 className={styles.aboutTitle}>
              Bukan Sekadar Jas.
              <br />Sebuah Standar.
            </h2>
            <p className={styles.aboutTagline}>
              &ldquo;Not just a suit. A standard. Chosen better.&rdquo;
            </p>
            <p className={styles.aboutText}>
              <strong>Stitch &amp; Moral</strong> hadir sebagai solusi sewa jas formal pria 
              terlengkap di Kota Palangka Raya. Kami memahami bahwa setiap momen penting 
              dalam hidup Anda — wisuda, pernikahan, kelulusan, atau event formal — 
              membutuhkan penampilan yang memukau.
            </p>
            <p className={styles.aboutText}>
              Dengan koleksi jas berkualitas premium yang dipilih secara cermat, 
              kami memastikan Anda tampil percaya diri dan elegan. Setiap jas kami 
              dirawat dengan standar tertinggi karena kami percaya — penampilan Anda 
              mencerminkan karakter Anda.
            </p>
            <div className={styles.aboutFeatures}>
              <div className={styles.aboutFeature}>
                <span className={styles.featureCheck}>✓</span>
                Kualitas Premium
              </div>
              <div className={styles.aboutFeature}>
                <span className={styles.featureCheck}>✓</span>
                Fitting Tersedia
              </div>
              <div className={styles.aboutFeature}>
                <span className={styles.featureCheck}>✓</span>
                Harga Terjangkau
              </div>
              <div className={styles.aboutFeature}>
                <span className={styles.featureCheck}>✓</span>
                Koleksi Lengkap
              </div>
              <div className={styles.aboutFeature}>
                <span className={styles.featureCheck}>✓</span>
                Perawatan Profesional
              </div>
              <div className={styles.aboutFeature}>
                <span className={styles.featureCheck}>✓</span>
                Lokasi Strategis
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
