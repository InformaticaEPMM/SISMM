import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { createBrowserRouter } from 'react-router-dom'
import { Notebook } from './pages/Notebook'


export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/notions',
		element: <Notebook />,
	},

])
