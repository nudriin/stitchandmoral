import { Search, Ruler, Sparkles, RotateCcw } from "lucide-react";
import styles from "./Process.module.css";

const steps = [
  {
    icon: <Search size={28} strokeWidth={2} />,
    title: "Pilih Jas",
    desc: "Pilih jas yang sesuai dengan acara dan selera Anda dari koleksi kami.",
  },
  {
    icon: <Ruler size={28} strokeWidth={2} />,
    title: "Fitting",
    desc: "Datang ke toko kami untuk fitting dan memastikan ukuran yang pas.",
  },
  {
    icon: <Sparkles size={28} strokeWidth={2} />,
    title: "Sewa & Pakai",
    desc: "Sewa jas pilihan Anda dan tampil memukau di acara Anda.",
  },
  {
    icon: <RotateCcw size={28} strokeWidth={2} />,
    title: "Kembalikan",
    desc: "Kembalikan jas sesuai jadwal. Mudah, praktis, tanpa ribet.",
  },
];

export default function Process() {
  return (
    <section className={styles.process} id="proses" aria-label="Proses Sewa Jas">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Cara Sewa</span>
          <h2 className="section-title">Proses yang Mudah &amp; Cepat</h2>
          <p className="section-subtitle">
            Sewa jas di Stitch &amp; Moral sangat mudah. Ikuti 4 langkah sederhana berikut.
          </p>
        </div>

        <div className={styles.processSteps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.processStep}>
              <div className={styles.stepNumber}>
                <div className={styles.stepNumberInner}>
                  <span className={styles.stepIcon}>{step.icon}</span>
                </div>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
