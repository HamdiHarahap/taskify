import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../elements/button'

const Sidebar = () => {
	const navigate = useNavigate()
	const [isAuthenticated, setIsAuthenticated] = useState(false)

	useEffect(() => {
		const isLoggedIn = localStorage.getItem('isAuthenticated')
		if (isLoggedIn === 'true') {
			setIsAuthenticated(true)
		} else {
			navigate('/login')
		}
	}, [navigate])

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
					{lists.map((list, index) => {
						return (
							<li
								key={index}
								className="flex justify-between items-center py-2 text-sm"
							>
								<span>{list.icon}</span>
								<span className="w-full font-semibold ms-3">{list.name}</span>
								<span className="bg-gray-200 rounded-full py-1 px-2 text-xs">
									8
								</span>
							</li>
						)
					})}
				</ul>
				<Button className="w-full bg-blue-600">+ Create New List</Button>
			</div>
			<Button
				className="w-full bg-transparent text-left text-[#000000] px-0"
				onClick={handleLogout}
			>
				<img src="/assets/logout.svg" className="w-6 inline-block" />
				Logout
			</Button>
		</aside>
	)
}

export default Sidebar
