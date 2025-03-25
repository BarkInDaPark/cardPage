import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'

import Homepage from './pages/Homepage'
import About from './pages/About'
import NotFoundPage from './pages/Notfoundpage'
import Contact from './pages/Contact'
import Profiles from './pages/Profiles'
import ProfilePage from './pages/ProfilePage'
import Cards from './components/Cards'
import Navbar from './components/Navbar'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([{
  element: <Layout />,
  errorElement: <NotFoundPage />,
  children: [
    {
      path: '/',
      element: <Homepage />,
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/profiles',
      element: <Profiles />,
      children: [
        {
          path:'/profiles/:profileId',
          element: <ProfilePage />
        }],
    },
    {
      path:'/Cards',
      element: <Cards />
    }
  ]
},
,]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
