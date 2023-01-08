$(document).on('click','#formSubmit',function(e){

        e.preventDefault();

        var username = $('#user_name').val();
        var email 	 = $('#email').val();
        var password = $('#password').val();
        var age      = $('#age').find(":selected").val();
        var checkbox = $("#checkBox").prop('checked');

        var atpos  = email.indexOf('@');
        var dotpos = email.lastIndexOf('.com');


        if(username == ''){ // check username not empty
            $('#userNameError').html('Please enter username !!');
        }
        else if(username.length < 6){ //check username value length six
            $('#userNameError').html('Username must be 6 character !!');
        }


        else if(email == ''){ //check email not empty
            $('#userNameError').html('');
            $('#emailError').html('Please enter email address !!');
        }
        else if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length){ //check valid email format
            $('#userNameError').html('');
            $('#emailError').html('Please enter valid email address !!');
        }


        else if(password == ''){ //check password not empty
            $('#userNameError').html('');
            $('#emailError').html('');
            $('#passwordError').html('Please enter password !!');
        }
        else if(password.length < 8){ //check password value length eight
            $('#userNameError').html('');
            $('#emailError').html('');
            $('#passwordError').html('Password must be 8 character !!');
        }
        else if( !/^[a-zA-Z0-9]+$/.test(password) ){ // check password allowed capital and small letters
            $('#userNameError').html('');
            $('#emailError').html('');
            $('#passwordError').html('Password only capital and small letters and number are allowed !!');
        }
        else if( /^[a-zA-Z0-9]+$/.test(password) ){ // check password allowed capital and small letters

            if ( ( containsUppercase( password ) == false ) ) {
                $('#userNameError').html('');
                $('#emailError').html('');
                $('#passwordError').html('Password includes at least one uppercase letter. !!');
            }
            else if( containsLowercase( password ) == false  ){
                $('#userNameError').html('');
                $('#emailError').html('');
                $('#passwordError').html('Password includes at least one  one lowercase letter . !!');
            }
            else if( containsNumber( password ) == false ){
                $('#userNameError').html('');
                $('#emailError').html('');
                $('#passwordError').html('Password includes at least one  a number. !!');
            }
            else {

                if(age == '-- Please Select Age --'){ //select age range
                    $('#userNameError').html('');
                    $('#emailError').html('');
                    $('#passwordError').html('');
                    $('#ageError').html('Please select an age range !!');
                }
                else if(!checkbox){ //check confirm
                    $('#userNameError').html('');
                    $('#emailError').html('');
                    $('#passwordError').html('');
                    $('#ageError').html('');
                    $('#confirmBoxError').html('Please check confirm !!');
                }
                else{

                    $.ajax({
                                    url: 'reg-process.php',
                                    type: 'post',
                                    data: {
                                        user_name: username,
                                        email    : email,
                                        password : password,
                                        age      : age,
                                    },
                                    success: function(response){
                                        $('#message').html(response);
                                    }
                            });

                    fieldEmpty()
                    $('#registraion_form')[0].reset();

                }
            }
        }
    }
);

function containsUppercase(str) {
    return /[A-Z]/.test(str);
}

function containsLowercase(str) {
    return /[a-z]/.test(str);
}

function containsNumber(str) {
    return /[0-9]/.test(str);
}

function fieldEmpty() {
    $('#userNameError').html('');
    $('#emailError').html('');
    $('#passwordError').html('');
    $('#ageError').html('');
    $('#confirmBoxError').html('');
}
