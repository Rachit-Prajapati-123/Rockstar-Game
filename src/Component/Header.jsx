import React, { useState } from 'react'
import Logo from'../assets/Logo.jpg';
import Logoicon from'../assets/Logoicon.svg';
import Searchicon from'../assets/Searchicon.svg';
import Profileicon from'../assets/Profileicon.svg';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faBars, faMobilePhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router';

const Header = () => {
  return (
     <>
        <header className='max-w-[100%] bg-[#020202] border-[#282828] border-[1px] border-solid'>
                <div className='max-w-[1380px] mx-auto '>
                <nav className='flex items-center justify-between mx-[20px] z-10'>
                        <img src={Logo} className='center center cover p-[12px] pl-[10px] hidden lg:block'/>
                        <div className='flex justify-between items-center lg:hidden w-[100%]'>
                        <button className=''>
                        <FontAwesomeIcon icon={faBars} className="text-[25px] text-white"/>
                        </button>
                        <img src={Logo} className='center center cover p-[12px] pl-[10px]'/>
                        <img src={Profileicon} className=' center center cover pr-[20px] block'/>
                        </div>
                        <div className='gap-[25px] hidden lg:flex'>
                          <Link to="#" className='text-[15px] text-[white] font-bold'>Games</Link>
                          <Link to="#" className='text-[15px] text-[white] font-bold'>Newswire</Link>
                          <Link to="#" className='text-[15px] text-[white] font-bold'>Videos</Link>
                          <Link to="#" className='text-[15px] text-[white] font-bold'>Downloads</Link>
                          <Link to="#" className='flex text-[15px] text-[white] font-bold'>Store <img src={Logoicon} className='pl-2 center center cover'/></Link>
                          <Link to="#" className='flex text-[15px] text-[white] font-bold'>Support <img src={Logoicon} className='pl-2 center center cover'/></Link>
                        </div>
                        <span className=' items-center text-[20px] hidden lg:flex'>
                            <button className='bg-amber-400 text-[black] text-[15px] font-bold rounded-[4px] py-[8px] px-[15px] mr-[20px]'>GET LAUNCHER</button>
                            <img src={Searchicon} className='center center cover pr-[20px]'/>
                            <img src={Profileicon} className=' center center cover pr-[20px] block'/>   
                        </span>
                        {/* menu toggler section */}
                      
                       </nav>
                </div>
        </header>
     </>
  )
}

export default Header
