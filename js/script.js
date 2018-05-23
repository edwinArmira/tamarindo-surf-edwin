function copyCode(x) {
    var copyText = document.getElementById(x);
    copyText.select();
    document.execCommand("Copy");
}

function myFunction(x) {
    x.classList.toggle("change");
}

$('.bars-menu').click(function() {
    $('.header-nav').fadeToggle();
});