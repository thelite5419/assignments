document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (!validateForm2()) {
        return;
    }

    const email = document.getElementById('emailid2').value;
    const password = document.getElementById('passid2').value;
    const confirmPassword = document.getElementById('passid3').value;

    try {
        const response = await fetch('http://localhost:3000/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, confirmPassword }) // Include confirmPassword in the body
        });

        if (response.ok) {
            alert('Registration successful!');
            window.location.href = "../login/login.html";
        } else {
            const errorData = await response.json();
            alert(`Registration failed: ${errorData.error}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Registration failed: Network error');
    }
});


function validateEmail2() {
    const email = document.getElementById('emailid2').value;
    const emailError = document.getElementById('emailvalidation2');
    const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    
    if (!regex.test(email)) {
        emailError.innerHTML = "Please enter a valid email address.";
        return false;
    } else {
        emailError.innerHTML = "";
        return true;
    }
}

function validatePassword2() {
    const password = document.getElementById('passid2').value;
    const passError = document.getElementById('passvalidation2');
    const minLength = 6;
    const hasUppercase = /[A-Z]/;
    const hasLowercase = /[a-z]/;
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#\$%\^\&*\)\(+=._-]/;

    if (password.length < minLength) {
        passError.innerHTML = "Password must be at least 6 characters long.";
        return false;
    }
    if (!hasUppercase.test(password)) {
        passError.innerHTML = "Password must contain at least one uppercase letter.";
        return false;
    }
    if (!hasLowercase.test(password)) {
        passError.innerHTML = "Password must contain at least one lowercase letter.";
        return false;
    }
    if (!hasNumber.test(password)) {
        passError.innerHTML = "Password must contain at least one number.";
        return false;
    }
    if (!hasSpecialChar.test(password)) {
        passError.innerHTML = "Password must contain at least one special character.";
        return false;
    }
    
    passError.innerHTML = "";
    return true;
}

function validateConfirmPassword() {
    const password = document.getElementById('passid2').value;
    const confirmPassword = document.getElementById('passid3').value;
    const confirmPassError = document.getElementById('passvalidation3');

    if (password !== confirmPassword) {
        confirmPassError.innerHTML = "Passwords do not match.";
        return false;
    }

    confirmPassError.innerHTML = "";
    return true;
}

function validateForm2() {
    const isEmailValid = validateEmail2();
    const isPasswordValid = validatePassword2();
    const isConfirmPasswordValid = validateConfirmPassword();
    return isEmailValid && isPasswordValid && isConfirmPasswordValid;
}
