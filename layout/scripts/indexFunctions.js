$(document).ready(function() {

    // FORMATAÇÃO DO CAMPO PHONE
    $('#phone').mask('(00) 0000-00009');
    $('#phone').blur(function(event) {
        if($(this).val().length == 15){ // Celular com 9 dígitos + 2 dígitos DDD e 4 da máscara
           $('#phone').mask('(00) 00000-0009');
        } else {
           $('#phone').mask('(00) 0000-00009');
        }
     });

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

    jQuery(".contatoNav").click(function () {
        jQuery("body,html").animate({
            scrollTop: $('#contato').offset().top
        }, 1000);
    });

});
