import React from 'react'

const Footer = () => {
  return (
     <>
         <footer className='max-w-[100%] bg-black text-white  border-white border-solid border-t-[1px]'>
            <div className='max-w-[1380px] mx-auto'>
                <div className='grid grid-cols-2 sm:grid-cols-4 p-[40px]  border-white border-solid border-b-[1px]'>
                      <div className=''>
                        <h1 className='text-[20px] pb-[15px]'>About</h1>
                        <p className='text-[15px] pb-[10px]'>About Us</p>
                        <p className='text-[15px] pb-[10px]'>Annual Returns</p>
                        <p className='text-[15px] pb-[10px]'>Contact Us</p>
                        <p className='text-[15px] pb-[10px]'>Annual Returns</p>
                      </div>
                      <div>
                      <h1 className='text-[20px] pb-[15px]'>Account</h1>
                        <p className='text-[15px] pb-[10px]'>My Products</p>
                        <p className='text-[15px] pb-[10px]'>Renewals & Billing</p>
                        <p className='text-[15px] pb-[10px]'>Create Account</p>
                      </div>
                      <div>
                        <h1 className='text-[20px] pb-[15px]'>Support</h1>
                        <p className='text-[15px] pb-[10px]'>Product Support</p>
                        <p className='text-[15px] pb-[10px]'>Report Abuse</p>
                        <p className='text-[15px] pb-[10px]'>Resources</p>
                        
                      </div>
                      <div>
                        <h1 className='text-[20px] pb-[15px]'>Resources</h1>
                        <p className='text-[15px] pb-[10px]'>Webmail</p>
                        <p className='text-[15px] pb-[10px]'> WHOIS</p>
                        <p className='text-[15px] pb-[10px]'>ICANN</p>
                      </div>
                </div>
                <div className='grid grid-cols-1 py-[10px]'>
                      <div className='flex items-center justify-center '>
                        <h1 className='text-[25px] font-semibold'>Developed by : </h1> <span className='text-[20px]'> Rachit Prajapati</span>
                      </div>
                </div>
            </div>
        </footer>
     </>
  )
}

export default Footer
