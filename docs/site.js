// paperduet.com: entrances, the hero tilt, and the newest release's download link.
(function () {
  var root = document.documentElement;
  root.classList.add("js");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Entrances as sections scroll in.
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // The hero recording leans back and straightens as you scroll to it; the bar gets a hairline.
  var nav = document.querySelector(".nav");
  var frame = document.querySelector(".hero-shot .frame");
  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 8);
    if (!frame || reduce) return;
    var r = frame.getBoundingClientRect();
    var p = Math.min(1, Math.max(0, 1 - (r.top - 90) / (window.innerHeight * 0.55)));
    frame.style.setProperty("--tilt", (16 * (1 - p)).toFixed(2) + "deg");
    frame.style.setProperty("--s", (0.92 + 0.08 * p).toFixed(3));
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  // Download buttons go straight to the newest .dmg, and show its version.
  fetch("https://api.github.com/repos/KalenHwei/PaperDuet/releases/latest")
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (rel) {
      if (!rel) return;
      var dmg = (rel.assets || []).filter(function (a) { return /\.dmg$/.test(a.name); })[0];
      if (dmg) document.querySelectorAll(".js-dl").forEach(function (a) { a.href = dmg.browser_download_url; });
      document.querySelectorAll(".js-ver").forEach(function (s) { s.textContent = " · " + rel.tag_name; });
    })
    .catch(function () {});
})();
