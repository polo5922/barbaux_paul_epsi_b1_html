$(document).ready(function(){
  $("#change_test1").click(function(){
    $("#test_1").text("changing");
  });
  $("#change_test2").click(function(){
    $("#test_2").css("color","red");
  });
  $("#change_test3").click(function(){
    $("#test_3").toggle();
  });
});





$(document).ready(function(){
  $("#change_test4").click(function(){
    $("#test_4").fadeToggle(2000);
  });
  $("#change_test5").click(function(){
    $("#test_5").slideToggle(2000);
  });
  $("#change_test5_up").click(function(){
    $("#test_5").slideUp();
  });
  $("#change_test5_down").click(function(){
    $("#test_5").slideDown("fast");
  });
  $("#change_test6").click(function(){
    $("#test_6").animate({
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
  });
});
