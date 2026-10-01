// Timeline accordion
function toggleExp(item) {
    const details = item.querySelector('.t-details');
    const toggle  = item.querySelector('.t-toggle');
    const isOpen  = item.classList.contains('open');

    document.querySelectorAll('.t-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.t-details').classList.remove('open');
        i.querySelector('.t-toggle').textContent = '↓ Show details';
    });

    if (!isOpen) {
        item.classList.add('open');
        details.classList.add('open');
        toggle.textContent = '↑ Hide details';
    }
}

// Scroll fade-in
const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
