const overlay = document.getElementById("lightbox");
const overlayImg = overlay.querySelector("img");

document.querySelectorAll(".lightbox-trigger").forEach(img => {
  img.addEventListener("click", () => {
    overlayImg.src = img.src;
    overlay.classList.add("active");
  });
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
});

document.querySelectorAll("[data-images]").forEach((gallery) => {
  const images = JSON.parse(gallery.dataset.images);
  const img = gallery.querySelector("img");
  let currentIndex = 0;

  img.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    img.src = images[currentIndex];
  });
});
