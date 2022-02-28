/* sticky nav */
window.addEventListener("scroll", function() {
    var navBar = document.querySelector(".navbar");

    navBar.classList.toggle("sticky", window.scrollY > 330);
})