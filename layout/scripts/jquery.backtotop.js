jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 1000);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});

jQuery(".homeNav").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 1000);
});

jQuery(".sobreNav").click(function () {
    jQuery("body,html").animate({
        scrollTop: $('#sobre').offset().top
    }, 1000);
});

jQuery(".obraNav").click(function () {
    jQuery("body,html").animate({
        scrollTop: $('#obras').offset().top
    }, 1000);
});

jQuery(".servicoNav").click(function () {
    jQuery("body,html").animate({
        scrollTop: $('#servico').offset().top
    }, 1000);
});