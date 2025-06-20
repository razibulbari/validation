console.log("Hello, World!");

var err0 = document.getElementById("req0");
var err1 = document.getElementById("req1");
var err2 = document.getElementById("req2");
var err3 = document.getElementById("req3");
var msg = document.getElementById("msg");
function showError() {
    var name = document.getElementById("name").value;
    if (name.length === 0) {
        err0.textContent = "*Name is required.";
        err0.style.display = "block";
        return;
    } 
    if (!name.match(/^[a-zA-Z]+$/)) {
        err0.textContent = "*Name must contain only letters.";
        err0.style.display = "block";
        return;
    } 

    err0.style.display = "none";
}

function showError1() {
    var number = document.getElementById("number").value;
    if (number.length === 0) {
        err1.textContent = "*Number is required.";
        err1.style.display = "block";
        return;
    }
    if (!number.match(/^\d+$/)) {
        err1.textContent = "*Number must contain only digits.";
        err1.style.display = "block";
        return;
    }
    if (number.length < 11) {
        err1.textContent = "*Number must be exactly 11 digits.";
        err1.style.display = "block";
        return;
    }
    err1.style.display = "none";
}

function showError2() {
    var email = document.getElementById("email").value;
    if (email.length === 0) {
        err2.textContent = "*Email is required.";
        err2.style.display = "block";
        return;
    }
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        err2.textContent = "*Email must be a valid email address.";
        err2.style.display = "block";
        return;
    }

    err2.style.display = "none";
}
function showError3() {
    var message = document.getElementById("message").value;
    if (message.length === 0) {
        err3.textContent = "*Message is required.";
        err3.style.display = "block";
        return;
    }
    if (message.length < 10) {
        err3.textContent = "*Message must be at least 10 characters long.";
        err3.style.display = "block";
        return;
    }
    if (message.length > 200) {
        err3.textContent = "*Message must be less than 200 characters.";
        err3.style.display = "block";
        return;
    }
    err3.style.display = "none";

}

function validateForm() {
    showError();
    showError1();
    showError2();
    showError3();

    if (err0.style.display === "none" && err1.style.display === "none" && 
        err2.style.display === "none" && err3.style.display === "none") {
        msg.textContent = "Form submitted successfully!";
        msg.style.color = "green";
        }
    else {
        msg.textContent = "Please correct the errors in the form.";
        msg.style.color = "red";
    }   
    msg.style.display = "block";
    return false;       
}