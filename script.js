document.querySelectorAll(".service-title").forEach(button => {
  button.addEventListener("click", () => {
    const info = button.nextElementSibling;

    if (info.style.maxHeight) {
      info.style.maxHeight = null;
    } else {
      info.style.maxHeight = info.scrollHeight + "px";
    }
  });
});
