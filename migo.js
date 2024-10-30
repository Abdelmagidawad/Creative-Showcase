// Section Skills
let sectionSkills = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");

window.addEventListener("scroll", () => {
  if (this.scrollY >= sectionSkills.offsetTop - 40) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});

// section stats
let sectionStats = document.querySelector(".stats");
let numbers = document.querySelectorAll(".stats .number");

let started = false; //Function Started ?No

window.addEventListener("scroll", () => {
  if (this.scrollY >= sectionStats.offsetTop) {
    if (!started) {
      numbers.forEach((number) => startCount(number));
    }
    started = true;
  }
});

function startCount(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent === goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// Icon Scroll
let iconScroll = document.querySelector(".UP");

window.addEventListener("scroll", function () {
  this.scrollY >= 550
    ? iconScroll.classList.add("show")
    : iconScroll.classList.remove("show");
});

iconScroll.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
