(function () {
  const script = document.currentScript;
  const config = {};

  for (const attr of script.attributes) {
    if (attr.name.startsWith("data-")) {
      const key = attr.name.substring(5);
      config[key] = attr.value;
    }
  }

  const container = document.createElement("div");
  const shadow = container.attachShadow({ mode: "open" });

  const placeholder = document.createElement("div");
  placeholder.textContent = "Loading Slivers of Ambiguity section...";
  placeholder.style.padding = "20px";
  placeholder.style.textAlign = "center";
  shadow.appendChild(placeholder);

  script.parentNode.replaceChild(container, script);

  const loadStyles = async () => {
    try {
      const response = await fetch(
        "https://bmc-neon.vercel.app/embed/styles/slivers-styles.css"
      );
      const cssText = await response.text();
      let customized = cssText;

      if (config["background-color"]) {
        customized = customized.replace(
          /--background-color:[^;]+;/,
          `--background-color: ${config["background-color"]};`
        );
      }
      if (config["text-color"]) {
        customized = customized.replace(
          /--text-color:[^;]+;/,
          `--text-color: ${config["text-color"]};`
        );
      }
      if (config["heading-color"]) {
        customized = customized.replace(
          /--heading-color:[^;]+;/,
          `--heading-color: ${config["heading-color"]};`
        );
      }
      if (config["accent-color"]) {
        customized = customized.replace(
          /--accent-color:[^;]+;/,
          `--accent-color: ${config["accent-color"]};`
        );
      }
      if (config["heading-font"]) {
        customized = customized.replace(
          /--heading-font:[^;]+;/,
          `--heading-font: ${config["heading-font"]};`
        );
      }
      if (config["body-font"]) {
        customized = customized.replace(
          /--body-font:[^;]+;/,
          `--body-font: ${config["body-font"]};`
        );
      }

      const style = document.createElement("style");
      style.textContent = customized;
      shadow.appendChild(style);
    } catch (e) {
      console.error("Error loading Slivers styles", e);
    }
  };

  const loadContent = async () => {
    try {
      const response = await fetch(
        "https://bmc-neon.vercel.app/embed/content/slivers-content.html"
      );
      let html = await response.text();

      Object.keys(config).forEach((key) => {
        html = html.replace(new RegExp(`{{${key}}}`, "g"), config[key]);
      });

      const wrapper = document.createElement("div");
      wrapper.className = "slivers-container";
      wrapper.innerHTML = html;

      shadow.removeChild(placeholder);
      shadow.appendChild(wrapper);
    } catch (e) {
      console.error("Error loading Slivers content", e);
      placeholder.textContent = "Failed to load Slivers of Ambiguity section";
    }
  };

  (async () => {
    await loadStyles();
    await loadContent();
  })();
})();