showMenue();

function showMenue(){
    const menuToggle = document.getElementById('toggleMobileMenu');
const menu = document.getElementById('menu');
menuToggle.addEventListener('click', function() {
    menu.classList.toggle('show-mobile');
});
}
