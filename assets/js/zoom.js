// Initialize medium zoom.
$(document).ready(function () {
  // 10% margin top + bottom => zoomed image caps at 80% of viewport height.
  function vmargin() {
    return Math.round(window.innerHeight * 0.1);
  }
  medium_zoom = mediumZoom("[data-zoomable]", {
    margin: vmargin(),
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
  });
  window.addEventListener("resize", function () {
    if (medium_zoom) medium_zoom.update({ margin: vmargin() });
  });

  // Close button. medium-zoom closes on click/scroll/Esc but shows no affordance
  // for it, which reads as "stuck" on a full-bleed image. The button is appended
  // to <body> rather than the overlay so it stays clickable above the zoomed
  // image, and is removed on close so only one ever exists.
  var closeBtn = null;

  function removeCloseBtn() {
    if (closeBtn && closeBtn.parentNode) closeBtn.parentNode.removeChild(closeBtn);
    closeBtn = null;
  }

  medium_zoom.on("opened", function () {
    removeCloseBtn();
    closeBtn = document.createElement("button");
    closeBtn.className = "medium-zoom-close";
    closeBtn.setAttribute("aria-label", "Close image");
    closeBtn.innerHTML = "&times;";
    closeBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      medium_zoom.close();
    });
    document.body.appendChild(closeBtn);
    requestAnimationFrame(function () {
      if (closeBtn) closeBtn.classList.add("is-visible");
    });
  });

  medium_zoom.on("close", removeCloseBtn);
});
