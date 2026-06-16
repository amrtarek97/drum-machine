const drumPads = document.querySelectorAll(".drum-pad");
const display = document.querySelector("#display");

function playSound(key) {
  const audio = document.getElementById(key);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  display.innerText = audio.parentElement.id;
}

drumPads.forEach((pad) => {
  pad.addEventListener("click", () => {
    playSound(pad.innerText);
  });
});

document.addEventListener("keydown", (event) => {
  playSound(event.key.toUpperCase());
});
