(function() {
  const currentScript = document.currentScript;
  const config = {};
  for (const attr of currentScript.attributes) {
    if (attr.name.startsWith('data-')) {
      const key = attr.name.substring(5);
      config[key] = attr.value;
    }
  }

  const getSafeImageUrl = (src, fallback) =>
    !src || src.startsWith('/') ? fallback : src;

  config['background-image-url'] = getSafeImageUrl(config['background-image-url'], 'https://bmc-neon.vercel.app/hero_bg.png');
  config['logo-url'] = getSafeImageUrl(config['logo-url'], 'https://bmc-neon.vercel.app/phcg_logo.png');
  config['tagline-text'] = config['tagline-text'] || "...never operate a partnership without one";

  const container = document.createElement('div');
  const shadow = container.attachShadow({ mode: 'open' });

  const placeholder = document.createElement('div');
  placeholder.textContent = 'Loading Hero section...';
  placeholder.style.padding = '20px';
  placeholder.style.textAlign = 'center';
  shadow.appendChild(placeholder);
  currentScript.parentNode.replaceChild(container, currentScript);

  const loadStyles = async () => {
    const response = await fetch('https://bmc-neon.vercel.app/embed/styles/hero-styles.css');
    let cssText = await response.text();

    Object.entries(config).forEach(([key, val]) => {
      const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
      cssText = cssText.replace(regex, val);
    });

    const style = document.createElement('style');
    style.textContent = cssText;
    shadow.appendChild(style);
  };

  const loadContent = async () => {
    const response = await fetch('https://bmc-neon.vercel.app/embed/content/hero-content.html');
    let htmlText = await response.text();

    Object.entries(config).forEach(([key, val]) => {
      const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
      htmlText = htmlText.replace(regex, val);
    });

    const wrapper = document.createElement('div');
    wrapper.innerHTML = htmlText;
    shadow.removeChild(placeholder);
    shadow.appendChild(wrapper);
  };

  (async () => {
    await loadStyles();
    await loadContent();
  })();
})();
