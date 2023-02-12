import useToggleTheme from "../Hooks/useToggleTheme";

export default function Button() {
	const [theme, toggleTheme, themes] = useToggleTheme();
	return (
		<div>
			<button style={{
				width: '150px',
				height: '50px',
				background: 'black',
				color: '#fff',
			}} onClick={toggleTheme}>Change Theme</button>
		</div>
	);
}
