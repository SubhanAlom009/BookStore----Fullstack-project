import React from 'react'
import { useForm } from "react-hook-form"

function AboutUs() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)
  return (
      <div className='container flex items-center justify-center px-4 pt-24 max-w-screen-2xl md:px-20'>
        <div className=" p-6 rounded-lg bg-[#e1e1e1] space-y-8 dark:bg-slate-950 w-full ">
            <div className='flex items-center justify-between'>
                <h3 className="text-2xl font-bold md:text-5xl">Contact Us</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                <label htmlFor="my_modal_1 " className="mb-8 space-y-1">
                    <p>Name</p>
                    <input {...register("text", { required: true })} type="text" name="text" placeholder="User name" className=" bg-[#e1e1e1] dark:bg-slate-950 border border-gray-400 w-full  input input-bordered" />
                    {errors.text && <span className='text-red-500'>This field is required</span>}
                </label>
                <label htmlFor="my_modal_1 " className="space-y-1">
                    <p>Email</p>
                    <input {...register("email", { required: true })} type="email" name="email" placeholder="email" className=" bg-[#e1e1e1] dark:bg-slate-950 border border-gray-400 w-full  input input-bordered" />
                    {errors.email && <span className='text-red-500'>This field is required</span>}
                </label>
                <label htmlFor="my_modal_1 " className="flex flex-col space-y-1">
                    <p className='mt-8'>Message</p>
                    <textarea className='bg-[#e1e1e1] dark:bg-slate-950 border p-4 border-gray-400 w-full rounded-lg' rows={5} name="message" minLength={100} {...register("message", { required: true })} ></textarea>
                    {errors.message && <span className='text-red-500'>This field is required</span>}
                </label>
                <input type='submit' value={"Send"} className='border cursor-pointer border-slate-400 px-4 py-2 rounded-lg duration-300 hover:bg-slate-800 mt-8 bg-[#e1e1e1] dark:bg-slate-950'/>

            </form>
            <div className="modal-action">
            </div>
        </div>
    </div>
  )
}

export default AboutUs
