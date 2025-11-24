window.addEventListener("load", () => {
  const video = document.querySelector(".video-responsive");
  video.style.opacity = "0";
  video.style.transition = "opacity 1.2s ease";

  setTimeout(() => {
    video.style.opacity = "1";
  }, 300);
});