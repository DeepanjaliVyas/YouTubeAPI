const API_KEY = 'AIzaSyDmbwKYmoPVvDxTNT2cuVDLTE9_gxtYnlE';


const VIDEO_ID = 'https://www.wbkidsgo.com/';

// Load the YouTube API script
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

// Function called when the YouTube API script is loaded
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: VIDEO_ID,
        playerVars: {
            'autoplay': 1,
            'controls': 1,
            'showinfo': 0,
            'rel': 0,
            'fs': 1,
            'modestbranding': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// Function called when the player is ready
function onPlayerReady(event) {
    // You can perform additional actions here if needed
}

// Function called when the player's state changes
function onPlayerStateChange(event) {
    // You can perform additional actions here if needed
}

// Handle API errors
function onError(error) {
    console.error('Error:', error);
}