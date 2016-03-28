var offset = 5;
var car1clicks = 0;
var car2clicks = 0;
var winner = false;
//moves car 1
$("body").keyup(function moveCar1 (e) {
    if(e.keyCode == '39') {
        var pos = $("#d").position();
        $("#d").css('left', pos.left + offset);
        car1clicks++;
        console.log("Car One has moved " + car1clicks + " feet");
    } else if (e.keyCode == '88') {
        var pos = $("#c").position();
        $("#c").css('left', pos.left + offset);
        car2clicks++;
        console.log("Car Two has moved " + car2clicks + " feet");
    }if(car2clicks > 100){
          alert("player 2 wins");
      } if (car1clicks > 100) {
          alert("player 1 wins");
      }
  });


$('#reset').on('click', function(){
location.reload();
});
