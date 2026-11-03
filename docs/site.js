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

  // Download buttons go straight to the newest installer (.dmg for Mac, .exe for Windows, .deb for Linux;
  // the one in the top bar follows the visitor's system), and show its version.
  var onWindows = /Windows/i.test(navigator.userAgent);
  var onLinux = /Linux/i.test(navigator.userAgent) && !/Android/i.test(navigator.userAgent);
  fetch("https://api.github.com/repos/KalenHwei/PaperDuet/releases/latest")
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (rel) {
      if (!rel) return;
      var find = function (re) { return (rel.assets || []).filter(function (a) { return re.test(a.name); })[0]; };
      var dmg = find(/\.dmg$/), exe = find(/_x64-setup\.exe$/), deb = find(/_amd64\.deb$/);
      var point = function (sel, asset) {
        if (asset) document.querySelectorAll(sel).forEach(function (a) { a.href = asset.browser_download_url; });
      };
      point(".js-dl", dmg);
      point(".js-dl-win", exe);
      point(".js-dl-linux", deb);
      point(".js-dl-auto", onWindows ? exe : onLinux ? deb : dmg);
      document.querySelectorAll(".js-ver").forEach(function (s) { s.textContent = " · " + rel.tag_name; });
    })
    .catch(function () {});
})();

// Community page: asking a question, and the answers published from the stats dashboard
// (stats.paperduet.com/v1/community; see stats/src/index.js).
(function () {
  var main = document.querySelector("main.community");
  if (!main) return;
  var api = main.getAttribute("data-api");
  var lang = main.getAttribute("data-lang");
  var words = JSON.parse(document.getElementById("cm-words").textContent);
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Asking: the question, an e-mail address if given, and a field only bots fill in.
  var form = document.getElementById("ask-form");
  var done = document.querySelector(".ask-done");
  var area = form.elements.question;
  var count = form.querySelector(".count");
  var send = form.querySelector(".send");
  var label = send.querySelector(".label");
  var error = form.querySelector(".ask-error");
  var counted = function () { count.textContent = area.value.length + " / 2000"; };
  area.addEventListener("input", counted);
  area.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      if (form.requestSubmit) form.requestSubmit(); else send.click();
    }
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (send.getAttribute("aria-busy") === "true") return;
    error.hidden = true;
    send.setAttribute("aria-busy", "true");
    label.textContent = words.sending;
    var body = {
      question: area.value,
      email: form.elements.email.value,
      website: form.elements.website.value,
      lang: lang,
    };
    fetch(api, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
      .then(function (r) {
        if (!r.ok) throw new Error(String(r.status));
        form.reset();
        counted();
        form.hidden = true;
        done.hidden = false;
        done.focus({ preventScroll: true });
      })
      .catch(function () {
        error.textContent = words.failed;
        error.hidden = false;
      })
      .then(function () {
        send.removeAttribute("aria-busy");
        label.textContent = words.send;
      });
  });
  done.querySelector(".again").addEventListener("click", function () {
    done.hidden = true;
    form.hidden = false;
    area.focus();
  });

  // The answers: cards that rise in as they scroll into view, a search over them, and #q<id> links.
  var list = document.getElementById("qa-list");
  var note = document.querySelector(".qa-note");
  var search = document.querySelector(".cm-search input");
  var cards = [];
  var io = "IntersectionObserver" in window && !reduce
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("shown");
            io.unobserve(e.target);
          }
        });
      }, { rootMargin: "0px 0px -6% 0px" })
    : null;
  var when = function (day) {
    try {
      return new Intl.DateTimeFormat(document.documentElement.lang, { year: "numeric", month: "short", day: "numeric" })
        .format(new Date(day + "T12:00:00Z"));
    } catch (e) {
      return day;
    }
  };
  var el = function (tag, cls, text) {
    var x = document.createElement(tag);
    if (cls) x.className = cls;
    if (text) x.textContent = text;
    return x;
  };
  // An answer's text: a blank line starts a paragraph, a line break stays, web addresses become links.
  var rich = function (box, text) {
    String(text || "").split(/\n{2,}/).forEach(function (para) {
      var p = el("p");
      para.split("\n").forEach(function (line, i) {
        if (i) p.appendChild(el("br"));
        var re = /https?:\/\/[^\s<>"]+/g;
        var at = 0;
        var m;
        while ((m = re.exec(line))) {
          var href = m[0].replace(/[.,;:!?)\]'"。，；：！？）」』]+$/, "");
          p.appendChild(document.createTextNode(line.slice(at, m.index)));
          var a = el("a", null, href);
          a.href = href;
          a.rel = "noopener";
          a.target = "_blank";
          p.appendChild(a);
          at = m.index + href.length;
          re.lastIndex = at;
        }
        p.appendChild(document.createTextNode(line.slice(at)));
      });
      box.appendChild(p);
    });
  };
  var card = function (item, i) {
    var art = el("article", "qa");
    art.id = "q" + item.id;
    art.style.setProperty("--i", String(Math.min(i, 6)));
    var h = el("h3", "qa-q");
    var mark = el("span", "qa-mark", "Q");
    mark.setAttribute("aria-hidden", "true");
    h.appendChild(mark);
    h.appendChild(el("span", null, item.question));
    var a = el("div", "qa-a");
    var img = el("img", "qa-avatar");
    img.src = "/images/icon.png";
    img.alt = "";
    img.width = 30;
    img.height = 30;
    var box = el("div");
    var by = el("div", "qa-by", "PaperDuet");
    if (item.answered) {
      var t = el("time", null, when(item.answered));
      t.dateTime = item.answered;
      by.appendChild(t);
    }
    var body = el("div", "qa-body");
    rich(body, item.answer);
    box.appendChild(by);
    box.appendChild(body);
    a.appendChild(img);
    a.appendChild(box);
    art.appendChild(h);
    art.appendChild(a);
    art.setAttribute("data-search", (item.question + " " + item.answer).toLowerCase());
    return art;
  };
  var say = function (text) {
    note.textContent = text || "";
    note.hidden = !text;
  };
  fetch(api, { headers: { Accept: "application/json" } })
    .then(function (r) {
      if (!r.ok) throw new Error(String(r.status));
      return r.json();
    })
    .then(function (data) {
      list.textContent = "";
      list.removeAttribute("aria-busy");
      (data.items || []).forEach(function (item, i) {
        var c = card(item, i);
        cards.push(c);
        list.appendChild(c);
        if (io) io.observe(c);
        else c.classList.add("shown");
      });
      say(cards.length ? "" : words.empty);
      var target = location.hash && document.getElementById(location.hash.slice(1));
      if (target && target.classList.contains("qa")) {
        target.classList.add("shown", "hit");
        setTimeout(function () {
          target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
        }, 150);
      }
    })
    .catch(function () {
      list.textContent = "";
      list.removeAttribute("aria-busy");
      say(words.load_failed);
    });
  search.addEventListener("input", function () {
    var q = search.value.trim().toLowerCase();
    var n = 0;
    cards.forEach(function (c) {
      var hit = !q || c.getAttribute("data-search").indexOf(q) >= 0;
      c.hidden = !hit;
      if (hit) {
        n++;
        c.classList.add("shown");
      }
    });
    say(cards.length ? (n ? "" : words.none) : words.empty);
  });
})();
