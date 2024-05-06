import React from 'react'
import pic3 from '../assets/images/pic3.jpg'

function About() {
  return (
    <div className='container flex flex-col items-center min-h-screen px-4 pt-24 max-w-screen-2xl md:px-20'>
        <div className='flex flex-col items-center'>
            <h1 className='my-8 text-3xl font-bold md:text-5xl '>ABOUT US</h1>
            <div>
                <img className='rounded-lg md:w-[800px]' src={pic3} />
            </div>
            <div className='mt-8 space-y-4 text-3xl text-center md:mx-40'>
                <p>Welcome to "BookStore" - Your Gateway to Valuable Books</p>

                <p>At "BookStore", we believe in the transformative power of books. Founded by a passionate team of bibliophiles, we're on a mission to provide you with access to a curated collection of valuable books that inspire, educate, and enrich lives.</p>

                <p>Our journey began with a simple idea: to connect readers with books that matter. Whether you're an avid reader seeking your next literary adventure or someone embarking on a journey of personal growth, we're here to guide you every step of the way.</p>

                <p>What sets us apart is our unwavering commitment to quality and relevance. Every book in our collection undergoes meticulous selection, ensuring that each title offers genuine value and insight. From timeless classics to cutting-edge discoveries, we handpick books that resonate with our readers, sparking curiosity and igniting passions.</p>

                <p>But we're more than just a bookstore - we're a community of book lovers united by a shared love for knowledge and exploration. Through our blog, social channels, and events, we foster meaningful connections, sparking conversations, and celebrating the joy of reading together.</p>

                <p>Whether you're seeking inspiration, knowledge, or simply a good read, "BookStore" is your trusted partner on your literary journey. Join us as we embark on a quest to discover the endless possibilities that lie within the pages of a book.</p>

                <p>Thank you for choosing "BookStore". Together, let's dive into a world of endless imagination and discovery.</p>
            </div>
        </div>
    </div>
  )
}

export default About
