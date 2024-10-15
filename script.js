const videoPlayer = document.getElementById('videoPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const volumeControl = document.getElementById('volumeControl');

let videoList = ['video1.mp4', 'video2.mp4', 'video3.mp4', 'video4.mp4', 'video5.mp4'];
let currentVideoIndex = 0;

function loadVideo(index) {
  videoPlayer.src = videoList[index];
  videoPlayer.play();
}

playPauseBtn.addEventListener('click', () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playPauseBtn.textContent = '⏸️ Pause';
  } else {
    videoPlayer.pause();
    playPauseBtn.textContent = '▶️ Play';
  }
});

prevBtn.addEventListener('click', () => {
  if (currentVideoIndex > 0) {
    currentVideoIndex--;
    loadVideo(currentVideoIndex);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentVideoIndex < videoList.length - 1) {
    currentVideoIndex++;
    loadVideo(currentVideoIndex);
  }
});

volumeControl.addEventListener('input', () => {
  videoPlayer.volume = volumeControl.value;
});
