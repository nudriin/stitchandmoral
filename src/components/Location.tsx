import { MapPin, Phone, Clock, Camera, ExternalLink } from "lucide-react";
import styles from "./Location.module.css";

export default function Location() {
  return (
    <section className={styles.location} id="kontak" aria-label="Lokasi dan Kontak">
      <div className="container">
        <div className={styles.locationGrid}>
          {/* Info */}
          <div className={styles.locationInfo}>
            <span className={styles.locationLabel}>Lokasi Kami</span>
            <h2 className={styles.locationTitle}>
              Kunjungi Stitch &amp; Moral
            </h2>
            <p className={styles.locationDesc}>
              Toko kami berlokasi strategis di pusat Kota Palangka Raya. 
              Datang langsung untuk melihat koleksi jas kami dan lakukan fitting.
            </p>

            <div className={styles.locationDetails}>
              <div className={styles.locationDetail}>
                <div className={styles.detailIcon}>
                  <MapPin size={22} />
                </div>
                <div className={styles.detailContent}>
                  <span className={styles.detailLabel}>Alamat</span>
                  <span className={styles.detailValue}>
                    JL. Pangeran Samudera Induk,<br />
                    Kost Barak Kita no 11,<br />
                    Palangka Raya, Kalimantan Tengah
                  </span>
                </div>
              </div>

              <div className={styles.locationDetail}>
                <div className={styles.detailIcon}>
                  <Phone size={22} />
                </div>
                <div className={styles.detailContent}>
                  <span className={styles.detailLabel}>Telepon / WhatsApp</span>
                  <span className={styles.detailValue}>
                    <a href="tel:+6281549193834">081549193834</a>
                  </span>
                </div>
              </div>

              <div className={styles.locationDetail}>
                <div className={styles.detailIcon}>
                  <Clock size={22} />
                </div>
                <div className={styles.detailContent}>
                  <span className={styles.detailLabel}>Jam Operasional</span>
                  <span className={styles.detailValue}>
                    Senin - Sabtu: 09:00 - 21:00<br />
                    Minggu: 10:00 - 18:00
                  </span>
                </div>
              </div>

              <div className={styles.locationDetail}>
                <div className={styles.detailIcon}>
                  <Camera size={22} />
                </div>
                <div className={styles.detailContent}>
                  <span className={styles.detailLabel}>Instagram</span>
                  <span className={styles.detailValue}>
                    <a
                      href="https://www.instagram.com/stitchandmoral"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @stitchandmoral
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={styles.locationMapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.7!2d113.9108!3d-2.2136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMTInNDkuMCJTIDExM8KwNTQnMzguOSJF!5e0!3m2!1sid!2sid!4v1699999999999"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Stitch & Moral di Palangka Raya"
            ></iframe>
            <div className={styles.mapOverlay}>
              <a
                href="https://maps.google.com/?q=-2.2136,113.9108"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapBtn}
              >
                <ExternalLink size={14} />
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
