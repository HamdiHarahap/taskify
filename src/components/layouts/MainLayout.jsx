import Sidebar from '../fragments/sidebar'
import MainContent from '../fragments/content'

const MainLayout = () => {
	return (
		<div className="pe-[10rem]">
			<Sidebar />
			<MainContent />
		</div>
	)
}

export default MainLayout
