// helpers/smoothScroll.js

export const smoothScroll = (e) => {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        const offsetTop = document.querySelector(href)?.offsetTop || 0;
        window.scroll({
            top: offsetTop,
            behavior: 'smooth'
        });
    };
  