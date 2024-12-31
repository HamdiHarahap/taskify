/* eslint-disable react/prop-types */
const Button = ({
	className,
	children,
	onClick = () => {},
	type = 'button',
}) => {
	return (
		<button
			type={type}
			className={`h-10 px-6 font-semibold rounded-md ${
				className ? className : 'bg-black'
			}  text-white `}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button
