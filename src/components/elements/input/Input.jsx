/* eslint-disable react/prop-types */
const Input = ({ type, name, placeholder, onChange }) => {
	return (
		<input
			type={type}
			name={name}
			id={name}
			placeholder={placeholder}
			className="text-sm rounded-lg placeholder-opacity-50 px-3 py-2 border outline-none w-full"
			onChange={onChange}
		/>
	)
}

export default Input
