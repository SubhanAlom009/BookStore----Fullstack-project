import React from 'react'
import { useAuth } from './context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser,setAuthUser] = useAuth()

    const handlelogout = ()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem('Users')
            toast.success('Logged out successfully')
            setTimeout(()=>{
              window.location.reload()
            },2000)
        } catch (error) {
            toast.error(error.message)
        }
    }
  return (
    <div>
      <button className='btn btn-primary' type="button" onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Logout
