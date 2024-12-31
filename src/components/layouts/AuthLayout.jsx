/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

function AuthLayout({ children, title }) {
	return (
		<>
			<div className="flex justify-center items-center min-h-screen">
				<div className="w-full max-w-xs">
					<h1 className="text-blue-600 text-3xl font-semibold mb-2">{title}</h1>
					<p className="font-medium text-slate-500 mb-4">
						Welcome, Please enter your details
					</p>
					{children}
					<p className="mt-4 text-sm text-center">
						{title === 'Login' ? (
							<>
								Don&lsquo;t have an account?{' '}
								<Link
									to="/register"
									className="text-blue-600 underline font-semibold"
								>
									Register
								</Link>
							</>
						) : (
							<>
								Already have an account?{' '}
								<Link
									to="/login"
									className="text-blue-600 underline font-semibold"
								>
									Login
								</Link>
							</>
						)}
					</p>
				</div>
			</div>
		</>
	)
}

export default AuthLayout
