// Array to hold multiple player instances
var players = [];

function onYouTubeIframeAPIReady() {
    document.querySelectorAll('.youtube-video').forEach((el, index) => {
        // Initialize player with the appropriate YouTube video ID
        players[index] = new YT.Player(el, {
            videoId: el.getAttribute('src').split('/')[4].split('?')[0], // Extract video ID from the iframe src
            playerVars: {
                'list': el.getAttribute('src').split('list=')[1].split('&')[0], // Optionally get the playlist
                'enablejsapi': 1,
                'autoplay': 0, // Prevent autoplay to ensure image shows first
                'controls': 1
            },
            events: {
                'onReady': function(event) {
                    setupPlayButton(event.target, el);
                }
            }
        });
    });
}

function setupPlayButton(player, iframe) {
    // Get the button associated with this player
    const playButton = iframe.nextElementSibling;
    playButton.addEventListener('click', function() {
        togglePlayback(player, iframe, playButton);
    });
}

function togglePlayback(player, iframe, playButton) {
    var state = player.getPlayerState();
    const img = iframe.previousElementSibling; // The image is assumed to be immediately before the iframe

    if (state === YT.PlayerState.PLAYING || state === YT.PlayerState.BUFFERING) {
        player.pauseVideo();
        playButton.style.display = 'block'; // Show the play button
    } else {
        player.playVideo();
        img.style.display = 'none'; // Hide the default image
        playButton.style.display = 'none'; // Hide the play button
        iframe.style.display = 'block'; // Ensure the iframe is visible
    }
}