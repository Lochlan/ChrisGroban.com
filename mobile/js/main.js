$(document).ready(function() {
    $("#videos").click(function() {
        $("#c-bio").hide();
        $("#c-contact").hide();
        $("#c-videos").show();
    });
    $("a#bio").click(function() {
        $("#c-videos").hide();
        $("#c-contact").hide();
        $("#c-bio").show();
    });
    $("a#contact").click(function() {
        $("#c-videos").hide();
        $("#c-bio").hide();
        $("#c-contact").show();
    });
});
