const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");

playBtn.addEventListener("click", () => {
  audio.play();
});

pauseBtn.addEventListener("click", () => {
  audio.pause();
});

stopBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
});
