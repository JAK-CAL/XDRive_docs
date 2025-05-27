// 페이드인 효과 (선택)
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('fade');
  });
});
document.querySelectorAll('section').forEach(s => io.observe(s));

// (선택) Three.js 로더 넣고 싶으면 여기에 작성 가능