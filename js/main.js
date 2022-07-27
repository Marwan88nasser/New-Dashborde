// Click tog-show
if (document.querySelector(".tog-show")) {
  let togglesShow = document.querySelectorAll(".tog-show");
  togglesShow.forEach((e) => {
    let togg = true;
    e.addEventListener("click", (evt) => {
      let listItem = document.querySelector(e.getAttribute("data-show"));
      if (togg == true) {
        listItem.style.display = "flex";
        togg = false;
      } else {
        listItem.style.display = "none";
        togg = true;
      }
    });
  });
}

// scroll top effect
const upBtn = document.querySelector(".up-btn");

window.addEventListener("scroll", () =>
  this.scrollY >= 160
    ? upBtn.classList.add("show")
    : upBtn.classList.remove("show")
);

upBtn.addEventListener("click", () =>
  this.scrollTo({
    top: 0,
    behavior: "smooth",
  })
);
