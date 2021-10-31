$(document).ready(function() {
  $("#letterCollection").submit(function(event){
    const nameInput = $("input#personName").val();

    $(".name").append(nameInput);

    $("#letter").show();

    event.preventDefault();
  });
});