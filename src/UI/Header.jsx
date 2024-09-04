import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import ConnectWallet from "./ConnectWallet";
import ToggleButton from "./ToggleButton";
import Logo from "./Logo";

function Header() {
	return (
		<header className='flex w-11/12 mx-auto px-2 items-center h-[68px] shadow-md bg-[#00000010] backdrop-blur-sm fixed top-2 left-1/2 -translate-x-1/2 z-[10000]'>
			<Logo />
			<NavBar />
			<div>
				<ConnectWallet />
			</div>
			<ToggleButton />
		</header>
	);
}
export default Header;
