/* eslint-disable react/prop-types */
const Lable = ({ label, name }) => {
	return (
		<label htmlFor={name} className="font-semibold mb-2 text-sm">
			{label}
		</label>
	)
}

export default Lable
