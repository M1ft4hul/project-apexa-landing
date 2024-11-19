"use client";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";


const Work = () => {
  return (
    <div>
      <div className='mx-auto max-w-7xl penawaran px-6' id='about-section'>
        <div className='text-center mb-14'>
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}>
            <h3 className='text-3xl lg:text-6xl font-normal mb-5 text-lightgrey md:4px lg:text-center'>
              Penawaran Spesial
            </h3>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Work;
