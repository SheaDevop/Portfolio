import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'UX/UI Design',
    description: "I am currently getting involved in the UI world, I don't have much experience yet, but I'm enjoying the learning process of designing."
  },
  {
    name: 'Front-end Development',
    description: 'Coding responsive web applications is where i feel more comfortable, using React and Tailwind, i get to develop and deliver web apps pretty fast.'
  },
  {
    name: 'API Development',
    description: "I don't have much experience coding and delivering apis, but im getting used to the process, since I've recently deployed a few."
  },
];

const Services = () => {
  return (
    <section id='services' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row '>
          <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16 '>
              I'm a Front-end Developer with 3 years of learning experience.
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1'>
            <div>
              {services.map((service, index) => {
                //destructure service
                const {name, description} = service;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a className='btn w-9 h-9 mb-[42px] flex justify-center items-center' href='#'>
                        <BsArrowUpRight />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
