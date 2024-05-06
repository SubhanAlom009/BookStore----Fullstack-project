import Courses from './components/Courses/Courses'
import Home from './components/Home/Home'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
     <div className='dark:bg-[#1D232A] bg-[#F5F5F5]'>
      <Navbar />
      <Outlet />
      <Footer />
     </div>
    </>
  )
}

export default App
