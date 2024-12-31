import InputGroup from '../../elements/input'
import Button from '../../elements/button'

const handleLogin = (e) => {
	e.preventDefault()

	const username = localStorage.getItem('username')
	const password = localStorage.getItem('password')

	if (e.target.username.value === username) {
		if (e.target.password.value === password) {
			localStorage.setItem('isAuthenticated', 'true')
			alert('Login Success')
			window.location.href = '/'
			return
		}
	}

	alert('Login Failed')
}

const LoginForm = () => {
	return (
		<form onSubmit={handleLogin}>
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
			<Button className="bg-blue-600" type="submit">
				Login
			</Button>
		</form>
	)
}

export default LoginForm
