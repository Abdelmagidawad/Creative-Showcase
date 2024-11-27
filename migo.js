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

// Section events
let countDown = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDown - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) clearInterval(counter);
}, 1000);

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
