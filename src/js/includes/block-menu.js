document.querySelector(".header__menu-btn").addEventListener("click", (e) => {
  if (!e.target.classList.contains("lock-scroll")) {
    document.querySelector("body").classList.add("lock-scroll");
    console.log("no");
  }
});

document.querySelector(".backdrop").addEventListener("click", (e) => {
  if (!e.target.classList.contains("lock-scroll")) {
    document.querySelector("body").classList.remove("lock-scroll");
    console.log("no");
  }
});

document.querySelector(".header__cross").addEventListener("click", (e) => {
  if (!e.target.classList.contains("lock-scroll")) {
    document.querySelector("body").classList.remove("lock-scroll");
    console.log("no");
  }
});
