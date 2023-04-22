import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section id='work' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br/>
                Work.
              </h2>
              <p className='max-w-sm mb-16'>Here you can check some of my latests projects</p>
              <button className='btn btn-sm'><a href='https://github.com/SheaDevop'>View all projects</a></button>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='first project'/>
              <div className='absolute -bottom-full left-12 xs:group-hover:bottom-1 sm:group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient cursor-pointer'><a href='https://aiga.vercel.app/'>AIGA</a></span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-10 lg:group-hover:bottom-1 xl:group-hover:bottom-10 transition-all duration-700 z-50'>
                <span className='xs:text-sm sm:text-xl font-bold text-white'>An image generator powered by Dall-e AI, with a community hub where you can share your creations.</span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.2 }} className='flex-1 flex flex-col gap-y-10'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='second project'/>
              <div className='absolute -bottom-full left-12 xs:group-hover:bottom-1 sm:group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient cursor-pointer'><a href='https://cameramark.netlify.app/'>CameraMark</a></span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-700 z-50'>
                <span className='xs:text-sm sm:text-xl font-bold text-white'>A full-stack E-commerce app where you can get the camera that your looking for.</span>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='third project'/>
              <div className='absolute -bottom-full left-12 xs:group-hover:bottom-1 sm:group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient cursor-pointer'><a href='https://psca-shea.netlify.app/'>PSCA</a></span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-10 lg:group-hover:bottom-1 transition-all duration-700 z-50'>
                <span className='xs:text-sm sm:text-xl font-bold text-white'>A web app where you can personalize a 3D shirt model with your own texture and logo, and even prompt an AI to generate it for you.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
