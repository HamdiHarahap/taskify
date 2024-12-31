import { useState } from 'react'
import InputGroup from '../../elements/input'
import Button from '../../elements/button'
import SelectHour from '../../elements/select/SelectHour'

const TodoForm = () => {
	const [title, setTitle] = useState('')
	const [date, setDate] = useState('')
	const [hour, setHour] = useState('')
	const [note, setNote] = useState('')

	const handleSubmit = () => {
		if (!title || !date || !hour) {
			alert('Please fill in all fields')
			return
		}
		const newTodo = { title, date, hour, note }
		const todos = JSON.parse(localStorage.getItem('todos')) || []
		todos.push(newTodo)
		localStorage.setItem('todos', JSON.stringify(todos))
		alert('To-do added successfully!')
		setTitle('')
		setDate('')
		setHour('')
		setNote('')
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
