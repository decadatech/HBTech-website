<<<<<<< HEAD
$('<form action="#"><select /></form>').appendTo("#mainav");
$("#mainav a").each(function(){
    var e=$(this);
    if($(e).parents("ul ul ul").length>=1){
        $("<option />",{
            value:e.attr("href"),text:"- - - "+e.text()
        }).appendTo("#mainav select")
    }else if($(e).parents("ul ul").length>=1){
        $("<option />",{
            value:e.attr("href"),text:"- - "+e.text()
        }).appendTo("#mainav select")
    }else if($(e).parents("ul").length>=1){
        $("<option />",{
            value:e.attr("href"),text:""+e.text()
        }).appendTo("#mainav select")
    }else{$("<option />",{
        value:e.attr("href"),text:e.text()
    }).appendTo("#mainav select")} 
    if(e == "sobreNav"){
        jQuery(".sobreNav").click(function () {
            jQuery("body,html").animate({
                scrollTop: $('#sobre').offset().top
            }, 1000);
        });
    }
    if(e == "obraNav"){    
        jQuery(".obraNav").click(function () {
            jQuery("body,html").animate({
                scrollTop: $('#obras').offset().top
            }, 1000);
        });
    }
    if(e == "servicoNav"){
        jQuery(".servicoNav").click(function () {
            jQuery("body,html").animate({
                scrollTop: $('#servico').offset().top
            }, 1000);
        });
    }
    
}); 
=======
$('<form action="#"><select /></form>').appendTo("#mainav");$("<option />",{selected:"selected",value:"",text:"MENU"}).appendTo("#mainav select");$("#mainav a").each(function(){var e=$(this);if($(e).parents("ul ul ul").length>=1){$("<option />",{value:e.attr("href"),text:"- - - "+e.text()}).appendTo("#mainav select")}else if($(e).parents("ul ul").length>=1){$("<option />",{value:e.attr("href"),text:"- - "+e.text()}).appendTo("#mainav select")}else if($(e).parents("ul").length>=1){$("<option />",{value:e.attr("href"),text:""+e.text()}).appendTo("#mainav select")}else{$("<option />",{value:e.attr("href"),text:e.text()}).appendTo("#mainav select")}});$("#mainav select").change(function(){if($(this).find("option:selected").val()!=="#"){window.location=$(this).find("option:selected").val()}})
>>>>>>> 623a5f1a29603d43118c96bba985a095ae3efc7f
