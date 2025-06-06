import './App.css'
import Navbar from './components/Navbar.jsx'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import SignUpPage from './components/SignUpPage.jsx'
import LoginPage from './components/LoginPage.jsx'
import SettingsPage from './components/SettingsPage.jsx'
import ProfilePage from './components/ProfilePage.jsx'
import { useAuthStore } from './store/useAuthStore.js'
import { useThemeStore } from './store/useThemeStore.js'
import { useEffect } from 'react'
import {Loader} from 'lucide-react'
import { Toaster } from "react-hot-toast";


function App() {

  const {authUser, checkAuth, isCheckingAuth} = useAuthStore()
  const {theme} = useThemeStore()
  useEffect(()=>{
    checkAuth()
  },[checkAuth])

  console.log(authUser);

  if(isCheckingAuth && !authUser) return(
    <div className='flex items-center justify-center h-screen'>
      <Loader className='size-10 animate-spin'/>
    </div>
  )
  
  return (
    <div data-theme={theme}>
      <Navbar />

      <Routes>
        <Route path='/' element={authUser ? <HomePage/> : <Navigate to='/login'/>}/>
        <Route path='/signup' element={!authUser ? <SignUpPage/> : <Navigate to='/'/>}/>
        <Route path='/login' element={!authUser ? <LoginPage/> : <Navigate to='/login'/>}/>
        <Route path='/settings' element={<SettingsPage/>}/>
        <Route path='/profile' element={authUser ? <ProfilePage/> : <Navigate to='/login'/>}/>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
