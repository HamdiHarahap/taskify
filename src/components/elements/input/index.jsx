/* eslint-disable react/prop-types */
import Lable from './label'
import Input from './input'

const InputGroup = ({
	label,
	name,
	type,
	placeholder,
	className,
	onChange,
}) => {
	return (
		<div className={`mb-6 ${className}`}>
			<Lable name={name}>{label}</Lable>
			<Input
				name={name}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</div>
	)
}

export default InputGroup
