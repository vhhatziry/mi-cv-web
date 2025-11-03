document.addEventListener("DOMContentLoaded", () => {
  // Pinta íconos con Lucide
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Copiar correo al portapapeles + tooltip
  const copyBtn = document.getElementById("copyEmailBtn");
  const tooltip = document.getElementById("tooltipCopied");

  if (copyBtn && tooltip) {
    copyBtn.addEventListener("click", () => {
      const email = copyBtn.getAttribute("data-email");

      navigator.clipboard.writeText(email).then(() => {
        tooltip.classList.remove("hidden");
        setTimeout(() => tooltip.classList.add("hidden"), 2000);
      });
    });
  }
});
