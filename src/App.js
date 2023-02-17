import { useState } from "react";
import "./App.css";
import Timer from "./Components/Timer";
import { ThemeContext } from "./Context/ThemeContext";

export const themes = {
  light: {
    background: "#eeeeee",
  },
  dark: {
    background: "#222222",
  },
};

export default function App() {
  const [theme, setTheme] = useState(false);

  return (
    <div className="App">
      <ThemeContext.Provider value={{ themes, theme, setTheme }}>
        <Timer />
      </ThemeContext.Provider>
    </div>
  );
}
