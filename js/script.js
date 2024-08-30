document.getElementById('openModalBtn').onclick = function() {
    document.getElementById('modal').style.display = 'block';
};

document.getElementById('closeModalBtn').onclick = function() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('registrationForm').reset();
    hideErrors();
};

document.getElementById('registrationForm').onsubmit = function(e) {
    e.preventDefault();
    
    var valid = true;
    
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var email = document.getElementById('email');
    
    var namePattern = /^[a-zA-Z\s]+$/;

    if (firstName.value.trim() === '' || !namePattern.test(firstName.value.trim())) {
        document.getElementById('firstNameError').style.display = 'block';
        firstName.style.border = '2px solid red';
        valid = false;
    } else {
        document.getElementById('firstNameError').style.display = 'none';
        firstName.style.border = '1px solid #ccc';
    }

    if (lastName.value.trim() === '' || !namePattern.test(lastName.value.trim())) {
        document.getElementById('lastNameError').style.display = 'block';
        lastName.style.border = '2px solid red';
        valid = false;
    } else {
        document.getElementById('lastNameError').style.display = 'none';
        lastName.style.border = '1px solid #ccc';
    }

    if (email.value.trim() === '' || !email.checkValidity()) {
        document.getElementById('emailError').style.display = 'block';
        email.style.border = '2px solid red';
        valid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
        email.style.border = '1px solid #ccc';
    }
    
    if (valid) {
        document.getElementById('registrationForm').style.display = 'none';
        document.getElementById('thankYouMessage').style.display = 'block';
    }
};

function hideErrors() {
    var errors = document.querySelectorAll('.error');
    for (var i = 0; i < errors.length; i++) {
        errors[i].style.display = 'none';
    }

    var inputs = document.querySelectorAll('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.border = '1px solid #ccc';
    }
}