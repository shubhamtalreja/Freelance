import {Routes, Route } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import './App.css'
import Description from './pages/Description'
import LoginPage from './pages/LoginPage'
import ServiceProviders from './pages/ServiceProviders'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/description' element={<Description/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/sellers' element={<ServiceProviders/>}/>
    </Routes>
    </>
  )
}

export default App
