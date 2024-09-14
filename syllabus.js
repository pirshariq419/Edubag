document.querySelectorAll('.accordion-title').forEach(title => {
    title.addEventListener('click', () => {
        const item = title.parentElement;
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
        if (!isActive) {
            item.classList.add('active');
        }
    });
});