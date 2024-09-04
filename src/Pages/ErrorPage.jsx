import { useNavigate } from "react-router-dom";

function ErrorPage() {
	const navigate = useNavigate();
	return (
		<div className='w-full h-screen grid place-items-center'>
			<div className='w-full md:w-1/2'>
				<h1 className='text-6xl mb-6 text-black font-bold text-center'>
					404
				</h1>
				<p className='text-xl text-center'>
					The page you are looking for does not exist!
				</p>
				<button
					className='py-1 px-3 mt-6 block mx-auto rounded-md border border-black/50'
					onClick={() => navigate("/")}>
					Go Back
				</button>
			</div>
		</div>
	);
}
export default ErrorPage;
