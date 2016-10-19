$(document).ready(function() {


  $("form").submit(function(event) {
    var nameInput = $("#name").val();
    var reasonInput = $("#reason").val();
    var apptInput = $("#appt").val();
    var startInput = $("#start-time").val();
    var endInput = $("#end-time").val();

    $(".name").text(nameInput);
    $(".reason").text(reasonInput);
    $(".appt").text(apptInput);
    $(".start-time").text(startInput);
    $(".end-time").text(endInput);

    $("form").hide();
    $(".receipt-output").show();

    event.preventDefault();

  });


});
