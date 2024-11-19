"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import latar from "public/logo_gram_1.png";
import dokter from "public/baner_dokter.png";
import apexa from "public/apexa.png";
import sehat from "public/healthcare.png";

const Banner = () => {
  return (
    <div id='home-section' className='relative'>
      <div className='mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6'>
        {/* buat latar belakang */}
        <div className='absolute right-0 bottom-[-18%] hidden lg:block'>
          <Image
            src={latar}
            alt='rs-image'
            className='custom-bg'
            // width={463}
            // height={622}
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
          {/* banner */}
          <div className='col-span-6 flex justify-start relative'>
            <div className='flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute'>
              <Image src={apexa} alt='apexa-image' width={128} height={65} />
            </div>
            <Image
              src={dokter}
              alt='nothing'
              width={600}
              height={630}
              className='dokter'
            />
          </div>

          {/* konten */}
          <div className='col-span-6 flex flex-col justify-center'>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}>
              <p className='text-[#169091] lg:text-lg font-normal mb-2 lg:text-start text-center flex items-center space-x-2'>
                <Image src={sehat} alt='sehat' width={25} height={25}></Image>
                <span>Kesehatan Anda, Prioritas Kami</span>
              </p>
            </Fade>
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}>
              <h1 className='text-4xl lg:text-7xl font-normal mb-5 text-lightgrey md:4px lg:text-start text-center'>
                Our Best for <br /> Your{" "}
                <b className='text-[#4BB7B7]'>
                  <i>Health</i>
                </b>
              </h1>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}>
              <p className='text-[#949494] lg:text-lg font-normal mb-10 lg:text-start text-center'>
                Percayakan kesehatan Anda pada ahli. <br /> Temukan Dokter
                terpercaya dan buat janji sekarang.
              </p>
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}>
              <div className='md:flex align-middle justify-center lg:justify-start'>
                <button className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6'>
                  <Link href='#cook-section'>Lets cook</Link>
                </button>
                <button className='flex border w-full md:w-auto mt-5 md:mt-0 border-pink justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-pink hover:text-white hover:bg-pink'>
                  <Link href='#about-section'>Explore now</Link>
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
