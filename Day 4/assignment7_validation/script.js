const emailValidation = document.getElementById("input");
const passValidation = document.getElementById("pass");
const userDiv = document.getElementsByClassName("user");

function  clearInputFields(){
  passValidation.value = "";
  emailValidation.value = "";
}


function doValidate(){


  passValidation.style.border = "";
  emailValidation.style.border = "";
  emailValidation.placeholder = 'Phone number, username, or email';

  let isValid = true;

  // Regular expression for email, phone number, or username
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phoneRegex = /^[0-9]{10}$/;
  const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;

  

  if (!emailRegex.test(emailValidation.value) && !phoneRegex.test(emailValidation.value) && !usernameRegex.test(emailValidation.value)) {
    emailValidation.placeholder = 'Please Enter Valid Credentials';
    for (let i = 0; i < userDiv.length; i++) {
      userDiv[i].style.border = "2px red solid";
    }
    isValid = false;
  }

  // Regular expression for password (at least 8 characters)
  const passwordRegex = /^.{8,}$/;
  if (!passwordRegex.test(passValidation.value)) {
    passValidation.placeholder = 'Password must be at least 8 characters long.';
    for (let i = 0; i < userDiv.length; i++) {
      userDiv[i].style.border = "2px red solid";
    }
    isValid = false;
  }

  if(emailValidation.value == "" && passValidation.value == ""){
    emailValidation.placeholder = 'feilds cannot be empty';
    passValidation.placeholder = 'feilds cannot be empty';
  }

  clearInputFields();
  return isValid;
}
