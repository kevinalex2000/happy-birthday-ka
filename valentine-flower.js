
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  
};

function reproducirAudio() {
  let audio = document.getElementById("miAudio");
  audio.volume = 0.1;
  audio.play();
}