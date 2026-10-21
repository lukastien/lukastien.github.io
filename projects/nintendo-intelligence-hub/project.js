/* Lightbox for dashboard screenshots — keyboard accessible via <dialog> */
(function () {
  var dialog = document.querySelector(".lightbox");
  if (!dialog) return;
  var img = dialog.querySelector("img");
  var title = dialog.querySelector(".lightbox-title");
  var lastFocus = null;
  document.querySelectorAll("[data-lightbox]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      lastFocus = btn;
      img.src = btn.getAttribute("data-lightbox");
      img.alt = btn.getAttribute("data-alt") || "";
      title.textContent = btn.getAttribute("data-title") || "Dashboard screenshot";
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
    });
  });
  dialog.querySelector(".lightbox-close").addEventListener("click", function () { dialog.close(); });
  dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener("close", function () { if (lastFocus) lastFocus.focus(); });
})();
