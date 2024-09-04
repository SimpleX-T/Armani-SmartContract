import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import LandingPage from "./Pages/LandingPage";
import RequestPage from "./Pages/RequestPage";
import ErrorPage from "./Pages/ErrorPage";
import VerifyBalance from "./Features/VerifyBalance";
import { AppProvider } from "./Hooks/AppProvider";
import CreateRequest from "./Features/CreateRequest";
import About from "./Pages/About";

// import { createWeb3Modal } from "@web3modal/wagmi/react";
// import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

// import { WagmiProvider } from "wagmi";
// import { mainnet, liskSepolia, lisk } from "wagmi/chains";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient();

// const projectId = "78b06c98c700a62618463ac42eb9528b";

// const metadata = {
// 	name: "Amani Finance",
// 	description: "AppKit Example",
// 	url: "https://web3modal.com", // origin must match your domain & subdomain
// 	icons: ["https://avatars.githubusercontent.com/u/37784886"],
// };

// const chains = [mainnet, lisk, liskSepolia];
// const config = defaultWagmiConfig({
// 	chains,
// 	projectId,
// 	metadata,
// });

// createWeb3Modal({
// 	wagmiConfig: config,
// 	projectId,
// 	enableAnalytics: true,
// 	enableOnramp: true,
// });

// export function Web3ModalProvider({ children }) {
// 	return (
// 		<WagmiProvider config={config}>
// 			<QueryClientProvider client={queryClient}>
// 				{children}
// 			</QueryClientProvider>
// 		</WagmiProvider>
// 	);
// }

function App() {
	return (
		// <Web3ModalProvider>
			<BrowserRouter>
				<AppProvider>
					<Routes>
						<Route element={<AppLayout />}>
							<Route
								index
								element={<LandingPage />}
							/>
							<Route
								path='/requests'
								element={<RequestPage />}>
								<Route
									path='new'
									element={<CreateRequest />}
								/>
								<Route
									path='verify'
									element={<VerifyBalance />}
								/>
							</Route>
							<Route
								path='/about'
								element={<About />}
							/>
						</Route>
						<Route
							path='*'
							element={<ErrorPage />}
						/>
					</Routes>
				</AppProvider>
			</BrowserRouter>
		// </Web3ModalProvider>
	);
}
export default App;
