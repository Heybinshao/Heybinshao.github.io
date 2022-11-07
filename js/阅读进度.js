var $percent = document.querySelector("#nav #hotkey #top-button a.site-page i");
$percent && window.addEventListener("scroll", (function () {
    let e = document.body.scrollHeight || document.documentElement.scrollHeight,
        t = window.innerHeight || document.documentElement.clientHeight;
    $percent.dataset.percent = ((document.body.scrollTop || document.documentElement.scrollTop) / (e - t) * 100).toFixed(0)
}));