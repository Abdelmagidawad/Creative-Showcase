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
