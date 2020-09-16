$(document).ready(function () {
    $('.menu-toggle').on('click', function () {
        $(this).toggleClass('toggled');
        $('.top-nav').toggleClass('toggled');
    })
});

$(document).ready(function () {
    $('.nav-links').on('click', function() {
        $('.top-nav').toggleClass('toggled');
    })
})

