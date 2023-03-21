function checkAddress() {
    let checkBox = document.getElementById("check");

    let billAddress1 = document.getElementById("billAddress1");
    let shipAddress1 = document.getElementById("shipAddress1");
    let billAddress2 = document.getElementById("billAddress2");
    let shipAddress2 = document.getElementById("shipAddress2");
    let billAddress3 = document.getElementById("billAddress3");
    let shipAddress3 = document.getElementById("shipAddress3");

    let billZip = document.getElementById("billZip");
    let billCountry = document.getElementById("billCountry");
    let billState = document.getElementById("billState");
    let billCity = document.getElementById("billCity");

    let shipZip = document.getElementById("shipZip");
    let shipCountry = document.getElementById("shipCountry");
    let shipState = document.getElementById("shipState");
    let shipCity = document.getElementById("shipCity");

    if (checkBox.checked == true) {
        shipAddress1.value = billAddress1.value;
        shipAddress2.value = billAddress2.value;
        shipAddress3.value = billAddress3.value;

        shipZip.value = billZip.value;
        shipCity.value = billCity.value;
        shipState.value = billState.value;
        shipCountry.value = billCountry.value;
    }
    else {
        shipAddress1.value = "";
        shipAddress2.value = "";
        shipAddress3.value = "";

        shipZip.value = "";
        shipCity.value = "";
        shipState.value = "";
        shipCountry.value = "";
    }
}

$(document).ready(function () {

    //First name validation

    $('#fname').on('input', function () {
        var firstName = $(this).val();
        var validName = /^[a-zA-Z]*$/;
        var whiteSpaceVaid = /^\S+$/;
        if (firstName.trim().length == 0) {
            $('.first-name-msg').addClass('invalid-msg').text("First Name is required");
            $(this).addClass('invalid-input').removeClass('valid-input');

        }
        else if (!whiteSpaceVaid.test(firstName)) {
            $('.first-name-msg').addClass('invalid-msg').text('Whitespaces are not allowed');
            $(this).addClass('invalid-input').removeClass('valid-input');

        }
        else if (!validName.test(firstName)) {
            $('.first-name-msg').addClass('invalid-msg').text('only characters are allowed');
            $(this).addClass('invalid-input').removeClass('valid-input');

        }
        else {
            $('.first-name-msg').empty();
            $(this).addClass('valid-input').removeClass('invalid-input');
        }
    });

    //Last name validation

    $('#lname').on('input', function () {
        var lastName = $(this).val();
        var validLastName = /^[a-zA-Z\S+]*$/;
        if (lastName.trim().length == 0) {
            $('.last-name-msg').addClass('invalid-msg').text("Last Name is required");
            $(this).addClass('invalid-input').removeClass('valid-input');

        }
        else if (!validLastName.test(lastName)) {
            $('.last-name-msg').addClass('invalid-msg').text('only characters are allowed');
            $(this).addClass('invalid-input').removeClass('valid-input');

        }
        else {
            $('.last-name-msg').empty();
            $(this).addClass('valid-input').removeClass('invalid-input');
        }
    });

    //Email Validation

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

    //Password Validation

    $('#password').on('input', function () {
        var password = $(this).val();
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

    // Address validation

    $('#billAddress1').on('input', function () {
        var billAddress = $(this).val();
        if (billAddress.trim().length == 0) {
            $('.address1-msg').addClass('invalid-msg').text('Address is required');
            $(this).addClass('invalid-input').removeClass('valid-input');

        }
        else {
            $('.address1-msg').empty();
            $(this).addClass('valid-input').removeClass('invalid-input');

        }
    });

    //Zip validation

    $('#billZip').on('input', function () {
        var zipcode = $(this).val();
        var validZip = /^[0-9]*$/;
        if (zipcode.trim().length == 0) {
            $('.zip-msg').addClass('invalid-msg').text('Zipcode is required');
            $(this).addClass('invalid-input').removeClass('valid-input');

        } else if (!validZip.test(zipcode)) {
            $('.zip-msg').addClass('invalid-msg').text('Only numbers are allowed');
            $(this).addClass('invalid-input').removeClass('valid-input');
        }
        else {
            $('.zip-msg').empty();
            $(this).addClass('valid-input').removeClass('invalid-input');

        }
    });

    // validation to submit the form

    $('input').on('input', function (e) {
        if ($('#regForm').find('.valid-input').length == 6) {
            $('#submit-btn').removeClass('allowed-submit');
            $('#submit-btn').removeAttr('disabled');
        }
        else {
            e.preventDefault();
            $('#submit-btn').attr('disabled', 'disabled')

        }
    });
});