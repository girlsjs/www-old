$(document).ready(function(){
    var lighttextbox = $("#lighttextbox");
    $("a.news").click(function(e){
        var docFrag = $(this).children().clone();
        lighttextbox.empty();
        docFrag.appendTo(lighttextbox);
        docFrag.find(".news-arrow-more").hide();
        docFrag.filter(".news-more").show();
        lighttextbox.show();
        e.preventDefault();
        return false;
    });
    lighttextbox.click(function(){
        lighttextbox.hide();
    });
});