// Companion to _templates/layout.html.
// 1) Sphinx wraps the page TOC in a redundant top level (the page title);
//    unwrap it so the panel lists sections only.
// 2) Hide the panel on pages with nothing worth navigating.
// 3) Highlight the section currently in view.
(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {
        var panel = document.querySelector(".on-this-page");
        if (!panel) return;

        // (1) unwrap the single title-level <li>
        var top = panel.querySelector("ul");
        if (top && top.children.length === 1) {
            var nested = top.children[0].querySelector("ul");
            if (nested) top.parentNode.replaceChild(nested, top);
        }

        // (2) fewer than two sections is not a table of contents
        var links = panel.querySelectorAll("a");
        if (links.length < 2) {
            panel.style.display = "none";
            return;
        }

        // (3) scrollspy
        var targets = [];
        links.forEach(function (a) {
            var el = document.getElementById(decodeURIComponent(a.hash.slice(1)));
            if (el) targets.push({ link: a, el: el });
        });
        if (!targets.length) return;

        function sync() {
            var best = targets[0];
            targets.forEach(function (t) {
                if (t.el.getBoundingClientRect().top <= 100) best = t;
            });
            links.forEach(function (a) { a.classList.remove("is-active"); });
            best.link.classList.add("is-active");
        }

        var ticking = false;
        window.addEventListener("scroll", function () {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(function () { sync(); ticking = false; });
        }, { passive: true });
        sync();
    });
})();
