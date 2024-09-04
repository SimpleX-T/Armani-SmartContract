function VerifyBalance() {
	return (
		<section className='w-5/6 mx-auto md:w-1/2 translate-y-[100px] gap-8 bg-gradient-to-tl from-black/10 to-white/10 rounded-lg border backdrop-blur-md border-white/40 p-6'>
			<h2 className='text-xl text-white font-bold mb-2'>Find Request</h2>
			<p className='text-white/50 mb-3'>
				Find and verify a fund request using your wallet.
			</p>
			<input
				type='text'
				className='bg-transparent border border-white/40 p-4 mb-4 text-white'
				placeholder='Enter request Address'
			/>
			<button className='rounded-md p-4 border border-white/40 bg-[#6977fc70] font-semibold block text-white'>
				Go To Request Page
			</button>
		</section>
	);
}
export default VerifyBalance;
