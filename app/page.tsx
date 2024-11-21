import Image from "next/image";
import Banner from "./componen/banners/index";
import Work from "./componen/penawaran";
import Fitur from "./componen/keunggulan";
import Layanan from "./componen/layanan";
import News from "./componen/berita";
import Tes from "./componen/tes";

export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <Work />
        <Fitur />
        <Layanan />
        <News />
        <Tes />
      </main>
    </>
  );
}
