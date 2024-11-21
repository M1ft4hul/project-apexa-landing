"use client"
import React from "react";
import { Fade } from "react-awesome-reveal";

const Tes = () => {
  return (
    <div>
      <div className='mx-auto max-w-7xl penawaran px-6'>
        <div className='text-center'>
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}>
            <h3 className='text-3xl lg:text-5xl font-normal mb-12 text-lightgrey md:4px lg:text-center'>
              tes halaman
            </h3>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Tes;
