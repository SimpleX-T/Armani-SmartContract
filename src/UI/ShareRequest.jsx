import { FaExternalLinkAlt, FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function ShareRequest() {
	return (
		<div className='border border-white/60 w-full md:w-1/2 rounded-lg px-4 py-8 bg-gradient-to-tl from-[#00000070] to-[#070e3560]'>
			<div className='mb-8 p-2 mx-auto md:mb-12'>
				<h2 className='text-white text-3xl font-semibold mb-2 md:text-2xl'>
					Create new proof of balance request
				</h2>
				<p className='text-lg text-white/50 mb-6'>
					Create a new balance verification request. This item will
					become publicly available for other users to discover.
				</p>
				<button className='hidden md:flex items-center gap-3 px-4 py-3 rounded-lg bg-white text-black'>
					<span>
						<FaExternalLinkAlt />
					</span>
					<span>Create another account</span>
				</button>
			</div>
			<div className='w-full text-white'>
				<span className='text-8xl text-center mx-auto text-white flex items-center justify-center mb-6'>
					<FaRegCheckCircle className='text-center' />
				</span>
				<h2 className='text-center text-xl font-semibold mb-2'>
					Request created successfully
				</h2>
				<p className='text-white/50 text-lg text-center mb-6'>
					Share the below url with the intended recipient
				</p>

				<div className='flex flex-wrap gap-3'>
					<Link
						to='/'
						target='_blank'
						className='flex items-center gap-3 text-lg mx-auto w-50 min-w-50 hover:bg-[#070e35] border border-white/70 transition-colors duration-200 py-3 px-4 rounded-md bg-[#070e3560]'>
						<span className='text-md text-white'>
							<FaExternalLinkAlt />
						</span>
						<span className='text-white'>View contract</span>
					</Link>
					<Link
						to='/'
						className='flex items-center gap-3 text-lg mx-auto w-50 min-w-50 hover:bg-white font-semibold transition-colors duration-200 py-3 px-4 rounded-md bg-white/60'>
						<span className='text-black'>View request page</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
export default ShareRequest;
