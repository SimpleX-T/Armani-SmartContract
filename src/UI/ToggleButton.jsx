import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useApp } from "../Hooks/AppProvider";

function ToggleButton() {
	const { isOpen, handleToggle } = useApp();
	return (
		<button
			onClick={() => handleToggle((open) => !open)}
			className='z-[1000] p-1 rounded-md block md:hidden focus:border-blue-900 border-2 border-transparent'>
			{isOpen ? (
				<FaTimes className='text-white text-2xl cursor-pointer' />
			) : (
				<FaBars className='text-white text-2xl cursor-pointer' />
			)}
		</button>
	);
}
export default ToggleButton;
