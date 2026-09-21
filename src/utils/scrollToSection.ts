export function scrollToSection(href: string) {
  const id = href.replace(/^#/, '');
  const target = document.getElementById(id);
  if (!target) {
    return;
  }

  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.history.pushState(null, '', href.startsWith('#') ? href : `#${id}`);
}
