import { useEffect, useState } from 'react'

const Body = () => {
	const [todos, setTodos] = useState([])
	const [selectedTodoIndex, setSelectedTodoIndex] = useState(null)

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem('todos')) || []
		setTodos(storedTodos)
	}, [])

	const handleTodoClick = (index) => {
		setSelectedTodoIndex(selectedTodoIndex === index ? null : index)
	}

	const handleCloseNote = (e) => {
		if (e.target.id === 'overlay') {
			setSelectedTodoIndex(null)
		}
	}

	return (
		<div className="relative">
			{selectedTodoIndex !== null && (
				<div
					id="overlay"
					className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-10"
					onClick={handleCloseNote}
				></div>
			)}

			<div className="flex flex-col gap-2 mt-10">
				<h1 className="text-xl font-semibold mb-3">Your To-do</h1>
				{todos.length > 0 ? (
					todos.map((todo, index) => (
						<div
							key={index}
							className={`flex items-center bg-white rounded-lg px-3 py-2 justify-between cursor-pointer hover:bg-gray-200 ${
								selectedTodoIndex !== null ? 'blur-sm' : ''
							}`}
							onClick={() => handleTodoClick(index)}
						>
							<div className="flex items-center">
								<div className="w-4 h-4 border-gray-400 border-2 rounded-md"></div>
								<h3 className="font-semibold ms-2">{todo.title}</h3>
							</div>
							<div>
								<span className="bg-[#f5f5f5] px-3 py-1 rounded-lg text-gray-500">
									{todo.hour || 'N/A'}
								</span>
								<span className="bg-[#f5f5f5] px-3 py-1 rounded-lg text-gray-500 ms-2">
									{todo.date || 'N/A'}
								</span>
							</div>
						</div>
					))
				) : (
					<p className="text-gray-500">No To-do available. Add one!</p>
				)}

				{selectedTodoIndex !== null && (
					<div className="mt-4 px-3 py-2 rounded-lg ms-[20rem] bg-white fixed w-[65rem] left-0 h-[10rem] z-20">
						<h3 className="font-semibold text-lg mb-2">Note</h3>
						<p>{todos[selectedTodoIndex].note || 'No notes available.'}</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default Body
