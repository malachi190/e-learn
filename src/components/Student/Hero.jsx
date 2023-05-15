import React from 'react'

const Hero = () => {
  return (
    <div className='container-fluid mx-auto bg-black text-white md:p-3 p-1 flex flex-auto justify-between items-baseline'>
      <div className='mt-10 text-start'>
        <h1 className='sm:text-xl md:text-2xl text-orange-500'>Welcome</h1>
        <p className='ml-10' style={{fontSize: '13px'}}>Student name</p>
      </div>
      <div className='mx-5'>
          <p className='font-bold text-orange-500 text-[20px]'>Account</p>
         <p className='bg-transparent md:px-5 md:py-3 p-4  text-[15px] text-center text-white border border-orange-500'>$5000</p>
      </div>
    </div>
  )
}

export default Hero
