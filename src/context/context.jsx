import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState("beach");
	const [isDarkTheme, setIsDarkTheme] = useState(
		localStorage.getItem("darkTheme") === "true"
	);

	const toggleDarkTheme = () => {
		const newDarkTheme = !isDarkTheme;
		setIsDarkTheme(newDarkTheme);

		localStorage.setItem("darkTheme", newDarkTheme);
	};

	useEffect(() => {
		document.body.classList.toggle("dark-theme", isDarkTheme);
	}, [isDarkTheme]);

	return (
		<AppContext.Provider
			value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => useContext(AppContext);
