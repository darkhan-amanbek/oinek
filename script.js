// uis
let lessonWindow = document.querySelector(".lesson__window");
let lessonCircle = document.querySelector(".lesson__circle");
let lessonCoords = document.querySelector(".lesson__coords");

// functions
function moveCircle(x, y) {
  lessonCircle.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
}

function updateCoords(x, y) {
  lessonCoords.innerText = `X: ${Math.floor(x - lessonCircle.clientWidth / 2)}, Y: ${Math.floor(y - lessonCircle.clientHeight / 2)}`;
}

// events
lessonCircle.addEventListener("touchmove", (e) => {
  e.preventDefault();
  let relativeX = e.changedTouches[0].pageX - lessonCircle.offsetLeft;
  let relativeY = e.changedTouches[0].pageY - lessonCircle.offsetTop;

  if (relativeX <= e.target.clientWidth / 2)
    relativeX = e.target.clientWidth / 2;
  if (relativeY <= e.target.clientHeight / 2)
    relativeY = e.target.clientHeight / 2;
  if (relativeX >= lessonWindow.clientWidth - e.target.clientWidth / 2)
    relativeX = lessonWindow.clientWidth - (e.target.clientWidth / 2);
  if (relativeY >= lessonWindow.clientHeight - e.target.clientHeight / 2)
    relativeY = lessonWindow.clientHeight - (e.target.clientHeight / 2);

  moveCircle(relativeX, relativeY);
  updateCoords(relativeX, relativeY);
});

document.addEventListener("DOMContentLoaded", () => {
  moveCircle(lessonWindow.clientWidth / 2, lessonWindow.clientHeight / 2);
});
