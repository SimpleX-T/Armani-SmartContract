import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useApp } from "../Hooks/AppProvider";

function LandingPage() {
	const navigate = useNavigate();
	const { walletAddress } = useApp();

	function handleButtonClick(link) {
		if (!walletAddress) {
			alert("Please connect your Wallet Address");
			return;
		}

		navigate(link);
	}
	return (
		<section className='w-full grid place-items-center h-[80vh] translate-y-[70px] relative'>
			<div className='w-5/6 md:w-4/5'>
				<div className='w-full md:w-5/6 mb-6'>
					<div className='bg-gradient-to-r from-[#ffffff20] to-[#ffffff10] w-16 h-6 md:w-32 md:h-12 rounded-sm backdrop-blur-md border border-white/10 mb-2'></div>
					<h1 className='text-white text-5xl md:text-8xl mb-4'>
						Proof of funds request in one click
					</h1>
					<p className='text-white text-xl font-light'>
						Smart contract mediated proof of fund requests on Lisk
						with one click
					</p>
				</div>
				<div className='w-full flex items-center gap-4'>
					<button
						onClick={() => handleButtonClick("/requests/new")}
						className='text-sm rounded-sm p-2 md:p-4 bg-white'>
						Create Balance Request
					</button>
					<button
						onClick={() => handleButtonClick("/")}
						className='text-lg rounded-full p-3 bg-[#070e53] text-white'>
						<FaArrowRight />
					</button>
				</div>
			</div>
		</section>
	);
}
export default LandingPage;
