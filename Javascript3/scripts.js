// Anthony Perez

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const muteBtn = document.getElementById('mute-btn');
const fullscreenBtn = document.getElementById('fullscreen-btn');
const ranges = player.querySelectorAll('.player__slider');
const currentTimeElem = document.getElementById('current-time');
const durationElem = document.getElementById('duration');

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = video.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function toggleMute() {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? '🔇' : '🔊';
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
  currentTimeElem.textContent = formatTime(video.currentTime);
  durationElem.textContent = formatTime(video.duration);
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function toggleFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    player.requestFullscreen();
  }
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
video.addEventListener('loadedmetadata', () => {
  durationElem.textContent = formatTime(video.duration);
});

toggle.addEventListener('click', togglePlay);
muteBtn.addEventListener('click', toggleMute);
fullscreenBtn.addEventListener('click', toggleFullscreen);
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
