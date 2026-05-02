import Image from "next/image";
import styles from "./Services.module.css";

const services = [
  {
    id: 1,
    name: "Jas Wisuda",
    desc: "Tampil memukau di hari wisuda Anda dengan koleksi jas formal pilihan terbaik kami.",
    image: "/images/services/wisuda.png",
  },
  {
    id: 2,
    name: "Jas Wedding",
    desc: "Jas pengantin pria premium untuk hari pernikahan yang sempurna dan berkesan.",
    image: "/images/services/wedding.png",
  },
  {
    id: 3,
    name: "Jas Pre-Wedding",
    desc: "Koleksi jas elegan untuk sesi foto pre-wedding yang menawan dan romantis.",
    image: "/images/services/prewedding.png",
  },
  {
    id: 4,
    name: "Jas Kelulusan",
    desc: "Rayakan momen kelulusan dengan penampilan yang rapi, formal, dan percaya diri.",
    image: "/images/services/formal.png",
  },
  {
    id: 5,
    name: "Jas MC & Pembawa Acara",
    desc: "Jas profesional untuk master of ceremony dan pembawa acara di event formal.",
    image: "/images/services/formal.png",
  },
  {
    id: 6,
    name: "Jas Event Formal",
    desc: "Jas untuk berbagai acara formal — gala dinner, seminar, konferensi, dan lainnya.",
    image: "/images/services/wedding.png",
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="layanan" aria-label="Layanan Sewa Jas">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Layanan Kami</span>
          <h2 className="section-title" style={{ color: "white" }}>
            Sewa Jas untuk Setiap Momen
          </h2>
          <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.6)" }}>
            Dari wisuda hingga pernikahan, kami menyediakan jas formal berkualitas 
            untuk berbagai acara penting Anda di Palangka Raya.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.slice(0, 3).map((service) => (
            <article key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <Image
                  src={service.image}
                  alt={`${service.name} - Sewa jas ${service.name.toLowerCase()} di Palangka Raya`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.serviceOverlay}>
                <span className={styles.serviceNumber}>0{service.id}</span>
                <h3 className={styles.serviceName}>{service.name}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
                <div className={styles.serviceLine}></div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.servicesRow2}>
          {services.slice(3).map((service) => (
            <article key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <Image
                  src={service.image}
                  alt={`${service.name} - Sewa jas ${service.name.toLowerCase()} di Palangka Raya`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.serviceOverlay}>
                <span className={styles.serviceNumber}>0{service.id}</span>
                <h3 className={styles.serviceName}>{service.name}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
                <div className={styles.serviceLine}></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
