import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router'


import Home from './Pages/Home'
import RecipeDetail from './Pages/RecipeDetail'
import UserList from './Pages/UserList'
import UserDetail from './Pages/UserDetail'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'


function Layout() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <nav style={{ display: 'flex', gap: '15px', marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <Link to="/">Accueil</Link>
        <Link to="/users">Annuaire</Link>
        <Link to="/login">Connexion</Link>
        <Link to="/profile">Mon Profil</Link>
      </nav>
      {/* */}
      <Outlet />
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/recipe/:id', element: <RecipeDetail /> },
      { path: '/users', element: <UserList /> },
      { path: '/users/:id', element: <UserDetail /> },
      { path: '/login', element: <Login /> },
      { path: '/profile', element: <Profile /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)