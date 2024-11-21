import Image from "next/image";
import Banner from "./componen/banners/index";
import Work from "./componen/penawaran";
import Fitur from "./componen/keunggulan";

export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <Work />
        <Fitur />
      </main>
    </>
  );
}
