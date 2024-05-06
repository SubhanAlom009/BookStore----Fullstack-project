import React, { useEffect, useState } from 'react'
import pic2 from '../assets/images/pic2.jpg'

function Banner() {
  return (
    <div className={'max-w-screen-2xl container md:px-20 px-4 pt-24'}>
      <div className='flex flex-col-reverse justify-center md:flex-row item-center md:space-x-8 '>
        <div className='space-y-8 md:w-1/2'>
            <h1 className='text-2xl font-bold md:text-5xl'>Welcome to our website, Learn something <span className='dark:text-primary text-[#FF52D9]'>new Everyday</span></h1>
            <p className='text-sm md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sit repellat ipsam impedit expedita. Inventore ad voluptatem, aliquid sapiente molestias modi quisquam? Natus, quaerat porro! Illum fugit perspiciatis aliquam numquam.</p>
            <label className="flex items-center gap-2 input input-bordered bg-[#F5F5F5] dark:bg-[#1D232A] border border-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input type="text" className="grow" placeholder="Email" />
            </label>
            <button className="btn btn-primary hover:bg-[#f617e3] border-none dark:bg-primary dark:hover:bg-[#1970da] bg-[#FF52D9]">Subscribe</button>
        </div>
        <div className='mb-8 md:w-1/2 md:mb-0 '>
            <img className='rounded-lg' src={pic2} />
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}

export default Banner
