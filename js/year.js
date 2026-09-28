// Текущий год в футере — чтобы не протухать каждый январь
(function () {
    var y = String(new Date().getFullYear());
    document.querySelectorAll('.year').forEach(function (el) { el.textContent = y; });
})();
