import AuthLayout from '../../components/layouts/AuthLayout'
import RegisterForm from '../../components/fragments/form/RegisterForm'

const RegisterPage = () => {
	return (
		<AuthLayout title="Register">
			<RegisterForm />
		</AuthLayout>
	)
}

export default RegisterPage
