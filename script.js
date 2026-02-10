// abrir/cerrar categorías
document.querySelectorAll(".service-cat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const list = btn.nextElementSibling;
    list.style.maxHeight = list.style.maxHeight
      ? null
      : list.scrollHeight + "px";
  });
});

// abrir/cerrar info de cada tratamiento
document.querySelectorAll(".service-title").forEach(btn => {
  btn.addEventListener("click", () => {
    const info = btn.nextElementSibling;
    info.style.maxHeight = info.style.maxHeight
      ? null
      : info.scrollHeight + "px";
  });
});
