import React from "react";
import Wrapper from "../shared/Wrapper";
import foto from "public/dokter1.jpeg";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div>
          {/* div kiri */}
          <div
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1000'
            className='col-span-6 lg:flex hidden items-center gap-3 aos-init aos-animate'>
            <div className='bg-ElectricAqua relative rounded-tl-166 rounded-br-166 w-full'>
              <Image src={foto} alt=''></Image>
            </div>
          </div>
          {/* div kanan */}
          <div></div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
