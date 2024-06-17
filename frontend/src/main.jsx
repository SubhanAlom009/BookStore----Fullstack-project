import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Courses from './components/Courses/Courses.jsx'
import Register from './components/Register.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import AuthProvider, { useAuth } from './components/context/AuthProvider.jsx'
import { useOutletContext } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { authUser } = useOutletContext();
  if (!authUser) {
    return <Navigate to="/register" replace />;
  }
  return children;
}

const router = createBrowserRouter(
  
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />}/>
      <Route path='/courses' element={<ProtectedRoute><Courses /></ProtectedRoute>}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/about' element={<About />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)