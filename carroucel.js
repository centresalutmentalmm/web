const opinionsNode = document.getElementsByClassName("opinions")[0];
const opinions = document.getElementsByClassName("opinion");
let position = 0;
const totalOpinions = opinions.length;

function generateDots(totalOpinions) {
  const dots = document.createElement("div");
  dots.classList.add("dots");
  for (let i = 0; i < totalOpinions; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => move(i));
    dots.appendChild(dot);
  }
  opinionsNode.appendChild(dots);
}

function move(i) {
  if (i < 0 || i > totalOpinions - 1) {
    return;
  }
  position = i;
  for (const opinon of opinions) {
    opinon.style.transform = ` translateX(-${100 * position}%)`;
    const activeDot = document.getElementsByClassName("dot--active")[0];
    if (activeDot) {
      activeDot.classList.remove("dot--active");
    }
    const dots = document.getElementsByClassName("dot");
    dots[position].classList.add("dot--active");
  }
}

function generateArrows() {
  const arrowLeft = document.createElement("div");
  arrowLeft.classList.add("arrow", "arrow--left");
  arrowLeft.addEventListener("click", () => move(position - 1));
  const arrowRight = document.createElement("div");
  arrowRight.classList.add("arrow", "arrow--right");
  arrowRight.addEventListener("click", () => move(position + 1));
  opinionsNode.appendChild(arrowLeft);
  opinionsNode.appendChild(arrowRight);
}

generateDots(totalOpinions);
generateArrows();
move(0);

setInterval(() => {
  if (position >= totalOpinions - 1) {
    move(0);
    return;
  }
  move(++position);
}, 12000);
