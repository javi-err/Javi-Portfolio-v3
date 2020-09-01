$(document).ready(function () {
    $('.menu-hamburger').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    })
});

$(".image-item").on({
    mouseenter: function () {
        $( this ).find('.image-wrapper').removeClass('hidden');
    },
    mouseleave: function (event) {
        $( this ).find('.image-wrapper').addClass('hidden');
        }
    }
);