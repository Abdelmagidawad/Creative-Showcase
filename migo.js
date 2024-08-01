// section stats
let sectionStats = document.querySelector(".stats");
let numsStats = document.querySelectorAll(".stats .number");
let started = false; //Function Started ? No
window.addEventListener("scroll", () => {
  if (window.scrollY >= sectionStats.offsetTop) {
    if (!started) {
      numsStats.forEach((num) => startCount(num));
    }
    started = true;
  }
});

function startCount(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    // let num = parseInt(element.textContent);
    // num++;
    element.textContent++;
    // if (num === goal) clearInterval(count);
    if (element.textContent === goal) clearInterval(count);
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
