import React from 'react';
import styles from './videoPlayer.module.css';

function VideoPlayer({ selectedVideo }) {
	if (!selectedVideo) {
		return <div className={styles["video-player-container"]}>Loading...</div>;
	}
	const autoplay = 1;
	const mute = 0;
	const { id: { videoId } } = selectedVideo;
	const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay}&mute=${mute}`;
	const { snippet : { channelTitle, description, publishTime, title } } = selectedVideo;

	return (
		<div className={styles["video-player-container"]}>
			<div className={styles["video-player"]}>
				<iframe 
					frameborder={0} 
					title={title} 
					style={{ width: "100%", height: "100%" }} 
					src={videoSrc} 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				/>
			</div>
			<div className={styles["video-details"]} >
				<strong>{title}</strong>
				<div>{channelTitle}</div>
				<div>{publishTime}</div>
				<div>{description}</div>
			</div>
		</div>
	);
}

export default VideoPlayer;