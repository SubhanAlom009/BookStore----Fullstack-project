import Courses from './components/Courses/Courses'
import Home from './components/Home/Home'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast';
import AuthProvider from './components/context/AuthProvider.jsx'
import { useAuth } from './components/context/AuthProvider.jsx'


function App() {
  return (
    <AuthProvider>
     <div className='dark:bg-[#1D232A] bg-[#F5F5F5]'>
      <Navbar />
      <Outlet/>
      <Footer />
      <Toaster />
     </div>
    </AuthProvider>
  )
}

export default App
