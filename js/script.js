hamburger.addEventListener("click", () => {
  hamburger_menu.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!hamburger_menu.contains(e.target) && !hamburger.contains(e.target)) {
    hamburger_menu.classList.add("hidden");
  }
});
