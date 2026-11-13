const status = document.querySelector('#copy-status');
let copyTimer;
let lastCopyMessage = '';
function announceCopy(message) {
  if (message === lastCopyMessage) message += '\u00A0';
  lastCopyMessage = message;
  status.textContent = message;
}
for (const button of document.querySelectorAll('[data-copy]')) {
  button.addEventListener('click', async () => {
    const value = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      announceCopy(`${button.dataset.name}: ${value} copied.`);
    } catch {
      announceCopy(`Copy unavailable. Select the visible value ${value} and copy it.`);
    }
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => { status.textContent = ''; }, 6000);
  });
}
const typeInput = document.querySelector('#type-input');
typeInput.addEventListener('input', () => {
  document.querySelector('#type-output').textContent = typeInput.value || 'Your headline goes here.';
});
const campaigns = {
  fantasy: { category: 'Fantasy expression', title: 'A new world. A familiar table.' },
  mecha: { category: 'Future & mecha expression', title: 'Build your deck. Find your next match.' },
  community: { category: 'Community expression', title: 'Bring a friend. Pull up a chair.' },
};
for (const input of document.querySelectorAll('[name="campaign"]')) {
  input.addEventListener('change', () => {
    if (!input.checked) return;
    const next = campaigns[input.value];
    if (!next) return;
    const preview = document.querySelector('#campaign-preview');
    preview.className = `campaign-preview ${input.value}`;
    preview.querySelector('.abstract-art').className = `abstract-art art-${input.value}`;
    document.querySelector('#campaign-title').textContent = next.title;
  });
}
document.querySelector('#print-guide').addEventListener('click', () => window.print());
document.querySelector('#demo-action').addEventListener('click', () => {
  document.querySelector('#action-feedback').textContent = 'Primary action activated. This is a specimen; no order or payment was created.';
});
document.querySelector('#demo-secondary').addEventListener('click', () => {
  document.querySelector('#action-feedback').textContent = 'Secondary action activated. Use this treatment for a supporting task.';
});
const demoInput = document.querySelector('#demo-event');
const demoError = document.querySelector('#demo-error');
document.querySelector('#demo-form').addEventListener('submit', (event) => {
  event.preventDefault();
  if (!demoInput.value.trim()) {
    demoInput.setAttribute('aria-invalid', 'true');
    demoInput.setAttribute('aria-describedby', 'demo-field-note demo-error');
    demoError.textContent = 'Enter an event name to continue.';
    demoError.className = 'form-message error';
    demoInput.focus();
  } else {
    demoInput.removeAttribute('aria-invalid');
    demoInput.setAttribute('aria-describedby', 'demo-field-note');
    demoError.textContent = 'Event name entered. This example was not submitted or stored.';
    demoError.className = 'form-message valid';
  }
});
const contents = document.querySelector('.mobile-contents');
for (const link of contents.querySelectorAll('a')) {
  link.addEventListener('click', () => {
    contents.open = false;
    const target = document.getElementById(link.hash.slice(1));
    if (target) { target.tabIndex = -1; target.focus(); }
  });
}
if ('IntersectionObserver' in window) {
  const sections = [...document.querySelectorAll('main > section[id]')];
  const activeSections = new Set();
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) activeSections.add(entry.target.id);
      else activeSections.delete(entry.target.id);
    }
    const first = sections.find(section => activeSections.has(section.id));
    if (!first) return;
    for (const link of document.querySelectorAll('.sidebar nav a')) {
      if (link.hash === `#${first.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }, { rootMargin: '-10% 0px -55% 0px' });
  sections.forEach(section => observer.observe(section));
}
