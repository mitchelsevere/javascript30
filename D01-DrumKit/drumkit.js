window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) {
    return;
  } else {
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }
});

function removeTransition(e) {
  console.log(e.propertyName);
  console.log(this)
  if (e.propertyName == null) {
    return;
  } else {
    this.classList.remove('playing');
  }
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  key.addEventListener('transitionend', removeTransition);
})