import { Outlet } from "react-router-dom";
import Navbar from "../components/universal/Navbar";
import ScrollUpButton from "../components/universal/ScrollUpButton";
import { Helmet } from "react-helmet";

const Layout = () => {
  return (
    <>
      <Helmet>
        <title>STEI-K 23 | Website STEI-K ITB angkatan 2023</title>
        <meta
          name="description"
          content="Jelajahi saluran informasi dan materi pembelajaran untuk mahasiswa STEI-K. Tetap terupdate dengan pengumuman terbaru, konten edukatif, dan sumber daya yang disesuaikan untuk mahasiswa teknik elektro dan ilmu komputer."
        />
        <meta name="keywords" content="STEI-K, Kampus, ITB, 2023, 23, Teknik Informatika, Sistem dan Teknologi Informasi" />
        <meta name="author" content="BPA IT STEI-K 23" />

        {/* Open Graph metadata */}
        <meta
          property="og:description"
          content="Jelajahi saluran informasi dan materi pembelajaran untuk mahasiswa STEI-K. Tetap terupdate dengan pengumuman terbaru, konten edukatif, dan sumber daya yang disesuaikan untuk mahasiswa teknik elektro dan ilmu komputer."
        />
        <meta property="og:image" content="/steik23.svg" />
        <meta property="og:url" content="https://steik23.netlify.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Card metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="STEI-K 23 | Website STEI-K ITB angkatan 2023" />
        <meta
          name="twitter:description"
          content="Jelajahi saluran informasi dan materi pembelajaran untuk mahasiswa STEI-K. Tetap terupdate dengan pengumuman terbaru, konten edukatif, dan sumber daya yang disesuaikan untuk mahasiswa teknik elektro dan ilmu komputer."
        />

        {/* Icons */}
        <link rel="icon" href="/steik23.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/steik23.svg" />
      </Helmet>
      <ScrollUpButton />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
