# Youtube Clone

## Youtube API
- link: https://developers.google.com/youtube/v3/getting-started
- we can get into the video by using 'videoId' property gthat we got from api's response
- VIDEO: https://www.youtube.com/watch?v=[videoId]

## API
- API => base_url/end_point/?param1=value1&param2=value2

## axios
- create instance 
```JavaScript
const instance = axios.create({
	baseURL: "[URL]",
	params: {
		part: "snippet",
		maxResult: 5,
	}
});
const configs = { params: q: "[searchTerm]" };
instance.get("continuity_url", conifgs)
	.then(data => console.log(data));
````
- then we can send the response to the server by 'respons_url' from above method 

## Playing videos from youtube in HTML 
- Instruction link: https://www.w3schools.com/html/html_youtube.asp

## Mechanism 
- use 'react-dom-router'
- use thumbnail url to show 'video cover'