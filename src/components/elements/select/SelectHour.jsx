/* eslint-disable react/prop-types */
import { useState } from 'react'

const SelectHour = ({ selectedHour, onSelectHour }) => {
	const [isOpen, setIsOpen] = useState(false)
	const hours = [
		['00.00', '01.00', '02.00', '03.00'],
		['04.00', '05.00', '06.00', '07.00'],
		['08.00', '09.00', '10.00', '11.00'],
		['12.00', '13.00', '14.00', '15.00'],
		['16.00', '17.00', '18.00', '19.00'],
		['20.00', '21.00', '22.00', '23.00'],
	]

	const handleSelect = (hour) => {
		onSelectHour(hour)
		setIsOpen(false)
	}

	return (
		<div className="relative w-full">
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="w-full border rounded-md px-4 py-2 bg-white text-left"
			>
				{selectedHour || 'Select Hour'}
			</button>

			{isOpen && (
				<div className="absolute mt-2 bg-white border rounded-md shadow-lg z-10 flex gap-4 p-4 w-full">
					{hours.map((column, columnIndex) => (
						<div key={columnIndex} className="flex flex-col space-y-1">
							{column.map((hour, hourIndex) => (
								<button
									key={hourIndex}
									type="button"
									className="block text-left hover:bg-gray-200 px-2 py-1 rounded"
									onClick={() => handleSelect(hour)}
								>
									{hour}
								</button>
							))}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default SelectHour
