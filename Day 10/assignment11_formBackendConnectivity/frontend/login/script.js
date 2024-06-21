
document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }
  else{
  const email = document.getElementById("emailid").value;
  const password = document.getElementById("passid").value;

  try {
    const response = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      alert("Login successful!");
      window.location.href = "home.html";
    } else {
      const errorData = await response.json();
      alert(`Login failed: ${errorData.error}`);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Login failed: Network error");
  }
}});


function validateEmail() {
  const email = document.getElementById("emailid").value;
  const emailError = document.getElementById("emailvalidation");
  const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(email)) {
    emailError.innerHTML = "Please enter a valid email address.";
    return false;
  } else {
    emailError.innerHTML = "";
    return true;
  }
}

function validatePassword() {
  const password = document.getElementById("passid").value;
  const passError = document.getElementById("passvalidation");
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

function validateForm() {
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  console.log(isEmailValid);
  console.log(isPasswordValid);
  return isEmailValid && isPasswordValid;
}