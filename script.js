// function showDiv() {
//    document.getElementById('welcomeDiv').style.display = "block";
// }
// function hideDiv() {
//    document.getElementById('welcomeDiv').style.display = "none";
// }
$(document).ready(function(){
    $(".hamburger").click(function(){
        $(".menu2").toggle(500);
    });
});
