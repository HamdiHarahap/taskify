import { useState } from 'react'
import InputGroup from '../../elements/input'
import Button from '../../elements/button'
import SelectHour from '../../elements/select/SelectHour'
import SelectCategory from '../../elements/select/SelectCategory'

const TodoForm = () => {
	const [title, setTitle] = useState('')
	const [date, setDate] = useState('')
	const [hour, setHour] = useState('')
	const [note, setNote] = useState('')
	const [category, setCategory] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!title || !date || !hour || !category) {
			alert('Please fill in all fields')
			return
		}

		const todos = JSON.parse(localStorage.getItem('todos')) || []
		const lastId = todos.length > 0 ? todos[todos.length - 1].id : 0
		const newId = lastId + 1

		const newTodo = { id: newId, title, date, hour, note, category }

		todos.push(newTodo)
		localStorage.setItem('todos', JSON.stringify(todos))

		alert('To-do added successfully!')
		location.reload()
	}

	return (
		<form onSubmit={handleSubmit} className="py-3 px-2 flex flex-col gap-1">
			<InputGroup
				className="mb-0 font-semibold"
				placeholder="Task title"
				label=""
				name="title"
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<SelectCategory
				selectedCategory={category}
				onSelectCategory={setCategory}
			/>
			<InputGroup
				className="mb-0"
				placeholder="Select date"
				label=""
				name="date"
				type="date"
				value={date}
				onChange={(e) => setDate(e.target.value)}
			/>
			<SelectHour selectedHour={hour} onSelectHour={(hour) => setHour(hour)} />
			<textarea
				className="w-full border rounded-lg outline-none h-[8rem] px-3 py-2 placeholder-opacity-50 mb-3 bg-[#f5f5f5]"
				placeholder="Your notes"
				value={note}
				onChange={(e) => setNote(e.target.value)}
			></textarea>
			<Button type="submit" className="bg-blue-600 w-full">
				Set Todo
			</Button>
		</form>
	)
}

export default TodoForm
