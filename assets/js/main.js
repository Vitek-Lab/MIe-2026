// Mobile navigation toggle
(function () {
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.querySelector(".nav__menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", function () {
    var open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Close the menu after following an in-page link on mobile
  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();

// Session times in the visitor's time zone, or a region they pick (details page).
// The box stays hidden if the browser cannot format times by time zone.
(function () {
  var box = document.querySelector("[data-tzbox]");
  if (!box || !window.Intl || !Intl.DateTimeFormat) return;

  var select = box.querySelector("[data-tz-select]");
  var rows = box.querySelectorAll("tr[data-start]");

  function label(tz) { return tz.replace(/_/g, " "); }

  function zoneName(tz, date) {
    var parts = new Intl.DateTimeFormat(undefined, { timeZone: tz, timeZoneName: "short" }).formatToParts(date);
    for (var i = 0; i < parts.length; i++) {
      if (parts[i].type === "timeZoneName") return parts[i].value;
    }
    return "";
  }

  function render(tz) {
    var dateFmt = new Intl.DateTimeFormat(undefined, { timeZone: tz, weekday: "short", month: "short", day: "numeric" });
    var timeFmt = new Intl.DateTimeFormat(undefined, { timeZone: tz, hour: "numeric", minute: "2-digit" });

    for (var i = 0; i < rows.length; i++) {
      var start = new Date(rows[i].getAttribute("data-start"));
      var end = new Date(rows[i].getAttribute("data-end"));
      var nextDay = dateFmt.format(start) !== dateFmt.format(end);
      rows[i].querySelector("[data-tz-date]").textContent = dateFmt.format(start);
      rows[i].querySelector("[data-tz-time]").textContent =
        timeFmt.format(start) + " – " + timeFmt.format(end) + (nextDay ? " (next day)" : "");
    }

    // A picked region names its cities; the detected zone shows its IANA name and abbreviation
    var picked = select.options[select.selectedIndex];
    var first = new Date(rows[0].getAttribute("data-start"));
    box.querySelector("[data-tz-zone]").textContent = picked && !picked.hasAttribute("data-tz-detected-option")
      ? picked.textContent
      : label(tz) + " (" + zoneName(tz, first) + ")";
  }

  try {
    var detected = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!detected || !rows.length) return;

    box.querySelector("[data-tz-detected]").textContent = label(detected);
    var own = box.querySelector("[data-tz-detected-option]");
    own.value = detected;
    own.textContent = "Your time zone (" + label(detected) + ")";
    select.value = detected;

    select.addEventListener("change", function () { render(select.value); });
    render(detected);
    box.hidden = false;
  } catch (e) {
    // Leave the box hidden; the fixed time zones above still apply.
  }
})();
