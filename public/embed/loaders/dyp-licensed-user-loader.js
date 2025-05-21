(function () {
  const script = document.currentScript;
  const config = {};

  for (const attr of script.attributes) {
    if (attr.name.startsWith("data-")) {
      const key = attr.name.substring(5);
      config[key] = attr.value;
    }
  }

  // Normalize fallback logo url
  const getSafeUrl = (src, fallback) =>
    !src || src.trim() === "" ? fallback : src;
  
  config["logo-url"] = getSafeUrl(
    config["logo-url"],
    "https://bmc-neon.vercel.app/dyp_logo.png"
  );

  const container = document.createElement("div");
  const shadow = container.attachShadow({ mode: "open" });

  const placeholder = document.createElement("div");
  placeholder.textContent = "Loading DYP Licensed User section...";
  placeholder.style.padding = "20px";
  placeholder.style.textAlign = "center";
  shadow.appendChild(placeholder);

  script.parentNode.replaceChild(container, script);

  const loadStyles = async () => {
    try {
      const response = await fetch(
        "https://bmc-neon.vercel.app/embed/styles/dyp-licensed-user-styles.css"
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
      if (config["button-radius"]) {
        customized = customized.replace(
          /--button-radius:[^;]+;/,
          `--button-radius: ${config["button-radius"]}px;`
        );
      }

      const style = document.createElement("style");
      style.textContent = customized;
      shadow.appendChild(style);
    } catch (e) {
      console.error("Error loading DYP Licensed User styles", e);
    }
  };

  const loadContent = async () => {
    try {
      const response = await fetch(
        "https://bmc-neon.vercel.app/embed/content/dyp-licensed-user-content.html"
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
      console.error("Error loading DYP Licensed User content", e);
      placeholder.textContent = "Failed to load DYP Licensed User section";
    }
  };

  (async () => {
    await loadStyles();
    await loadContent();
  })();
})();