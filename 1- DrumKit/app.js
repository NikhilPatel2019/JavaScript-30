function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e){
  //Targeting the Audio Tag in HTML
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const keypressed = document.querySelector(`div[data-key = "${e.keyCode}"]`);
  // console.log(keypressed);
  // console.log(audio);

  //Stop Funtion from running for Others Key which do not have audio
  if(!audio) return;

  keypressed.classList.add('playing');
  //rewind the start
  audio.currentTime = 0;
  audio.play(); 
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);