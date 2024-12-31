import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import LoginPage from './pages/auth/login.jsx'
import RegisterPage from './pages/auth/register.jsx'
import ErrorPage from './pages/404.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />, // Halaman utama
		children: [
			{ index: true, element: <Navigate to="/login" /> }, // Default ke login
		],
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/register',
		element: <RegisterPage />,
	},
	{
		path: '*',
		element: <ErrorPage />,
		errorElement: <ErrorPage />,
	},
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
