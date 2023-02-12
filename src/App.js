import "./App.css";
import Button from "./Components/Button";
import Page from "./Components/Page";
import { ThemeContext } from "./Context/ThemeContext";
import useLocalStorage from './Hooks/useLocalStorage'

export const themes = {
	light: {
		background: "#eeeeee"
	},
	dark: {
		background: "#222222"
	}
};
export default function App() {
	const [theme, setTheme] = useLocalStorage(false);

	return (
		<div className="App">
			<ThemeContext.Provider value={{ themes, theme, setTheme }}>
				<Button />
				<Page />
			</ThemeContext.Provider>
		</div>
	);
}
