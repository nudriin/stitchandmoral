import Image from "next/image";
import styles from "./Gallery.module.css";

const galleryItems = [
  {
    id: 1,
    image: "/images/gallery/feed1.jpg",
    caption: "Formal suits, ready when you are",
    alt: "Jas formal hitam premium Stitch & Moral digantung di hanger",
  },
  {
    id: 2,
    image: "/images/gallery/feed2.jpg",
    caption: "Not just a suit. A standard",
    alt: "Jas formal Stitch & Moral dalam kemasan pelindung profesional",
  },
  {
    id: 3,
    image: "/images/gallery/feed3.jpg",
    caption: "Made for every moment",
    alt: "Jas formal Stitch & Moral dilipat rapi dalam keranjang premium",
  },
];

export default function Gallery() {
  return (
    <section className={styles.gallery} id="koleksi" aria-label="Galeri Koleksi Jas">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Koleksi Kami</span>
          <h2 className="section-title">Galeri Stitch &amp; Moral</h2>
          <p className="section-subtitle">
            Setiap jas kami dipilih dengan cermat untuk memastikan kualitas 
            dan keeleganan terbaik untuk Anda.
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {galleryItems.map((item) => (
            <div key={item.id} className={styles.galleryItem}>
              <div className={styles.galleryImage}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.galleryOverlay}>
                <div className={styles.galleryIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>
              </div>
              <div className={styles.galleryCaption}>
                <p className={styles.galleryCaptionText}>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.galleryFollow}>
          <a
            href="https://www.instagram.com/stitchandmoral"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.galleryFollowLink}
          >
            <svg className={styles.galleryFollowIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Ikuti @stitchandmoral di Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
