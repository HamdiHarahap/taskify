import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../elements/button'

const Sidebar = () => {
	const navigate = useNavigate()
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [categoryCounts, setCategoryCounts] = useState({})

	useEffect(() => {
		const isLoggedIn = localStorage.getItem('isAuthenticated')
		if (isLoggedIn === 'true') {
			setIsAuthenticated(true)
			calculateCategoryCounts()
		} else {
			navigate('/login')
		}
	}, [navigate])

	const calculateCategoryCounts = () => {
		const todos = JSON.parse(localStorage.getItem('todos')) || []
		const counts = todos.reduce((acc, todo) => {
			acc[todo.category] = (acc[todo.category] || 0) + 1
			return acc
		}, {})
		setCategoryCounts(counts)
	}

	const handleLogout = () => {
		const isConfirmed = window.confirm('You sure?')
		if (isConfirmed) {
			localStorage.setItem('isAuthenticated', 'false')
			alert('You have been logged out.')
			navigate('/login')
		}
	}

	if (!isAuthenticated) {
		return null
	}

	const lists = [
		{
			id: 1,
			name: 'Home',
			icon: '🏡',
		},
		{
			id: 2,
			name: 'Personal',
			icon: '🧑',
		},
		{
			id: 3,
			name: 'Work',
			icon: '🏢',
		},
	]

	return (
		<aside className="w-64 bg-white p-5 shadow-lg border-gray-300 h-[100vh] fixed rounded-e-2xl py-10 flex flex-col justify-between">
			<div className="mb-5">
				<h2 className="font-bold text-2xl mb-3">Taskify</h2>
				<ul className="mb-10">
					{lists.map((list) => {
						return (
							<li
								key={list.id}
								className="flex justify-between items-center py-2 text-sm"
							>
								<span>{list.icon}</span>
								<span className="w-full font-semibold ms-3">{list.name}</span>
								<span className="bg-gray-200 rounded-full py-1 px-2 text-xs">
									{categoryCounts[list.name] || 0}
								</span>
							</li>
						)
					})}
				</ul>
				<Button className="w-full bg-blue-600">+ Create New List</Button>
			</div>
			<Button
				className="w-full bg-transparent text-left text-[black] px-0"
				onClick={handleLogout}
			>
				<img
					src="/assets/logout.svg"
					className="w-6 inline-block"
					alt="logout"
				/>
				Logout
			</Button>
		</aside>
	)
}

export default Sidebar
