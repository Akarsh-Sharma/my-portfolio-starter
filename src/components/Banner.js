import React from 'react';
// images
import Image from '../assets/avatar.svg';
// icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// type animation
import {TypeAnimation} from 'react-type-animation';
// motion
import {motion} from 'framer-motion';
// variants 
import {fadeIn} from '../variant';


const Banner = () => {
  return (
  <section className='mt-12 min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* text */}
        <div className='flex-1 text-center font-primary lg:text-left'>
          <motion.h1 
          variants={fadeIn('up', 0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount:0.7}} 
          className='mb-4 text-[55px] font-bold leading-[0.8] lg:text-[70px]'>
            AKARSH <span>SHARMA</span>
          </motion.h1>
          <motion.div 
          variants={fadeIn('up', 0.4)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount:0.7}} 
          className='mb-6 text-[36px] lg:text-[35px] font-secondary
          font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Designer',
              2000,
              'Freelancer',
              2000,
            ]}
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
            />
          </motion.div>
          <motion.p 
          variants={fadeIn('up', 0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount:0.7}} 
          className='text-[14px] mb-8 max-w-lg mx-auto lg:mx-0 lg:text-[20px]'>
            Hey, my name is Akarsh and I am a Full Stack Developer with almost 3 years of experience. 
            Welcome to my Portfolio! 
          </motion.p>
          <motion.div 
          variants={fadeIn('up', 0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount:0.7}} 
          className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'>Contact me</button>
            <a href='#' className='text-gradient btn-link'> My Portfolio </a>
          </motion.div>
          {/* socials */}
          <motion.div 
          variants={fadeIn('up', 0.6)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount:0.8}} 
          className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='#' className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <FaGithub/>
            </a>
            <a href='#' className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <FaLinkedin/>
            </a>
          </motion.div>
        </div>
        {/* Image */}
        <motion.div 
        variants={fadeIn('down', 0.5)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once:false, amount:0.7}} 
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={Image} alt=''/>
        </motion.div>
      </div>
    </div>
  </section>
  )
};

export default Banner;
