$('<form action="#"><select /></form>').appendTo("#mainav");
$("#mainav a").each(function(){
    var e=$(this);
    var classe = ($(this).attr('class'));
    if($(e).parents("ul ul ul").length>=1){
        $("<option />",{value:e.attr("href"),text:"- - - "+e.text()}).appendTo("#mainav select")
    }else if($(e).parents("ul ul").length>=1){
        $("<option />",{
            value:e.attr("href"),text:"- - "+e.text()}).appendTo("#mainav select")
    }else if($(e).parents("ul").length>=1){
        $("<option />",{
            value:e.attr("href"),text:""+e.text()
        }).appendTo("#mainav select")
    }else{
        $("<option />",{
            value:e.attr("href"),text:e.text()
    }).appendTo("#mainav select")}

});

$("#mainav select").change(function(){
    var classe = $(this).find("option:selected").val();
    if(classe == "#sobre"){
        jQuery("body,html").animate({
            scrollTop: $('#sobre').offset().top
        }, 1000);
    }
    if(classe == "#obras"){    
        jQuery("body,html").animate({
            scrollTop: $('#obras').offset().top
        }, 1000);
    }
    if(classe == "#servico"){
        jQuery("body,html").animate({
            scrollTop: $('#servico').offset().top
        }, 1000);
    }
    if(classe == "index.html"){
        jQuery("body,html").animate({
            scrollTop: 0
        }, 1000);
    }
});