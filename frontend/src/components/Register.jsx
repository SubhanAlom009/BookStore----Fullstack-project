import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit =async (data) => {
        const userInfo = {
            fullname:data.fullname,
            email:data.email,
            password:data.password
        }
       await axios.post("http://localhost:4000/user/register",userInfo).then((res)=>{
            console.log(res.data);
            if(res.data){
                toast.success('Registered Successfully');

            }
            localStorage.setItem("Users",JSON.stringify(res.data.User
            ));
        }).catch((err)=>{
            console.log(err);
            toast.error('error:',err);
        })
      }
  return (
    <div className='container flex items-center justify-center px-4 pt-24 max-w-screen-2xl md:px-20'>
       <div className=" modal-box bg-[#e1e1e1] space-y-8 dark:bg-slate-950">
            <div className='flex items-center justify-between'>
                <h3 className="text-2xl font-bold">Register please</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                <label htmlFor="my_modal_1 " className="mb-8 space-y-1">
                    <p>User Name</p>
                    <input {...register("fullname", { required: true })} type="text" name="fullname" placeholder="User name" className=" bg-[#e1e1e1] dark:bg-slate-950 border border-gray-400 w-full  input input-bordered" />
                    {errors.fullname && <span className='text-red-500'>This field is required</span>}
                </label>
                <label htmlFor="my_modal_1 " className="space-y-1">
                    <p>Email</p>
                    <input {...register("email", { required: true })} type="email" name="email" placeholder="email" className=" bg-[#e1e1e1] dark:bg-slate-950 border border-gray-400 w-full  input input-bordered" />
                    {errors.email && <span className='text-red-500'>This field is required</span>}
                </label>
                <label htmlFor="my_modal_1 " className="space-y-1">
                    <p className='mt-8'>Password</p>
                    <input {...register("password", { required: true })} type="password" name="password" placeholder="password" className="bg-[#e1e1e1] dark:bg-slate-950 border border-gray-400 w-full input input-bordered" />
                    {errors.password && <span className='text-red-500'>This field is required</span>}
                </label>
                <input type='submit' value={"Register"} className='border cursor-pointer border-slate-400 px-4 py-2 rounded-lg duration-300 hover:bg-slate-800 mt-8 bg-[#e1e1e1] dark:bg-slate-950'/>

            </form>
            <div className="modal-action">
            </div>
        </div>
    </div>
  )
}

export default Register
