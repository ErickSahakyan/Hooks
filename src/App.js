import "./App.css";
import Timer from "./Components/Timer";
import { ThemeContext } from "./Context/ThemeContext";
import useLocalStorage from "./Hooks/useLocalStorage";

export const themes = {
  light: {
    background: "#eeeeee",
  },
  dark: {
    background: "#222222",
  },
};

export default function App() {
  const [theme, setTheme] = useLocalStorage(false);

  return (
    <div>
      <ThemeContext.Provider value={{ themes, theme, setTheme }}>
        <Timer />
      </ThemeContext.Provider>
    </div>
  );
}
