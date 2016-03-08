$(document).ready(function() {

	$("a:first").focus();

    var img = [];
    var title = [];

    $("a").each(function() {
        img.push($(this).attr("href"));
        title.push($(this).attr("title"));
        // $("<img/>").attr("src", $(this).attr("href"));
        // alert($("<img/>").attr("src"));
        $('<img/>').src = $(this).attr("href");
    });

    $("a").click(function(evt) {
  		evt.preventDefault();
  		$("img").attr("src", $(this).attr("href"));
  		$("h2").text($(this).attr("title"));
    });

});
