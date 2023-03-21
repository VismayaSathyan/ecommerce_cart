$(document).ready(function () {
  
  //validation for First Name
  $('#firstName').on('input', function () {
     var firstName = $(this).val();
     var validName = /^[a-zA-Z ]*$/;
     if (firstName.length == 0) {
        $('.first-name-msg').addClass('invalid-msg').text("First Name is required");
        $(this).addClass('invalid-input').removeClass('valid-input');
        
     }
     else if (!validName.test(firstName)) {
        $('.first-name-msg').addClass('invalid-msg').text('only characters & Whitespace are allowed');
        $(this).addClass('invalid-input').removeClass('valid-input');
        
     }
     else {
        $('.first-name-msg').empty();
        $(this).addClass('valid-input').removeClass('invalid-input');
     }
    });
  // valiadtion for Last Name
  $('#lastName').on('input', function () {
     var secondName = $(this).val();
     var validName = /^[a-zA-Z ]*$/;
     if (secondName.length == 0) {
       $('.last-name-msg').addClass('invalid-msg').text("Last Name is required");
       $(this).addClass('invalid-input').removeClass('valid-input');
     }
     else if (!validName.test(secondName)) {
       $('.last-name-msg').addClass('invalid-msg').text('only characters & Whitespace are allowed');
       $(this).addClass('invalid-input').removeClass('valid-input');
     }
     else {
       $('.last-name-msg').empty();
       $(this).addClass('valid-input').removeClass('invalid-input');
     }
  });
  // valiadtion for Email
  $('#email').on('input', function () {
     var emailAddress = $(this).val();
     var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if (emailAddress.length == 0) {
       $('.email-msg').addClass('invalid-msg').text('Email is required');
       $(this).addClass('invalid-input').removeClass('valid-input');
     }
     else if (!validEmail.test(emailAddress)) {
       $('.email-msg').addClass('invalid-msg').text('Invalid Email Address');
       $(this).addClass('invalid-input').removeClass('valid-input');
     }
     else {
       $('.email-msg').empty();
       $(this).addClass('valid-input').removeClass('invalid-input');
    }
    });
  // valiadtion for Password
  $('#password').on('input', function () {
     var password = $(this).val();
     var cpassword = $('#cpassword').val();
     var uppercasePassword = /(?=.*?[A-Z])/;
     var lowercasePassword = /(?=.*?[a-z])/;
     var digitPassword = /(?=.*?[0-9])/;
     var spacesPassword = /^$|\s+/;
     var symbolPassword = /(?=.*?[#?!@$%^&*-])/;
     var minEightPassword = /.{8,}/;
  if (password.length == 0) {
     $('.password-msg').addClass('invalid-msg').text('Password is required');
     $(this).addClass('invalid-input').removeClass('valid-input');
  }
  else if (!uppercasePassword.test(password)) {
     $('.password-msg').addClass('invalid-msg').text('At least one Uppercase');
     $(this).addClass('invalid-input').removeClass('valid-input');
  }
  else if (!lowercasePassword.test(password)) {
     $('.password-msg').addClass('invalid-msg').text('At least one Lowercase');
     $(this).addClass('invalid-input').removeClass('valid-input');
  }
  else if (!digitPassword.test(password)) {
     $('.password-msg').addClass('invalid-msg').text('At least one digit');
     $(this).addClass('invalid-input').removeClass('valid-input');
  } else if (!symbolPassword.test(password)) {
     $('.password-msg').addClass('invalid-msg').text('At least one special character');
     $(this).addClass('invalid-input').removeClass('valid-input');
  }
  else if (spacesPassword.test(password)) {
     $('.password-msg').addClass('invalid-msg').text('Whitespaces are not allowed');
     $(this).addClass('invalid-input').removeClass('valid-input');
  }
  else if (!minEightPassword.test(password)) {
     $('.password-msg').addClass('invalid-msg').text('Minimum length 8');
     $(this).addClass('invalid-input').removeClass('valid-input');
  }
  else if(cpassword.length>0) {
      if(password!=cpassword){
     $('.cpassword-msg').addClass('invalid-msg').text('must be matched');
     $('#cpassword').addClass('invalid-input').removeClass('valid-input');
     }
     else
     {
      $('.cpassword-msg').empty();
      $('#cpassword').addClass('valid-input').removeClass('invalid-input');
     }
     $('#password').addClass('valid-input').removeClass('invalid-input');
     $('.password-msg').empty();
  } 
  else {
     $('.password-msg').empty();
     $(this).addClass('valid-input').removeClass('invalid-input');
  }
  });
  // valiadtion for Confirm Password
  $('#cpassword').on('input', function () {
     var password = $('#password').val();
     var cpassword = $(this).val();
  if (cpassword.length == 0) {
     $('.cpassword-msg').addClass('invalid-msg').text('Confirm password is required');
     $(this).addClass('invalid-input').removeClass('valid-input');
  }
  else if(cpassword != password) {
     $('.cpassword-msg').addClass('invalid-msg').text('must be matched');
     $(this).addClass('invalid-input').removeClass('valid-input');
  } 
  else {
     $('.cpassword-msg').empty();
     $(this).addClass('valid-input').removeClass('invalid-input');
      }
  });
  // validation to submit the form
  $('input').on('input',function(e){
     if($('#myForm').find('.valid-input').length==5){
         $('#submit-btn').removeClass('allowed-submit');
         $('#submit-btn').removeAttr('disabled');
     }
    else{
         e.preventDefault();
         $('#submit-btn').attr('disabled','disabled')
         
        }
  });
  });