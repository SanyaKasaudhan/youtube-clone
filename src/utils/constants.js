
const GOOGLE_API_KEY = "AIzaSyDS7HEVS2Um7sQvI-gNS3k2bxEiGPup_UY";

//https://www.googleapis.com/youtube/v3/subscriptions?key=AIzaSyDS7HEVS2Um7sQvI-gNS3k2bxEiGPup_UY&part=snippet&channelId=kffacxfA7G4&maxResults=50

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_COMMENT_API=  "https://www.googleapis.com/youtube/v3/commentThreads?key="+GOOGLE_API_KEY+"&textFormat=plainText&part=snippet&videoId=kffacxfA7G4&maxResults=50";
;

export const YOUTUBE_PLAYLIST_API= "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLB03EA9545DD188C3&key="+GOOGLE_API_KEY
//https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyBQmfo0zfGzbVBSlAXFpA_PLQ6Ovx7MRFY&textFormat=plainText&part=snippet&videoId=kffacxfA7G4&maxResults=50


// https://youtube.googleapis.com/youtube/v3/subscriptions?key=AIzaSyDS7HEVS2Um7sQvI-gNS3k2bxEiGPup_UY&part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw

//https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLB03EA9545DD188C3&key=AIzaSyDS7HEVS2Um7sQvI-gNS3k2bxEiGPup_UY

//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=cats&type=video&key=AIzaSyDS7HEVS2Um7sQvI-gNS3k2bxEiGPup_UY