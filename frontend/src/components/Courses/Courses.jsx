import React from 'react'
import list from '../../../public/list.json'
import Cards from '../Cards'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Courses() {
    
  return (
    <div className='container min-h-screen px-4 pt-24 max-w-screen-2xl md:px-20'>
        <div className='flex flex-col items-center justify-center space-y-12 md:text-center'>
            <h1 className='text-3xl font-bold text-[#A6ADBB] md:text-5xl'>Check Out Our <span className='dark:text-primary text-[#FF52D9]'>Courses</span></h1>
            <p className='md:w-[75%] text-sm md:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet minus quae sequi tempore, nam exercitationem a expedita, autem molestias beatae nisi natus sint possimus eum esse fuga aliquid debitis repellat.</p>
        </div>
        <div className='grid grid-cols-1 mt-4 md:mt-20 md:grid-cols-3'>
          {
            list.map((data)=>(
              <Cards key={data.id} data={data}/>
            ))
          }
        </div>
    </div>
  )
}

export default Courses
