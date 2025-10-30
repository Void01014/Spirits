window.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("bg-video");
  const bg = document.getElementById("background"); // fixed the typo
  const content = document.querySelector(".content");
  const headerlists = document.querySelectorAll(".header a");
  const header = document.querySelector("header");
  const menu = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  // Fade-in section
  const fade1 = document.getElementById("fade-1");
  const fade2 = document.getElementById("fade-2");

  setTimeout(() => fade1?.classList.add("fade-in"), 2000);
  setTimeout(() => fade2?.classList.add("fade-in"), 3500);

  // Scroll logic
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    let opacity = 1 - scrollY / windowHeight * 1.45;
    let blur = scrollY / windowHeight * 7;
    if (opacity < 0) opacity = 0;

    if (video) {
      video.style.opacity = opacity;
      video.style.filter = `blur(${blur}px)`;
    }

    if (scrollY > windowHeight * 0.4) {
      content?.classList.add("visible");
      bg?.classList.add("none");
      headerlists.forEach(link => link.style.color = 'black');
    } else {
      content?.classList.remove("visible");
      bg?.classList.remove("none");
      headerlists.forEach(link => link.style.color = '');
    }

    header.classList.toggle("sticky", window.scrollY > 0);
  });

  // Burger menu
  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
  };

  window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
  };
});
