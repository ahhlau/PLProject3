$(document).ready(function(){
    $("a").click(function(){
        $(this).prev().toggleClass("hide");
        var el = $(this);
        if(el.text() == "Show more"){
        	el.text("Show less");
        } else{
        	el.text("Show more");
        }
    });
});

