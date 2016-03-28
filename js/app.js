// Click the GO button
    $('#go').click(function() {
        // build a function that checks to see if a car has won the race
        function checkIfComplete() {
            if( isComplete == false ) {
                isComplete = true;
            } else {
                place = 'second';
            }
        }
        // get the width of the cars
        var carWidth = $('#d').width();
        // get the width of the racetrack
        var raceTrackWidth = $(window).width() - carWidth;
        // generate a random # between 1 and 5000
        var raceTime1 = Math.floor( (Math.random() * 5000) + 1 );
        var raceTime2 = Math.floor( (Math.random() * 5000) + 1 );
        // set a flag variable to FALSE by default
        var isComplete = false;
        // set a flag variable to FIRST by default
        var place = 'first';
        // animate car 1
        $('#d').animate({
            // move the car width of the racetrack
            left: raceTrackWidth
        }, raceTime1, function() {
            // animation is complete
            // run a function
            checkIfComplete();
            // give some text feedback in the race info box
            $('#raceInfo1 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime1 + ' milliseconds!' );
        });
        // animate car 2
        $('#c').animate({
            // move the car width of the racetrack
            left: raceTrackWidth
        }, raceTime2, function() {
            // animation is complete
            // run a function
            checkIfComplete();
            // give some text feedback in the race info box
            $('#raceInfo2 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime2 + ' milliseconds!' );
        });
    });
    // reset the race
    $('#reset').click(function() {
        $('.car').css('left','0');
        $('.raceInfo span').text('');
    });

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
