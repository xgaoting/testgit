var timeoutid;
$(document).ready(function () {
    $("#tabfirst li").each(function(index){
        var liNode = $(this);
        $(this).mouseover(function(){
            timeoutid = setTimeout(function(){
                $("div.content").removeClass("content");
                $("#tabfirst li.tain").removeClass("tain");
                $("div").eq(index).addClass("content");
                liNode.addClass("tain");
            },300);
        }).mouseout(function(){
            clearTimeout(timeoutid);
        })
    })
})
