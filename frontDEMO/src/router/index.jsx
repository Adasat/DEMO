import {createBrowserRouter, redirect} from 'react-router-dom'
import App from '../App'
import Layout from '../layouts/Layout'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Users from '../pages/Users'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/user',
        element: <Users />,
        loader: () => {
          if (!localStorage.getItem('token')) {
            return redirect('/') //If the user isn't logged in, we redirect to the login page.
          } else {
            return null
          }
        },
      },
    ],
  },
])
