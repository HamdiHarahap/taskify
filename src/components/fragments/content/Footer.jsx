import { useState } from 'react'
import Button from '../../elements/button'
import TodoForm from '../form/TodoForm'

const Footer = () => {
	const [visible, setVisible] = useState(false)

	const toggleVisibility = () => {
		setVisible(!visible)
	}

	return (
		<div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-4">
			<div className="flex flex-col">
				<div className={`${visible ? 'block' : 'hidden'} bg-white rounded-lg`}>
					<TodoForm />
				</div>
				<Button className="mt-4 bg-black w-[30rem]" onClick={toggleVisibility}>
					+ Create new task
				</Button>
			</div>
		</div>
	)
}

export default Footer
