import { useRoutes,BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Singin from '../Singin'
import Navbar from '../../Components/Navbar'
import './App.css'
import { useState } from 'react'

function AppRutas (){
   let rutes = useRoutes([
    {path:'/', element:<Home/>},
    {path:'/my-account', element:<MyAccount/>},
    {path:'/my-order', element:<MyOrder/>},
    {path:'/my-orders', element:<MyOrders/>},
    {path:'/*', element:<NotFound/>},
    {path:'/sing-In', element:<Singin/>}
  
  ])
  return rutes;

}

function App() {
 

  return (
    <BrowserRouter>
      <AppRutas/>
      <Navbar/>
    </BrowserRouter>
  )
}

export default App
