import React, { useState } from 'react';
import styles from './searchBar.module.css';

function SearchBar({ handleSearchSubmit }) {
	const [input, setInput] = useState("");
	function handleSubmit(e) {
		e.preventDefault();
		handleSearchSubmit(input);
	}
	return (
		<div className={styles["search-bar-container"]}>
			<form 
				onSubmit={handleSubmit}
				className={styles["search-bar"]}
			>
				<input 
					className={styles["search-bar-input"]} 
					type="text" 
					placeholder="Search..." 
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button className={styles["search-button"]} type="submit" value="search">Search</button>
			</form>	
		</div>
	);
}

export default SearchBar;