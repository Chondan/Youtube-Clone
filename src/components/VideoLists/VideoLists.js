import React, { useRef, useEffect } from 'react';
import styles from './videoLists.module.css';
import { v4 as uuidv4 } from 'uuid';
import { publishedTimeCalculator } from '../../util/methods';

function List({ item, methods }) {
	const { videoId } = item.id;
	const { thumbnails: { default: { url } } } = item.snippet;
	const { title, description, channelTitle, publishTime } = item.snippet;
	const { handleSelectedVideo } = methods;
	function handleClick(e) {
		handleSelectedVideo(videoId);
	}

	return (
		<div 
			className={styles["video-list"]}
			onClick={handleClick}
		>
			<div className={styles["video-list-image-container"]}>
				<img alt={description} src={url} />
			</div>
			<div className={styles["video-list-detail-container"]}>
				<strong className={styles["video-list-info"]}>{title}</strong>
				<div className={styles["video-list-info"]}>{channelTitle}</div>
				<div className={styles["video-list-info"]}>{publishedTimeCalculator(publishTime)}</div>
			</div>
		</div>
	);
}

function LoadingElem() {
	return (
		<div className={styles["loading-element-container"]}>
			<div className={styles["loading-element"]}></div>
			<div className={styles["loading-element"]}></div>
			<div className={styles["loading-element"]}></div>
		</div>
	);
}

function VideoLists({ handleMaxResult, handleSelectedVideo, items }) {
	const videoListsRef = useRef();
	useEffect(() => {
		function handleScroll(e) {
			const { height } = this.getBoundingClientRect();
			const { scrollHeight, scrollTop } = e.target;
			if (scrollTop > scrollHeight - height - 1 || scrollHeight === 0) {
				setTimeout(() => {
					this.scrollTop = scrollTop - 50;
					handleMaxResult();
				}, 1000);
			}
		}
		function handleDocumentScroll() {
			const { scrollTop, clientHeight, scrollHeight } = this.documentElement;
			if (scrollTop > scrollHeight - clientHeight - 1) {
				setTimeout(() => {
					this.documentElement.scrollTop = scrollTop - 150;
					handleMaxResult();
				}, 1000);
			}
		}
		const videoListElem = videoListsRef.current;
		videoListElem.addEventListener("scroll", handleScroll);
		document.addEventListener("scroll", handleDocumentScroll);
		return () => {
			videoListElem.removeEventListener("scroll", handleScroll);
			document.removeEventListener("scroll", handleDocumentScroll);
		}
	}, [handleMaxResult]);
	return (
		<div className={styles["video-lists-container"]}>
			<div 
				className={styles["video-lists"]}
				ref={videoListsRef}
			>
				{items.map(item => (
					<List key={uuidv4()} item={item} methods={{ handleSelectedVideo }} />
				))}
				<LoadingElem />
			</div>
		</div>
	);
}

export default VideoLists;