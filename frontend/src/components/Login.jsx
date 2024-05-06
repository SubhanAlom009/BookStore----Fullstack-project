import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit =async (data) => {
        const userInfo = {
            email:data.email,
            password:data.password
        }
       await axios.post("http://localhost:4000/user/login",userInfo).then((res)=>{
            if(res.data){
                toast.success('Loggedin Successfully');
            }
            localStorage.setItem("Users",JSON.stringify(res.data.User
            ));
        }).catch((err)=>{
            toast.error('error:',err);
        })
      }
  return (
    <div>
        <dialog id="my_modal_1" className="modal ">
            <div className=" modal-box bg-[#e1e1e1] space-y-8 dark:bg-slate-950">
                <div className='flex items-center justify-between'>
                    <h3 className="text-2xl font-bold">Login please</h3>
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="border border-slate-400 px-4 py-2 rounded-lg dark:hover:bg-base-200 hover:bg-gray-200 duration-200  bg-[#e1e1e1] dark:bg-slate-950">X</button>
                    </form>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
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
                    <input type='submit' value="Login" className='border cursor-pointer border-slate-400 px-4 py-2 rounded-lg duration-300 hover:bg-slate-800 mt-8 bg-[#e1e1e1] dark:bg-slate-950'/>
                    <div className='flex justify-center mt-2 space-x-2'>
                        <p>Not registered?</p>
                        <a href="/register" className='underline text-primary'>Register</a>
                    </div>
                </form>
                <div className="modal-action">
                </div>
            </div>
        </dialog>
    </div>
  )
}

export default Login
