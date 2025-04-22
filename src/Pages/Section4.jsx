import React from 'react'
import Logo from'../assets/Logo.jpg';
import laptop from'../assets/laptop-frame.avif';
import video from'../assets/video.mp4';

const Section4 = () => {
  return (
    <>
     <section className='bg-[#000000] text-[white] max-w-full pt-[50px]'>
             <div className='md:max-w-[1370px] md:mx-auto max-w-full'>
                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-[50px] px-[20px]'>
                            <div className='md:order-1 order-2 sm:text-center'>
                            <img src={Logo} className='object-cover pb-[25px] md:pl-[50%]'/>
                            <h2 className='text-[25px] font-semibold pb-[10px]'>Subscribe to the Rockstar Games Email List</h2>
                            <p className='font-semibold text-[16px]'>Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates.</p>
                            <button className='hover:bg-gray-100 mb-[20px] hover:text-[black] hover:border-black mt-[25px] text-[25px] py-[8px] rounded-[8px] px-[18px] border-[1px] border-solid border-[white] w-full sm:w-[45%]'>SUBSCRIBE NOW</button>
                            </div>
                            <div className='md:order-2 order-1'>
                               <figure className='relative'>
                               <img src={laptop} className='z-50 object-cover' alt='video'/>
                               <video autoPlay loop muted className="absolute top-[0%] left-[17%] sm:left-[16%] bottom-[0%] w-[64%] h-[80%] z-10">
                                  <source src={video} type="video/mp4" />
                                  Your browser does not support the video tag.
                               </video>
                               </figure>   
                            </div>
                    </div>
             </div>
     </section>
    </>
  )
}

export default Section4
