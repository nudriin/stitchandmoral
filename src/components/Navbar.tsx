"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Koleksi", href: "#koleksi" },
  { label: "Proses", href: "#proses" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

const WHATSAPP_NUMBER = "6281549193834";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Halo Stitch & Moral, saya tertarik untuk menyewa jas. Bisa info lebih lanjut?"
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        role="navigation"
        aria-label="Menu Navigasi Utama"
        id="navbar"
      >
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo} aria-label="Stitch & Moral - Beranda">
            <div className={styles.logoIcon}>SM</div>
            <div className={styles.logoText}>
              <span className={styles.logoName}>Stitch &amp; Moral</span>
              <span className={styles.logoTagline}>Sewa Jas</span>
            </div>
          </Link>

          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={styles.navLink}
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-secondary btn-sm ${styles.navCta}`}
              id="nav-whatsapp-btn"
            >
              Hubungi Kami
            </a>
          </div>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
            id="hamburger-btn"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div
        className={`${styles.mobileOverlay} ${menuOpen ? styles.active : ""}`}
        id="mobile-menu"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={styles.mobileLink}
            onClick={handleNavClick}
          >
            {item.label}
          </a>
        ))}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-secondary btn-lg ${styles.mobileCta}`}
          id="mobile-whatsapp-btn"
        >
          Hubungi via WhatsApp
        </a>
      </div>
    </>
  );
}
