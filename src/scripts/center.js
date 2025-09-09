(function () {
  const styleTagId = "glightbox-dynamic-style";

  function updateGlightboxMargin() {
    const viewportWidth = window.innerWidth;
    const contentWidth = document.body.getBoundingClientRect().width;

    const margin = ((viewportWidth - contentWidth) / 2 / viewportWidth) * 100;
    const marginInline = `${margin}vw`;

    let styleTag = document.getElementById(styleTagId);
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = styleTagId;
      document.head.appendChild(styleTag);
    }

    styleTag.textContent = `
        body.glightbox-open {
          margin-inline: ${marginInline} !important;
        }
      `;
  }

  updateGlightboxMargin();

  window.addEventListener("resize", updateGlightboxMargin);
})();
