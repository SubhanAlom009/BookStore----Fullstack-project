import React, { useState,useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';


function Freebook() {
    const [book,setBook] = useState([]);
    
    useEffect(()=>{
      const getBook = async()=>{
        try {
          const res = await axios.get("http://localhost:4000/api/books")
          console.log(res.data);
          setBook(res.data)
        } catch (error) {
          console.log('cant fetch api',error);
        }
      }
      getBook();
    },[])

    const filterData = book.filter((data)=>( data.category === "free" ))
    console.log(filterData);
    

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      };


  return (
    <div className='container px-4 my-20 max-w-screen-2xl md:px-20'>
      <div className='mb-10 space-y-2'>
        <h1 className='text-4xl font-bold text-slate-600'>Free Books</h1>
        <p className='font-mono text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, ratione mollitia enim quos ipsum ipsam excepturi magnam, unde atque, quae tempore. Repudiandae, beatae odit facere earum adipisci nam autem quasi?</p>
      </div>
      <div>
      <Slider {...settings}>
        {
          filterData.map((data)=>(
            <Cards key={data.id} data={data} />
          ))
        }
      </Slider>
      </div>
    </div>
  )
}

export default Freebook
