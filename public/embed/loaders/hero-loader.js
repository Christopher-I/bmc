(function () {
  const script = document.currentScript;
  const config = {};

  for (const attr of script.attributes) {
    if (attr.name.startsWith("data-")) {
      const key = attr.name.substring(5);
      config[key] = attr.value;
    }
  }

  // Normalize fallback image values
  const getSafeUrl = (src, fallback) =>
    !src || src.trim() === "" ? fallback : src;

  config["logo-url"] = getSafeUrl(
    config["logo-url"],
    "https://bmc-neon.vercel.app/phcg_logo.png"
  );
  config["background-image"] = getSafeUrl(
    config["background-image"],
    "https://bmc-neon.vercel.app/hero_bg.png"
  );

  const container = document.createElement("div");
  const shadow = container.attachShadow({ mode: "open" });

  const placeholder = document.createElement("div");
  placeholder.textContent = "Loading Hero section...";
  placeholder.style.padding = "20px";
  placeholder.style.textAlign = "center";
  shadow.appendChild(placeholder);

  script.parentNode.replaceChild(container, script);

  const loadStyles = async () => {
    try {
      const response = await fetch(
        "https://bmc-neon.vercel.app/embed/styles/hero-styles.css"
      );
      const cssText = await response.text();
      let customized = cssText;

      if (config["background-image"]) {
        customized = customized.replace(
          /--background-image: url\([^)]+\);/,
          `--background-image: url('${config["background-image"]}');`
        );
      }
      if (config["overlay-color"]) {
        customized = customized.replace(
          /--overlay-color:[^;]+;/,
          `--overlay-color: ${config["overlay-color"]};`
        );
      }
      if (config["text-color"]) {
        customized = customized.replace(
          /--text-color:[^;]+;/,
          `--text-color: ${config["text-color"]};`
        );
      }
      if (config["heading-font"]) {
        customized = customized.replace(
          /--heading-font:[^;]+;/,
          `--heading-font: ${config["heading-font"]};`
        );
      }
      if (config["height"]) {
        customized = customized.replace(
          /--height:[^;]+;/,
          `--height: ${config["height"]}vh;`
        );
      }

      const style = document.createElement("style");
      style.textContent = customized;
      shadow.appendChild(style);
    } catch (e) {
      console.error("Error loading Hero styles", e);
    }
  };

  const loadContent = async () => {
    try {
      const response = await fetch(
        "https://bmc-neon.vercel.app/embed/content/hero-content.html"
      );
      let html = await response.text();

      Object.keys(config).forEach((key) => {
        html = html.replace(new RegExp(`{{${key}}}`, "g"), config[key]);
      });

      const wrapper = document.createElement("div");
      wrapper.innerHTML = html;

      shadow.removeChild(placeholder);
      shadow.appendChild(wrapper);
    } catch (e) {
      console.error("Error loading Hero content", e);
      placeholder.textContent = "Failed to load hero section";
    }
  };

  (async () => {
    await loadStyles();
    await loadContent();
  })();
})();
