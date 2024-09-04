import { NavLink } from "react-router-dom";
import { navLinks } from "./NavBar";
import { useApp } from "../Hooks/AppProvider";
import ToggleButton from "./ToggleButton";

function MobileNav() {
	const { isOpen } = useApp();
	return (
		<nav
			role='navigation'
			className='flex flex-col pt-32 px-3 shadow-md w-72 z-[1000] fixed right-0 top-0 md:hidden h-screen transition-all duration-300 bg-[#04071d]'
			style={{ transform: `translateX(${isOpen ? 0 : 100}%)` }}>
			<ul className='flex flex-col gap-2'>
				{navLinks.map((link) => (
					<NavLink
						to={link.link}
						key={link.id}
						className='text-white capitalize block w-full p-2 rounded-lg hover:bg-blue-900'>
						{link.title}
					</NavLink>
				))}
			</ul>
		</nav>
	);
}
export default MobileNav;
