const floatingWindow = document.querySelector(".floating-window");

const floating = (e) => {
  floatingWindow.style.transform = `translate(${
    e.clientX - window.innerWidth + 200
  }px,${e.clientY - 300}px)`;
};

floatingWindow.addEventListener("mousedown", (e) => {
  window.addEventListener("mousemove", floating, false);
});

floatingWindow.addEventListener("mouseup", () => {
  console.log(floating);
  window.removeEventListener("mousemove", floating, false);
});
