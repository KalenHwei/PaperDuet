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

  // Language menu: opens with the button, closes outside or with Esc; arrows move through it.
  var langs = document.querySelector(".langs");
  if (langs) {
    var btn = langs.querySelector(".lang-btn");
    var menu = langs.querySelector(".lang-menu");
    var links = Array.prototype.slice.call(menu.querySelectorAll("a"));
    var setOpen = function (open) {
      langs.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", String(open));
      if (open) {
        var cur = menu.querySelector('[aria-checked="true"]') || links[0];
        setTimeout(function () { cur.focus({ preventScroll: true }); }, 80);
      }
    };
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      setOpen(!langs.classList.contains("open"));
    });
    document.addEventListener("click", function (e) {
      if (!langs.contains(e.target)) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (!langs.classList.contains("open")) return;
      if (e.key === "Escape") {
        setOpen(false);
        btn.focus();
      } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        var i = links.indexOf(document.activeElement);
        i = (i + (e.key === "ArrowDown" ? 1 : -1) + links.length) % links.length;
        links[i].focus();
      }
    });
    links.forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        try { localStorage.setItem("pd-lang", a.getAttribute("data-lang")); } catch (_) {}
        if (a.getAttribute("aria-checked") === "true") return setOpen(false);
        var href = a.getAttribute("href") + location.hash;
        setOpen(false);
        document.body.classList.add("leaving");
        setTimeout(function () { location.href = href; }, reduce ? 0 : 200);
      });
    });
    // Back from another language (page cache): show the page again.
    window.addEventListener("pageshow", function () { document.body.classList.remove("leaving"); });
  }

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
