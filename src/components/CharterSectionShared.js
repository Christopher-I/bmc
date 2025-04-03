// CharterSectionShared.js - Shared utilities and embed generator for Charter Section

export const defaultCharterConfig = {
    backgroundColor: "#1e3553",
    textColor: "#ffffff",
    headingColor: "#ffffff",
    accentColor: "#d5ad36",
    headingFont: "serif",
    bodyFont: "sans-serif",
    logoSrc: "/tpci_logo.svg",
    imageSrc: "/chartersection_computer.jpg"
  };
  
  export const getSafeImageUrl = (url) => {
    if (!url || url === "/chartersection_computer.jpg") {
      return "https://bmc-neon.vercel.app/chartersection_computer.jpg";
    }
    return url;
  };
  
  export const getSafeLogoUrl = (url) => {
    if (!url || url === "/tpci_logo.svg") {
      return "https://bmc-neon.vercel.app/tpci_logo.svg";
    }
    return url;
  };
  
  export const generateCharterEmbedScript = (config) => {
    const merged = {
      ...defaultCharterConfig,
      ...config,
      imageSrc: getSafeImageUrl(config.imageSrc),
      logoSrc: getSafeLogoUrl(config.logoSrc)
    };
  
    return `<script 
    src="https://bmc-neon.vercel.app/embed/charter-section.js" 
    data-background="${merged.backgroundColor}"
    data-text-color="${merged.textColor}"
    data-heading-color="${merged.headingColor}"
    data-accent-color="${merged.accentColor}"
    data-heading-font="${merged.headingFont}"
    data-body-font="${merged.bodyFont}"
    data-logo-src="${merged.logoSrc}"
    data-image-src="${merged.imageSrc}">
  </script>`;
  };
  