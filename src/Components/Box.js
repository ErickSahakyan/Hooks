import useToggleTheme from "../Hooks/useToggleTheme";


export default function Box() {
	const [theme, toggleTheme, themes] = useToggleTheme();

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				margin: '0 auto',
				marginTop: '2rem',
				width: "300px",
				height: "300px",
				color: "orange",
				background: theme ? themes.light.background : themes.dark.background
			}}
		>
			Hello World
		</div>
	);
}
// useEffect(() => {
// 	const movieFavorite = JSON.parse(
// 		localStorage.getItem('react-movie-app-favorites')
// 	);
// 	if (movieFavorite !== null) {
// 		setFavorites(movieFavorite);
// 	}
// }, []);

// const saveLocalStorage = (items) => {
// 	localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
// };