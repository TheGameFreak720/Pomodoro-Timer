$(document).ready(function () {

    var buzzer = $('#buzzer')[0];
    var count = parseInt($('#num').html());
    var breakTime = parseInt($('#breakNum').html());
    $('#reset').hide();

    //Start Timer
    $('#start').click(function() {
        var counter= setInterval(timer, 1000);

        function timer() {
            count -= 1;
            //Hide variables
            $('#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2').hide();
            $('#timeType').html('Session Time: ');

            if (count === 0) {
                buzzer.play();
                clearInterval(counter);
                var startBreak = setInterval(breakTimer, 1000);
                $('#num').hide();
            }

            $('#num').html(count);

            function breakTimer() {
                $('#timeType').html('Break Time: ');
                $('#breakNum').show();
                breakTime -= 1;

                if (breakTime === 0) {
                    clearInterval(startBreak);
                }

                $('#breakNum').html(breakTime);
            }
        }
    });

    //Work Time
    $('#minus5Clock').click(function(){
        if (count > 5) {
            count -= 5;
            $('#num').html(count);
        }
    });
    $('#add5Clock').click(function(){
        count += 5;
        $('#num').html(count);
    });

    //Break Time
    $('#minus5Break').click(function(){
        if (breakTime > 5) {
            breakTime -= 5;
            $('#breakNum').html(breakTime);
        }
    });
    $('#add5Break').click(function(){
        breakTime += 5;
        $('#breakNum').html(breakTime);
    });
});