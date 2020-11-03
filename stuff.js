$(document).ready(function () {

    $("#displayMessage").click(displayGreeting);

    function displayGreeting() {
        var rank = $("input[name=rank]:checked").data("rank");
        var firstN = $("#firstN").val();
        var lastN = $("#lastN").val();
        var output = "Greetings, " + rank + " " + firstN + " " + lastN;
        $("#outputHere").text(output);
        if(rank=="Private") {
            $("#outputHere").css('color', "red");
        }
        else {
            $("#outputHere").css('color', "blue");
        }
    }

});