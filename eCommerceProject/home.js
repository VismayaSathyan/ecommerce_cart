 $(document).ready(function(){
//     // Validate email
//     const email = document.getElementById("emailid");
//    email.addEventListener("blur", () => {
//       let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
//      let s = email.value;
//     if (regex.test(s)) {
//          email.classList.remove("emailhide");
//          return true;
//       } else {
//          email.classList.add("emailhide");
//         return false;
//        }
//     });

    $('#emailid').on('input', function () {
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

       $('#password').on('input', function () {
         var password = $(this).val();
        // var cpassword = $('#cpassword').val();
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
      else {
         $('.password-msg').empty();
         $(this).addClass('valid-input').removeClass('invalid-input');
      }
      });

     // validation to submit the form
$('input').on('input',function(e){
    if($('#myForm').find('.valid-input').length==2){
        $('#submit-btn').removeClass('allowed-submit');
        $('#submit-btn').removeAttr('disabled');
    }
   else{
        e.preventDefault();
        $('#submit-btn').attr('disabled','disabled')
        
       }
 });
 });

// function validate(){
//     const email = document.getElementById("emailid").value;
//     let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
//     if (!regex.test(email)) {
//                 // email.classList.remove("emailhide");
//                 // emailError = true;
//                 alert("invalid");
//                 return false;
//               } else {
//                 return true;
//                 // email.classList.add("emailhide");
//                 // emailError = false;
//               }
// }