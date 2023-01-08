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
            $('#emailError').html('');
            $('#passwordError').html('Please enter password !!');
        }
        else if(password.length < 8){ //check password value length eight
            $('#emailError').html('');
            $('#passwordError').html('Password must be 8 character !!');
        }
        else if( !/^[a-zA-Z0-9]+$/.test(password) ){ // check password allowed capital and small letters
            $('#emailError').html('');
            $('#passwordError').html('Password only capital and small letters and number are allowed !!');
        }

        else if(age == '-- Please Select Age --'){ //select age range
            $('#passwordError').html('');
            $('#ageError').html('Please select an age range !!');
        }

        else if(!checkbox){ //check confirm
            $('#ageError').html('');
            $('#checkboxError').html('Please check confirm !!');
        }

        else{
                $.ajax({
                        url: 'reg-process.php',
                        type: 'post',
                        data:
                        {
                            user_name: username,
                                email: email,
                             password: password,
                                  age: age,
                        },
                        success: function(response){
                            $('#message').html(response);
                        }
                    }
                );

                $('#registraion_form')[0].reset();
                $('#checkBoxError').html('');

        }
    }
);
