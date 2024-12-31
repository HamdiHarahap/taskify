import AuthLayout from '../../components/layouts/AuthLayout'
import LoginForm from '../../components/fragments/form/LoginForm'

const LoginPage = () => {
	return (
		<AuthLayout title="Login">
			<LoginForm />
		</AuthLayout>
	)
}

export default LoginPage
