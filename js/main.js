$(document).ready(function(){
    showMenue();
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        // autoplayHoverPause:true
    });
});

function showMenue(){
    const menuToggle = document.getElementById('toggleMobileMenu');
    const menu = document.getElementById('menu');
    menuToggle.addEventListener('click', function() {
    menu.classList.toggle('show-mobile');
    });
}
