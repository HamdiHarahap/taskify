const Header = () => {
	const username = localStorage.getItem('username')
	const currentDate = new Date().toLocaleDateString('en-EN', {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})

	return (
		<div className="">
			<h1 className=" font-semibold text-2xl">Welcome, {username}! 👋</h1>
			<p className="text-gray-400">{currentDate}</p>
		</div>
	)
}

export default Header
