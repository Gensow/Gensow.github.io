document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.collapsible-title').forEach(title => {
    const parent = title.parentElement;

    title.addEventListener('click', () => {
      parent.classList.toggle("open");

      if (parent.classList.contains("open")) {
        title.textContent = title.textContent.replace("▸", "▾");
      } else {
        title.textContent = title.textContent.replace("▾", "▸");
      }
    });
  });
});;
