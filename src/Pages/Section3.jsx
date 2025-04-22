import React from 'react'

const Section3 = () => {
  const imgdata=[
    "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg?im=Resize=580",
    "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg?im=Resize=580",
    "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg?im=Resize=580",
    "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg?im=Resize=580"
  ]
  return (
    <>
       <section className='w-[100%] bg-[#0B0B0B] text-[white] text-center pt-[20px]'>
        <button className='font-semibold text-[20px] border-b-[4px] border-solid hover:bg-amber-400 hover:duration-500 hover:ease-in-out hover:text-[black] border-amber-400 hover:rounded-sm py-[5px] px-[15px]'>View All</button>
         <div className='mx-auto md:max-w-[1370px]  pt-[60px] md:pt-[90px]'>
              <div className='grid grid-cols-1'>
                <img src='https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1aba112359a3d6747ad694a8c02a07c.png' className='rounded-[8%] object-cover px-[20px] w-full hover:scale-102 hover:duration-100  hover:ease-in-out' alt='Rachit'/>
              </div>
              <div className='grid md:grid-cols-4 grid-cols-2'>
                   {
                    imgdata.map((item, index) => (
                      <div key={index} className='p-[15px] py-[20px]'>
                        <img src={item} className='object-cover rounded-[15px] p-[5px]  hover:scale-101 hover:duration-100  hover:ease-in-out'/>
                      </div>
                    ))
                   }
              </div>
              <button className='font-semibold text-[20px] border-b-[4px] border-solid hover:bg-amber-400 hover:duration-500 hover:ease-in-out hover:text-[black] border-amber-400 hover:rounded-sm py-[5px] px-[15px]'>View All</button>
         </div>
       </section>
    </>
  )
}
export default Section3
