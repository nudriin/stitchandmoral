import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stitch & Moral — Sewa Jas Premium Palangka Raya",
    short_name: "Stitch & Moral",
    description:
      "Sewa jas formal pria terlengkap di Palangka Raya untuk wisuda, wedding, pre-wedding, kelulusan, MC & event formal.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAFA",
    theme_color: "#1A1A1A",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
