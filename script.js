const colors = ["#000000","#150050", "#3F0071", "#610094","#1C0C5B", "#3D2C8D", "#916BBF", "#C996CC" ];
const btn = document.getElementById("btn");
const color = document.querySelector("h3 span");


btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.backgroundColor = colors[randomNumber];
    btn.classList.toggle("active");
  });

  function getRandomNumber() {
      return Math.floor(Math.random() * colors.length);
  }