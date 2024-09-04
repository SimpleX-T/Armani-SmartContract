import { Link } from "react-router-dom";

function Logo() {
	return (
		<div className='mr-auto'>
			<Link
				to='/'
				className='text-2xl text-white uppercase font-bold flex items-center gap-3'>
				<img
					src='logo.svg'
					alt='logo'
				/>
				<h1>
					am<span className='text-yellow-400'>a</span>ni
				</h1>
			</Link>
		</div>
	);
}
export default Logo;
