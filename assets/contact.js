const config = window.WW_CONFIG || {};
const links = document.getElementById('contact-links');
let count = 0;
function addLink(text, href) {
  const a = document.createElement('a');
  a.className = 'button'; a.textContent = text; a.href = href;
  links.appendChild(a); count++;
}
if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email || '')) {
  addLink('Email Steve ↗', 'mailto:' + config.email);
}
try {
  const url = new URL(config.youtubeUrl);
  if (url.protocol === 'https:' && ['youtube.com','www.youtube.com','youtu.be'].includes(url.hostname)) {
    addLink('Visit the YouTube channel ↗', url.href);
  }
} catch (_) {}
if (count) document.getElementById('contact-pending').hidden = true;
