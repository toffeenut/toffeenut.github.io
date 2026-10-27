// Scroll effects for the homepage. GSAP runs the same way in Chrome, Safari and Firefox.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function setColors(bg, fg) {
  gsap.to(document.body, { backgroundColor: bg, color: fg, duration: 0.7, ease: 'power2.out', overwrite: 'auto' });
  document.documentElement.style.background = bg;
}

// Page-load intro: a dark cover holds while fonts load, then lifts away
// and the name rises in letter by letter.
async function playIntro(root) {
  const html = document.documentElement;
  if (!html.classList.contains('intro')) return;
  html.classList.replace('intro', 'intro-run'); // drops the CSS failsafe, keeps the cover up
  try { sessionStorage.setItem('introSeen', '1'); } catch (e) {}

  const cover = root.querySelector('.intro-cover');
  const mark = root.querySelector('.intro-mark');
  const chars = root.querySelectorAll('.name .ch');
  const copy = root.querySelectorAll('.hero-copy > *');
  const head = document.querySelector('.site-head');

  gsap.set(chars, { yPercent: 110 });
  gsap.set(copy, { y: 24, opacity: 0 });
  gsap.set(head, { opacity: 0 });

  // Wait for the font so the name doesn't reflow mid-animation (never longer than a second).
  await Promise.race([document.fonts?.ready, new Promise((r) => setTimeout(r, 1000))]);

  gsap.timeline({ onComplete: () => { html.classList.remove('intro-run'); gsap.set(cover, { clearProps: 'all' }); } })
    .from(mark, { y: 12, opacity: 0, duration: 0.5, ease: 'power2.out' })
    .to(mark, { y: -12, opacity: 0, duration: 0.4, ease: 'power2.in' }, '+=0.25')
    .fromTo(cover, { clipPath: 'inset(0% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 100% 0%)', duration: 1, ease: 'expo.inOut' }, '-=0.1')
    .to(chars, { yPercent: 0, duration: 1.1, stagger: 0.035, ease: 'expo.out' }, '-=0.45')
    .to(copy, { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out' }, '-=0.9')
    .to(head, { opacity: 1, duration: 0.6 }, '-=0.6');
}

export function initHome() {
  const root = document.getElementById('home');
  if (!root) return;
  playIntro(root);

  // Split the About paragraph into words so it can brighten word by word.
  root.querySelectorAll('.words').forEach((p) => {
    p.innerHTML = p.textContent.split(' ').map((w) => `<span class="w">${w}</span>`).join(' ');
  });

  // Background color changes per section. Runs even with reduced motion, since it's a fade, not movement.
  root.querySelectorAll('[data-bg]').forEach((sec) => {
    ScrollTrigger.create({
      trigger: sec,
      start: 'top 55%',
      end: 'bottom 55%',
      onToggle: (self) => { if (self.isActive) setColors(sec.dataset.bg, sec.dataset.fg); },
    });
  });

  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    gsap.to(root.querySelector('.name'), {
      y: -80, opacity: 0, letterSpacing: '0.02em', filter: 'blur(8px)', ease: 'none',
      scrollTrigger: { trigger: root.querySelector('.hero'), start: 'top top', end: '+=600', scrub: true },
    });

    root.querySelectorAll('.m-img').forEach((img) => {
      gsap.fromTo(img, { scale: 0.82, borderRadius: 48, opacity: 0.45 }, {
        scale: 1, borderRadius: 16, opacity: 1, ease: 'none',
        scrollTrigger: { trigger: img, start: 'top bottom', end: 'top 35%', scrub: true },
      });
    });

    root.querySelectorAll('.rise').forEach((el) => {
      gsap.from(el, { y: 70, opacity: 0.25, ease: 'none', scrollTrigger: { trigger: el, start: 'top 95%', end: 'top 55%', scrub: true } });
    });

    root.querySelectorAll('.words').forEach((p) => {
      gsap.fromTo(p.querySelectorAll('.w'), { opacity: 0.18 }, {
        opacity: 1, stagger: 0.05, ease: 'none',
        scrollTrigger: { trigger: p, start: 'top 80%', end: 'bottom 45%', scrub: true },
      });
    });
  });

  window.addEventListener('load', () => ScrollTrigger.refresh());
}
