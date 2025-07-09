const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

window.addEventListener('load', function() {
  var loading = document.getElementById('loading');
  if (loading) loading.style.display = 'none';
});




const video = document.getElementById('loading-video');
const preloader = document.getElementById('preloader');
const mainContent = document.getElementById('main-content');

video.addEventListener('ended', () => {
  preloader.style.opacity = '0';
  setTimeout(() => {
    preloader.style.display = 'none';
    mainContent.style.display = 'block';
  }, 1000);
});