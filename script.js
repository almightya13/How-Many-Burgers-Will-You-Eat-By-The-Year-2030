
$(".submit").click(function() { //User will click button//
    var age= parseInt($(".burger").val()); //Calculates how many burgers you will eat//
    var age2= age-5; //Calculates how many years would have passed//
});

$(".submit").click(function() {
    var burger= parseInt($(".burger").val());
    var solution= burger*572;
    $(".span2").text(solution);
});

$(".submit").click(function() {
    var name=$(".name").val();
    $(".span1").text(name);
});