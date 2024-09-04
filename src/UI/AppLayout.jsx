import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MobileNav from "./MobileNav";

function AppLayout() {
	return (
		<div className='relative w-full min-h-screen app z-0 overflow-y-scroll'>
			<Header />
			<MobileNav />
			<Outlet />
			<Footer />
		</div>
	);
}
export default AppLayout;
