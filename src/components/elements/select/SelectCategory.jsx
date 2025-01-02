/* eslint-disable react/prop-types */

const SelectCategory = ({ selectedCategory, onSelectCategory }) => {
	const categories = ['Work', 'Personal', 'Home']

	return (
		<div className="mb-3">
			<select
				className="w-full border rounded-lg outline-none px-3 py-2 bg-[#f5f5f5]"
				value={selectedCategory}
				onChange={(e) => onSelectCategory(e.target.value)}
			>
				<option value="" disabled>
					Choose a category
				</option>
				{categories.map((category, index) => (
					<option key={index} value={category}>
						{category}
					</option>
				))}
			</select>
		</div>
	)
}

export default SelectCategory
