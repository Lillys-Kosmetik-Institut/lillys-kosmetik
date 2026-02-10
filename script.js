document.querySelectorAll(".service-title").forEach(button => {
  button.addEventListener("click", () => {
    const info = button.nextElementSibling;
    info.style.maxHeight = info.style.maxHeight
      ? null
      : info.scrollHeight + "px";
  });
});
