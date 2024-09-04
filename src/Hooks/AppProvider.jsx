import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
	const [walletAddress, setWalletAddress] = useState("");
	const [navIsOpen, setNavIsOpen] = useState(false);

	return (
		<AppContext.Provider
			value={{
				isOpen: navIsOpen,
				handleToggle: setNavIsOpen,
				walletAddress,
				setWalletAddress,
			}}>
			{children}
		</AppContext.Provider>
	);
}

function useApp() {
	const context = useContext(AppContext);

	if (context === undefined)
		throw new Error("AppContext was used out of scope");

	return context;
}
export { AppProvider, useApp };
