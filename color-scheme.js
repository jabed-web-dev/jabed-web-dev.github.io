document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement,
    button = document.createElement('button'),
    themes = { system: '⚙️', light: '🔆', dark: '🌙' };
  let theme = localStorage.getItem('color-scheme') ?? 'system';
  init();

  function init() {
    const styles = {
      position: 'absolute',
      top: '1px',
      right: '1px',
      zIndex: 99,
      width: '20px',
      height: '20px',
      cursor: 'pointer',
      userSelect: 'none',
      outline: 'none',
      border: 'none',
      padding: 0,
      borderRadius: '6px',
      fontSize: '14px',
      lineHeight: '1.3',
      textAlign: 'center',
      backgroundColor: '#c8c8c84e',
    };

    for (let key in styles) {
      button.style[key] = styles[key];
    }

    applyTheme(theme);
    button.addEventListener('click', nextTheme);
    html.appendChild(button);
  }

  function nextTheme() {
    const themeNames = Object.keys(themes),
      currentIndex = themeNames.indexOf(theme),
      nextIndex = (currentIndex + 1) % themeNames.length;
    theme = themeNames[nextIndex];
    applyTheme(theme);
  }

  function applyTheme(theme) {
    const dataTheme = button.getAttribute('data-theme');
    dataTheme && html.classList.remove(dataTheme);
    html.classList.add(theme);
    button.setAttribute('data-theme', theme);
    button.textContent = themes[theme];

    if (theme !== 'system') {
      localStorage.setItem('color-scheme', theme);
    } else {
      localStorage.removeItem('color-scheme');
    }
  }
});
