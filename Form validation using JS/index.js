function formSubmit() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("conf_passwd").value;

  if (name === "" || phone === "" || password === "" || confirmPassword === "") {
    alert("Please fill all the fields!");
    return false;
  }

  // Check phone number length and whether it's a number
  if (phone.length !== 10 || isNaN(phone)) {
    alert("Phone Number should consist of exactly 10 digits. Please enter a valid phone number!");
    return false;
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    alert("Password and Confirm Password fields do not match. Please try again!");
    return false;
  }

  return true; // If all conditions are met, submit the form
}
