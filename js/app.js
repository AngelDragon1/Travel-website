const progressBar = document.querySelector('#progress-bar');
const section = document.querySelector("section");

const MAX_SCROLL = document.documentElement.getBoundingClientRect().height - document.documentElement.clientHeight;

const animateProgressBar = () => {
    const scrollDistance = Math.ceil(window.scrollY);
    progressBar.style.width = `${Math.round((scrollDistance / MAX_SCROLL) * 100)}%`;
};

window.addEventListener('scroll', animateProgressBar);
