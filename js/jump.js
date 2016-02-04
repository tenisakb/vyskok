$(document).ready(function () {

    /*Global variables which contains info about user*/
    var firstName;
    var surName;
    var email;
    var tel;
    var sex;

    /*For formSubmited veritification*/
    var formSubmited;

    /*Counter variable*/
    var value =  0;
    var interval;
    var saved = false;

    $('.submit-button').click(function(event){
        /*Loads variables from form to global variables*/
        firstName = $('#firstName').val();
        surName = $('#surName').val();
        email = $('#email').val();
        tel = $('#tel').val();
        sex = $('#sex').val();

        if(firstName != '' && surName != '' && email != '' && tel != '' && sex != '') {
            formSubmited = true;
            $('.form-section').hide();
            $('.start-section').fadeIn("slow", function () {
            });
        }
    });

    $(this).mousedown(function(){
        if(formSubmited == true){
            $('.start-section').hide();
            $('.counter-section').show();
        }
		
		if(wasCounterRunning() == true && saved == false){
            console.log('Stopped');
            stopCounter();

            $.ajax({
                url: 'php/results.php',
                data: {
                    firstName: firstName,
                    surName: surName,
                    email: email,
                    tel: tel,
                    sex: sex,
                    jumpHeight: value
                },
                type: 'post',
                success: function(){
                    var link = 'php/video.php?name=' + firstName + '&score=' + value + '&sex=' + sex;
                    window.open(link, 'Seznámek');
                }
            });
            saved = true;
        }
    });

    $(this).mouseup(function(){
        if(formSubmited == true && wasCounterRunning() == false){
            console.log('Running');
            runCounter();
        }
    });

    function updateCounter(){
        console.log(value);
        value++;
        $('.counter-section').find('.counter-text').text(value/100 + 's');
    }

    function wasCounterRunning(){
        if(value > 0){
            return true;
        } else{
            return false;
        }
    }

    /*INTERVAL FUNCTIONS*/
    function runCounter(){
        isCounterRunning = true;
        interval = setInterval(updateCounter, 10);
    }

    function stopCounter(){
        isCounterRunning = false;
        clearInterval(interval);
    }
});