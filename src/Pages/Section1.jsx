import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const images = [
  'https://videos.rockstargames.com/v4/rkoCtr1r/art/global.jpg',
  'https://videos.rockstargames.com/v4/340omtcr/art/global.jpg',
  'https://videos.rockstargames.com/v4/r0ee9g98/art/en-us.jpg',
  'https://videos.rockstargames.com/v4/r50k6mmg/art/global.jpg',  
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  // useEffect(() => {
  //   const timer = setTimeout(nextSlide, 10000);
  //   return () => clearTimeout(timer);
  // }, [current]);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true,
  });

  return (
   <>
     <section className='max-w-[100%] bg-[#020202]'>
          <div className='grid grid-cols-1 md:grid-cols-[70%_30%]'>
          <div className='overflow-hidden' {...handlers}>
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }} >
            {images.map((src, index) => (
             <img
               key={index}
               src={src}
               alt={`Slide ${index}`}
               className="w-full  object-cover "
             />
              ))}
          </div>
          </div>
         <div className='relative md:pl-[45px] px-[30px] py-[40px]'>
              <div className='text-white md:pt-[80px]'>
                  <h4 className='md:text-[15px] text-[12px] font-semibold md:pb-[13px] pb-[7px]'>Grand Theft Auto VI</h4>
                  <h1 className='md:text-[35px] text-[30px] font-semibold md:pb-[23px] pb-[15px]'>Trailer 1</h1>
                  <button className='md:border-[2px] border-[1px] border-solid border-[white] rounded-[5px] mb-[30px] md:text-[22px] text-[20px] font-semibold px-[45px] md:px-[40px] md:py-[13px] py-[5px] w-full md:w-[64%]'>WATCH NOW</button>
              </div>
              <div className="flex gap-2 md:bottom-[14%] absolute bottom-[10%]">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        className={`w-[14px] h-[14px] ml-[10px] rounded-full ${current === idx ? 'bg-white w-[60px]' : 'bg-gray-400'}`}
                        onClick={() => setCurrent(idx)}

                      />
                     ))}
           </div>
        </div>            
          </div>
     </section>
   </>
)};

export default ImageSlider;
