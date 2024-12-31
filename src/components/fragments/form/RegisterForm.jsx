import InputGroup from '../../elements/input'
import Button from '../../elements/button'

const handleRegist = (e) => {
	e.preventDefault()

	const password = e.target.password.value
	const confirm = e.target.confPassword.value

	if (password !== confirm) {
		alert('password tidak sesuai')
		window.location.reload()
		return
	}

	const userData = {
		username: e.target.username.value,
		password,
	}

	Object.entries(userData).forEach(([key, value]) => {
		localStorage.setItem(key, value)
	})

	alert('Registerasi Berhasil')
	window.location.href = '/login'
}

const RegisterForm = () => {
	return (
		<form onSubmit={handleRegist}>
			<InputGroup
				label="Username"
				name="username"
				placeholder="your username"
				type="text"
			/>
			<InputGroup
				label="Password"
				name="password"
				placeholder="******"
				type="password"
			/>
			<InputGroup
				label="Confirm Password"
				name="confPassword"
				placeholder="******"
				type="password"
			/>
			<Button className="bg-blue-600" type="submit">
				Register
			</Button>
		</form>
	)
}

export default RegisterForm
