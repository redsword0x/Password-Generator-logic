let passwordbox = document.getElementById("password");
let message = document.getElementById("message");

let number = "1234567890";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let symbol = "!@#$%^&*()_+=:,.<>/?";
let allchar = number + upperCase + lowerCase + symbol;

// Password generation function
function passwordgen() {
  let password = "";
  let length = 12;

  while (password.length < length) {
    password += allchar.charAt(Math.floor(Math.random() * allchar.length));
  }

  passwordbox.value = password;

  // Show animated message
  message.classList.add("active");
  
  // Remove the message after 2 seconds
  setTimeout(() => {
    message.classList.remove("active");
  }, 2000);
}

// Copy to clipboard function
function copybutton() {
  passwordbox.select();
  passwordbox.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(passwordbox.value);

  alert("Copied the text: " + passwordbox.value);
}
