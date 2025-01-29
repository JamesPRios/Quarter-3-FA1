var firstname = prompt("What is your first name?");
var lastname = prompt("What is your last name?");
var birthyear = parseInt(prompt("What year were you born?"));

const currentyear = 2025;
var UserAge = currentyear - birthyear;


if (isNaN(birthyear) || birthyear > currentyear || birthyear < 1900) {
    document.getElementById("message").innerHTML = "Invalid birth year entered! Please enter a valid year.";
} else {
    document.getElementById("message").innerHTML = 
        "Hello, " + firstname + " " + lastname + "! How does it feel to be " + UserAge + " years old?";
}