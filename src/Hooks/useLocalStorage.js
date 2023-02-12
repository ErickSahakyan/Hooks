import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
	const [state, setState] = useState(() => {
		let value;
		try {
			value = JSON.parse(
				localStorage.getItem(key) || JSON.stringify(defaultValue)
			)
		} catch (err) {
			value = defaultValue
		}
		return value
	})


	useEffect(() => {
		localStorage.setItem(key, state)
	}, [state])

	return [state, setState]
}
