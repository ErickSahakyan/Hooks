import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const useToggleTheme = () => {
	const { themes, theme, setTheme } = useContext(ThemeContext);

	function toggleTheme() {
		setTheme(() => !theme);
	}

	return [theme, toggleTheme, themes];
};

export default useToggleTheme;
