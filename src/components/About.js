import React from 'react';

//countup
import CountUp from 'react-countup';
// intersection observer
import {useInView } from 'react-intersection-observer';
//motion
import {motion} from 'framer-motion';
// variant 
import {fadeIn} from '../variant';
import { Link } from 'react-scroll';



const About = () => {

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.3}}
        className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20
        lg:gap-y-0 h-screen'>
          {/* image */}
          <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></div>
          {/* text */}
          <motion.div 
          variants={fadeIn('left', 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.3}} 
          className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>
              Hi, my name is Akarsh and I am a Full Stack Developer with almost 3 years of experience.  
            </h3>
            <p className='mb-6'>
              I have extensive experience in developing software 
              using Object-Oriented Programming languages such as Java and C# as well as web development technologies 
              such as HTML, JavaScript, and CSS. My experience with .NET allows me to develop robust and scalable applications for different platforms. Moreover, I have working knowledge of SQL and Microsoft SQL Server, 
              which enables me to develop and maintain databases to support web applications. My ability to work with cross functional teams and communicate effectively allows me to 
              deliver high-quality products that meet business objectives. I have a keen eye for detail and I am committed to staying up-to-date with the latest technologies and industry 
              trends to continuously improve my skill set and provide innovative solutions.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12 mt-5'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ? 
                    <CountUp start={0} end={3} duration={4}  /> : null }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br/>
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ? 
                    <CountUp start={0} end={25} duration={6}  /> : null }
                    +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br/>
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ? 
                    <CountUp start={0} end={10} duration={6}  /> : null }
                    +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satsified <br/>
                  Clients
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
            <Link to='contact'>
              <button className='btn btn-lg'>Contact me</button>
            </Link>
            <Link to='work'>
              <a className='text-gradient btn-link'> My Portfolio </a>
            </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )};

export default About;
