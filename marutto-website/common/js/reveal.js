/*
  Shared scroll-reveal controller. Fades in any ".reveal-block" element
  (see common/css/base.css) once it scrolls into view. Load this at the
  end of <body> so it runs after the page's own reveal-block markup exists.
*/
const targets = document.querySelectorAll('.reveal-block');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('is-visible');
  });
}, { threshold: .14 });
targets.forEach(t => io.observe(t));
