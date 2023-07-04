import React from 'react';
// images
import Logo from "../assets/AkarshLogo.png"

const Header = () => {
  return <header id='header' className='py-8'>
    <div className='container mx-auto'> 
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href='#'>
          <img className='pt-5' src={Logo} alt=''/>
        </a>
        {/* button */}
        <button className='btn btn-sm'>
          Work with me
        </button>
      </div>
    </div>
  </header>;
    
};

export default Header;
