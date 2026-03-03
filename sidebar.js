document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.collapsible-title').forEach(title => {
    title.addEventListener('click', () => {
      const content = title.nextElementSibling;
      const isOpen = content.style.display === 'block';
      content.style.display = isOpen ? 'none' : 'block';
      title.textContent = title.textContent.replace(isOpen ? '▾' : '▸', isOpen ? '▸' : '▾');
    });
  });
});
