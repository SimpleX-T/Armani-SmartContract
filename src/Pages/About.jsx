function About() {
	return (
		<section className='w-11/12 md:w-4/5 bg-gradient-to-tl from-[#a4a0ba25] border border-white/60 text-white mx-auto p-4 rounded-lg translate-y-[100px] to-[#657af121]'>
			<div className='mb-4'>
				<h2 className='font-semibold mb-2'>
					About Am<span className='text-yellow-400'>a</span>ni
					SmartContract
				</h2>
				<p className='text-white/70 text-justify'>
					Learn more about SmartContract and how it works.
				</p>
			</div>

			<div className='mb-4'>
				<h2 className='font-semibold mb-2'>
					What is Am<span className='text-yellow-400'>a</span>ni
					SmartContract
				</h2>
				<p className='text-white/70 text-justify'>
					<span className='block'>
						Many high-value purchases usually warrant proof of funds
						requests in order to determine whether a given offer or
						potential buyer is serious.
					</span>
					<span className='block'>
						With this Amani SmartContract, you can prove or assert
						that you have a certain balance on connected wallets
						without exposing bank statements or keys to the
						requester. This app generates a proof point at the time
						of verification that can be shared with the requester
						with a signature hash saved to the contract.
					</span>
				</p>
			</div>

			<div className='mb-4'>
				<h2 className='font-semibold mb-2'>How does it work?</h2>
				<p className='text-white/70 text-justify'>
					<span className='block'>
						Just as you have a physical wallet for cash, on the Lisk
						blockchain, both you and the buyer have digital wallets
						containing Lisk tokens (LSK), which function as digital
						currency. When the buyer wants to make a payment, the
						Amani Smart Contract acts as a digital assistant,
						automatically checking the buyer’s wallet to verify
						sufficient funds. During the verification process, the
						Amani Smart Contract reads the Lisk blockchain to check
						the buyer’s wallet balance. The Lisk blockchain is a
						decentralized and secure digital ledger that records all
						transactions across a network of nodes (computers). This
						decentralized nature ensures that the verification
						process is tamper-proof and trustworthy.
					</span>
					<span className='block'>
						Here’s what happens during a transaction:
					</span>
					<span className='block'>
						1. Verification: The Amani Smart Contract checks if the
						buyer has enough LSK in their digital wallet. If the
						funds are sufficient, the smart contract approves the
						transaction. Otherwise, it is rejected, ensuring that
						only validated transactions proceed.
					</span>
					<span className='block'>
						2. Execution: Once approved, the LSK tokens are
						automatically transferred from the buyer’s wallet to the
						seller’s wallet, completing the transaction.
					</span>
					<span className='text-lg text-white/50 font-semibold'>
						Modalities:-
					</span>
					<span className='block'>
						-Buyers: Securely connect their Lisk wallets and
						generate transactions via the Amani Smart Contract. They
						sign protocol attestations, demonstrating sufficient
						funds for a specific transaction without revealing
						additional personal details. These proofs are shared
						with sellers or realtors for verification
					</span>
					<span className='block'>
						- Sellers and Realtors: Use the Amani Smart Contract to
						verify the buyer's financial eligibility quickly,
						eliminating the need for lengthy document checks and
						speeding up serious offers.
					</span>
					<span className='block'>
						When a balance request is created, a Lisk module deploys
						the Amani Smart Contract, marking information related to
						the balance request. The contract’s address serves as
						part of a unique proof-point URL, which can be shared
						with the recipient for balance validation. Only the
						intended recipient can validate their balance and create
						an attestation to be shared with the seller.
					</span>
					<span className='block'>
						Once verification is complete, a blockchain event is
						emitted, containing information about the validation.
						This event can be monitored across the Lisk network or
						indexed by decentralized services like The Graph for
						further processing.
					</span>
					<span className='block'>
						Having the Amani Smart Contract on the Lisk network is
						like having a reliable digital assistant that ensures
						your buyer has enough LSK tokens before they make a
						payment, making your business transactions safer and
						more efficient
					</span>
				</p>
			</div>

			<div className='mb-4'>
				<h2 className='font-semibold mb-2'>Disclaimer</h2>
				<p className='text-white/70 text-justify'>
					Note Amani SmartContract is currently a proof of concept
					prototype and as provided as-is without any guarantees. Use
					at your own discretion.
				</p>
			</div>
		</section>
	);
}
export default About;
