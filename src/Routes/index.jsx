import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Login from '../Pages/Login'
import Switch from '../Components/Switch'
import Profile from '../Pages/Profile'
import Home from '../Pages/Home'
import Paypal from '../Pages/Paypal'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/switch',
        element: <Switch/>
    },
    {
      path: '/checkout',
      element: <Paypal/>
    },
    {
      path: '/profile',
      element: <Profile/>
    },
    {
        path: '/home',
        element: <Home/>,
    },
  ]) 