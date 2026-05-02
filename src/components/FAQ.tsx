"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "Bagaimana cara menyewa jas di Stitch & Moral?",
    a: "Anda cukup datang ke toko kami di JL. Pangeran Samudera Induk, Palangka Raya, atau hubungi kami via WhatsApp di 081549193834. Pilih jas yang Anda inginkan, lakukan fitting, dan jas siap dipakai untuk acara Anda.",
  },
  {
    q: "Berapa lama durasi sewa jas?",
    a: "Durasi sewa standar adalah 1-3 hari, tergantung kebutuhan acara Anda. Untuk durasi lebih panjang, silakan hubungi kami untuk informasi harga khusus.",
  },
  {
    q: "Apakah tersedia layanan fitting?",
    a: "Ya, kami menyediakan layanan fitting gratis di toko kami. Tim kami akan membantu Anda memilih ukuran dan model jas yang paling sesuai.",
  },
  {
    q: "Apa saja jenis jas yang tersedia untuk disewa?",
    a: "Kami memiliki koleksi jas formal untuk berbagai acara: wisuda, wedding, pre-wedding, kelulusan, MC/pembawa acara, dan event formal lainnya. Tersedia dalam berbagai ukuran dan warna.",
  },
  {
    q: "Apakah jas dalam kondisi bersih dan terawat?",
    a: "Tentu! Setiap jas kami dicuci kering (dry clean) secara profesional setelah setiap pemakaian. Kami memastikan setiap jas yang Anda terima dalam kondisi prima dan siap pakai.",
  },
  {
    q: "Bagaimana jika jas yang disewa mengalami kerusakan?",
    a: "Kami memahami bahwa kerusakan ringan bisa terjadi. Untuk kerusakan ringan, tidak ada biaya tambahan. Namun untuk kerusakan berat, akan dikenakan biaya sesuai tingkat kerusakan. Detail lebih lanjut bisa ditanyakan saat penyewaan.",
  },
  {
    q: "Apakah bisa booking jas untuk tanggal tertentu?",
    a: "Ya, kami sangat menyarankan untuk melakukan booking terlebih dahulu, terutama saat musim wisuda dan pernikahan. Hubungi kami via WhatsApp untuk reservasi.",
  },
];

/* FAQ Schema for SEO */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq} id="faq" aria-label="Pertanyaan yang Sering Diajukan">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container">
        <div className="section-header">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Pertanyaan Umum</h2>
          <p className="section-subtitle">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang
            layanan sewa jas kami di Palangka Raya.
          </p>
        </div>

        <div className={styles.faqList} itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                openIndex === index ? styles.active : ""
              }`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                id={`faq-q-${index}`}
              >
                <span itemProp="name">{faq.q}</span>
                <span className={styles.faqIcon}>+</span>
              </button>
              <div
                className={styles.faqAnswer}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p className={styles.faqAnswerText} itemProp="text">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
