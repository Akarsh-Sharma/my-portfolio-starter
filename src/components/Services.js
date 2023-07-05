import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion 
import {motion} from 'framer-motion';
// variants 
import {fadeIn} from '../variant';

// services data
const services = [
  {
    name: 'UI/UX Design',
    description: 'Creating wireframes, user flows, and interactive prototypes to design intuitive and user-friendly interfaces that meet the needs of the target audience.',
  },
  {
    name: 'Custom Software Development',
    description: 'Developing tailored software solutions that address specific business needs and requirements.',
  },
  {
    name: 'Full Stack Web Development',
    description: 'Building web applications from scratch using front-end technologies like HTML, CSS, JavaScript, and popular frameworks such as React, Angular, or Vue.js, along with back-end technologies like Node.js, Python, Ruby, or PHP.',
  },
  {
    name: 'Database Management',
    description: 'Designing and implementing efficient and secure database structures using technologies like MySQL, PostgreSQL, MongoDB, or Firebase.',
  },
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text and image */}
          <motion.div 
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.3}}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
          mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I am a Full Stack Developer with almost 3 years of experience.
            </h3>
            <button className='btn btn-sm'>
              See my work. 
            </button>
          </motion.div>
          {/* services */}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.5}}
          className='flex-1'>
            {/* services list */}
            <div>
              {services.map((service, index) => {
                
                // destructure service
                const {name, description, link} = service;
                return (
                <div className='border-b border-white/20 h-[146px] mb-[18px]
                flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary
                    font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    )};

export default Services;
