// import { useAccount } from "wagmi";
// import { useApp } from "../Hooks/AppProvider";

// export default function ConnectWallet() {
// 	return <w3m-button balance='hide' />;
// }

import Web3 from "web3";
import { useApp } from "../Hooks/AppProvider";

function ConnectWallet() {
	const { walletAddress, setWalletAddress } = useApp();

	async function handleConnectWallet() {
		if (walletAddress) return;

		try {
			if (window.ethereum) {
				const web3 = new Web3(window.ethereum);

				await window.ethereum.request({
					method: "eth_requestAccounts",
				});

				const accounts = await web3.eth.getAccounts();

				const connectedAccount = accounts[0];

				setWalletAddress(connectedAccount);
			} else {
				alert("Please install metamask");
			}
		} catch (err) {
			console.error("Error connecting wallet: ", err);
			return null;
		}
	}

	return (
		<button
			onClick={handleConnectWallet}
			className='bg-[#0e1fb2] text-white text-sm md:text-md px-2 md:px-4 py-2 hover:bg-[#1125d5] transition-colors duration-200 rounded-lg capitalize font-medium mr-4'>
			{walletAddress
				? `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}`
				: "Connect Wallet"}
		</button>
	);
}

export default ConnectWallet;
