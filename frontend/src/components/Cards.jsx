import React from 'react'

function Cards({data}) {
  return (
    <div className='p-4'>
        <div className="flex justify-center duration-200 border shadow-xl cursor-pointer card bg-base-100 border-slate-600 md:hover:scale-105">
            <figure className='w-full '>
            <img src={data.image} alt="Shoes" /></figure>
            <div className="flex flex-col bg-[#e9e9e9] rounded-b-2xl dark:bg-[#1D232A] justify-center card-body">
                <h2 className="text-3xl font-bold card-title">
                {data.title}
                <div className="badge badge-secondary">{data.category}</div>
                </h2>
                <div className="justify-end mt-4 card-actions">
                <p className='font-mono text-2xl'>&#36;{data.price}</p>
                <div className="p-4 font-mono text-xl cursor-pointer badge badge-outline hover:bg-[#FF52D9] hover:text-slate-700">Buy now</div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
