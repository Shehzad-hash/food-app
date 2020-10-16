// menu tab
$('.menu-buttons').click(function (e) {
    $('.menu-tab').css('display', 'none');
    var sectionClass = $(this).attr('sec');
    $(sectionClass).fadeIn(1000);
    $('.menu-buttons').removeClass('active');
    $(this).addClass('active');
});

// Details tab
$('.pro-btn').click(function (e) {
    $('.details-menu-tab').css('display', 'none');
    var sectionClass = $(this).attr('sec');
    $(sectionClass).fadeIn(1000);
    $('.pro-btn').removeClass('active');
    $(this).addClass('active');
});
