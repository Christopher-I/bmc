(function () {
  const script = document.currentScript;
  const config = {};

  for (const attr of script.attributes) {
    if (attr.name.startsWith("data-")) {
      const key = attr.name.substring(5);
      config[key] = attr.value;
    }
  }

  // Normalize fallback icon URLs
  const getSafeUrl = (src, fallback) =>
    !src || src.trim() === "" ? fallback : src;
  
  config["discover-icon"] = getSafeUrl(
    config["discover-icon"],
    "https://bmc-neon.vercel.app/step1.png"
  );
  
  config["discuss-icon"] = getSafeUrl(
    config["discuss-icon"],
    "https://bmc-neon.vercel.app/step2.png"
  );
  
  config["document-icon"] = getSafeUrl(
    config["document-icon"],
    "https://bmc-neon.vercel.app/step3.png"
  );

  const container = document.createElement("div");
  const shadow = container.attachShadow({ mode: "open" });

  const placeholder = document.createElement("div");
  placeholder.textContent = "Loading Three Steps section...";
  placeholder.style.padding = "20px";
  placeholder.style.textAlign = "center";
  shadow.appendChild(placeholder);

  script.parentNode.replaceChild(container, script);

  const loadStyles = async () => {
    try {
      const response = await fetch(
        "https://bmc-neon.vercel.app/embed/styles/three-steps-styles.css"
      );
      const cssText = await response.text();
      let customized = cssText;

      if (config["background"]) {
        customized = customized.replace(
          /--background-color:[^;]+;/,
          `--background-color: ${config["background"]};`
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
      if (config["card-background"]) {
        customized = customized.replace(
          /--card-background-color:[^;]+;/,
          `--card-background-color: ${config["card-background"]};`
        );
      }
      if (config["badge-color"]) {
        customized = customized.replace(
          /--step-badge-color:[^;]+;/,
          `--step-badge-color: ${config["badge-color"]};`
        );
      }
      if (config["badge-text-color"]) {
        customized = customized.replace(
          /--step-badge-text-color:[^;]+;/,
          `--step-badge-text-color: ${config["badge-text-color"]};`
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
      if (config["card-shadow"] === "true") {
        customized = customized.replace(
          /--card-shadow:[^;]+;/,
          `--card-shadow: 0 2px 4px rgba(0,0,0,0.1);`
        );
      }

      const style = document.createElement("style");
      style.textContent = customized;
      shadow.appendChild(style);
    } catch (e) {
      console.error("Error loading Three Steps styles", e);
    }
  };

  const loadContent = async () => {
    try {
      const response = await fetch(
        "https://bmc-neon.vercel.app/embed/content/three-steps-content.html"
      );
      let html = await response.text();

      Object.keys(config).forEach((key) => {
        html = html.replace(new RegExp(`{{${key}}}`, "g"), config[key]);
      });

      const wrapper = document.createElement("div");
      wrapper.className = "three-steps-container";
      wrapper.innerHTML = html;

      shadow.removeChild(placeholder);
      shadow.appendChild(wrapper);
    } catch (e) {
      console.error("Error loading Three Steps content", e);
      placeholder.textContent = "Failed to load Three Steps section";
    }
  };

  (async () => {
    await loadStyles();
    await loadContent();
  })();
})();