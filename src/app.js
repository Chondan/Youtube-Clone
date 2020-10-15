import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import youtube from './api/youtubeApi';
import { SearchBar, VideoPlayer, VideoLists } from './components';

const exampleResult = require('./api/exampleResult.json');
const items = exampleResult.items;

function App() {
	// Hooks
	const [searchValue, setSearchValue] = useState("Node.js");
	const [maxResult, setMaxResult] = useState(10);
	const [data, setData] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);
	// searching
	useEffect(() => {
		// ------ MOCKUP DATA
		const sets = 40 / 5;
		let newData = [];
		Array(sets).fill(items).forEach(set => {
			newData = [...newData, ...set];
		});
		setData(newData);
		setSelectedVideo(newData[0]);

		// ------ FETCHING DATA
		// youtube.get("search", {
		// 	params: {
		// 		q: searchValue,
		// 		maxResults: 50,
		// 	}
		// }).then((res) => {
		// 	const data = res.data.items;
		// 	setData(data);
		// 	setSelectedVideo(data[0]);
		// });

		return () => {
			setData([]);
		}

	}, [searchValue]);

	// Methods
	function handleSearchSubmit(searchValue) {
		setSearchValue(searchValue);
	}
	function handleMaxResult() {
		// loading more 5 videos
		setMaxResult(maxResult => maxResult + 5);
	}
	function handleSelectedVideo(videoId) {
		setSelectedVideo(() => {
			return data.find(d => d.id.videoId === videoId);
		});
	}
	return (
		<div className={styles.app} >
			<SearchBar handleSearchSubmit={handleSearchSubmit} />
			<div className={styles["video-part-container"]}>
				<VideoPlayer selectedVideo={selectedVideo} />
				<VideoLists 
					maxResult={maxResult}
					handleMaxResult={handleMaxResult} 
					handleSelectedVideo={handleSelectedVideo} 
					items={data.slice(0, maxResult)} 
				/>
			</div>
		</div>
	);
}

export default App;