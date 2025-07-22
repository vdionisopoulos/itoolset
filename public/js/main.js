document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll('[data-include]');
  includes.forEach(async el => {
    const file = el.getAttribute('data-include');
    const resp = await fetch(file);
    if (resp.ok) {
      const html = await resp.text();
      el.innerHTML = html;
    } else {
      el.innerHTML = `<p style="color:red;">Failed to load: ${file}</p>`;
    }
  });
});
