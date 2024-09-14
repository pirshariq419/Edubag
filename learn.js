function toggleAccordion(element) {
    const content = element.nextElementSibling;
    element.classList.toggle('open');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}
