import { NavLink } from "react-router-dom";

export const navLinks = [
	{
		id: 1,
		title: "create balance request",
		link: "/requests/new",
	},
	{
		id: 2,
		title: "verify balance request",
		link: "/requests/verify",
	},
	{
		id: 3,
		title: "About",
		link: "/about",
	},
];

function NavBar() {
	return (
		<nav className='hidden md:flex items-center mr-auto gap-6'>
			{navLinks.map((link) => (
				<NavLink
					to={link.link}
					key={link.id}
					className='text-white/70 transition-colors duration-75 capitalize text-md'>
					{link.title}
				</NavLink>
			))}
		</nav>
	);
}
export default NavBar;
