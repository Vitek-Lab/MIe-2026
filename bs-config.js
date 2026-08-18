// browser-sync configuration for local development with live reload.
// usePolling makes file-watching reliable inside Docker on macOS.
module.exports = {
  server: { baseDir: "." },
  files: ["*.html", "assets/**/*"],
  watchOptions: { usePolling: true, interval: 400 },
  host: "0.0.0.0",
  port: 3000,
  open: false,
  notify: false,
  ghostMode: false,
  ui: false
};
