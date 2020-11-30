const player      = document.querySelector('.player');
const video       = player.querySelector('.viewer');
const progress    = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle      = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip');
const ranges      = player.querySelectorAll('.player__slider');
const fullScreen  = player.querySelector('.fullscreen');

//To Play the Video
function togglePlay(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

//To update the Play/Pause button when video is played
function UpdateButton(){
    const icon = this.paused ? '|>' : '||';
    toggle.textContent = icon;
}

//Skipping the video 
function skip(){
    // console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

//Range Update of volume and playback speed
function handleRangeUpdate(){
    video[this.name] = this.value;
}

//Progress bar update  of video
function handleProgerss(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// function enlargeScreen(){
//     if (!document.fullscreenElement) {
//         fullScreen.requestFullscreen();
//       } else {
//         document.exitFullscreen();
//       }
// }

video.addEventListener('click', togglePlay);
video.addEventListener('play', UpdateButton);
video.addEventListener('pause', UpdateButton);
video.addEventListener('timeupdate', handleProgerss);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

//////////////////////////////////////////////////////////////////////////////////////////////
//Needs to work Here
fullScreen.addEventListener('click', enlargeScreen);
//////////////////////////////////////////////////////////////////////////////////////////////

//This is for temporary use only(i.e ONLY in one video is present on page).
//If there are more videos on a page, need to target key event to the video that is currenly active.
document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      togglePlay();
    }
  })