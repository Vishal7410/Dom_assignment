// Get input from user
let password = prompt("Enter password:");
let confirmPassword = prompt("Confirm password:");

// Check if passwords match
if (password === confirmPassword) {
  console.log("Password Matched. Password validation Successful.");
} else {
  console.log("Password didn't match. Password validation unsuccessful");
}