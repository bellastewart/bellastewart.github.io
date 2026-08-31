// Click-to-zoom lightbox for <video> previews.
// medium-zoom only supports <img>, so videos (former GIFs) get this lightweight
// equivalent: click to enlarge, click anywhere or press Esc to close.
(function () {
  function injectStyles() {
    if (document.getElementById("video-zoom-styles")) return;
    var css =
      ".video-zoom-overlay{position:fixed;inset:0;z-index:10000;display:flex;" +
      "align-items:center;justify-content:center;padding:2.5vmin;opacity:0;" +
      "transition:opacity .25s ease;cursor:zoom-out;}" +
      ".video-zoom-overlay.is-open{opacity:1;}" +
      ".video-zoom-content{max-width:95vw;max-height:80vh;width:auto;height:auto;" +
      "border-radius:4px;box-shadow:0 10px 40px rgba(0,0,0,.5);transform:scale(.97);" +
      "transition:transform .25s ease;}" +
      ".video-zoom-overlay.is-open .video-zoom-content{transform:scale(1);}" +
      "video.zoomable-video{cursor:zoom-in;}" +
      ".video-zoom-close{position:fixed;top:1.25rem;right:1.25rem;z-index:10001;" +
      "display:flex;align-items:center;justify-content:center;width:2.25rem;" +
      "height:2.25rem;padding:0;font-size:1.5rem;line-height:1;cursor:pointer;" +
      "border-radius:50%;opacity:.85;transition:opacity .2s ease,transform .2s ease;" +
      "color:var(--global-text-color);background-color:var(--global-bg-color);" +
      "border:1px solid var(--global-divider-color);}" +
      ".video-zoom-close:hover,.video-zoom-close:focus-visible{opacity:1;transform:scale(1.08);}";
    var style = document.createElement("style");
    style.id = "video-zoom-styles";
    style.textContent = css;
    document.head.appendChild(style);
  }

  function sourceUrl(video) {
    var s = video.querySelector("source");
    return (s && s.src) || video.currentSrc || video.src;
  }

  function close(overlay) {
    overlay.classList.remove("is-open");
    if (overlay._onKey) document.removeEventListener("keydown", overlay._onKey);
    setTimeout(function () {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    }, 250);
  }

  function open(video) {
    var overlay = document.createElement("div");
    overlay.className = "video-zoom-overlay";
    var bg = getComputedStyle(document.documentElement)
      .getPropertyValue("--global-bg-color")
      .trim();
    overlay.style.backgroundColor = bg ? bg + "ee" : "rgba(0,0,0,.9)";

    var big = document.createElement("video");
    big.className = "video-zoom-content";
    big.src = sourceUrl(video);
    big.autoplay = true;
    big.loop = true;
    big.muted = true;
    big.setAttribute("playsinline", "");

    var closeBtn = document.createElement("button");
    closeBtn.className = "video-zoom-close";
    closeBtn.setAttribute("aria-label", "Close video");
    closeBtn.innerHTML = "&times;";
    closeBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      close(overlay);
    });

    overlay.appendChild(big);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);
    requestAnimationFrame(function () {
      overlay.classList.add("is-open");
    });
    if (big.play) {
      var p = big.play();
      if (p && p.catch) p.catch(function () {});
    }

    overlay.addEventListener("click", function () {
      close(overlay);
    });
    overlay._onKey = function (e) {
      if (e.key === "Escape") close(overlay);
    };
    document.addEventListener("keydown", overlay._onKey);
  }

  document.addEventListener("DOMContentLoaded", function () {
    injectStyles();
    document.querySelectorAll("video.zoomable-video").forEach(function (video) {
      video.addEventListener("click", function () {
        open(video);
      });
    });
  });
})();
