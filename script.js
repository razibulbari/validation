console.log("Hello, World!");

const allowedDomains = ["yahoo.com", "hotmail.com", "outlook.com", "gmail.com"];

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
    if (number.length > 11) {
        err1.textContent = "*Number must be exactly 11 digits.";
        err1.style.display = "block";
        return;
    }
    err1.style.display = "none";
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

function showError2() {
    var email = document.getElementById("email").value;
    if (email.length === 0) {
        err2.textContent = "*Email is required.";
        err2.style.display = "block";
        return;
    }
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        err2.textContent = "*Invalid email format.";
        err2.style.display = "block";
        return;
    }
    var domain = email.split("@")[1];
    if (!allowedDomains.includes(domain)) {
        err2.textContent = "*Email domain must be one of: " + allowedDomains.join(", ");
        err2.style.display = "block";
        return;
    }
    err2.style.display = "none";
}

// ...existing code...

let countriesData = [];

function populateCountries() {
    fetch('https://restcountries.com/v3.1/all?fields=name,cca2,idd')
        .then(response => response.json())
        .then(data => {
            countriesData = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
            const select = document.getElementById('countrySelect');
            select.innerHTML = '<option value="">Select Country</option>';
            countriesData.forEach(country => {
                const option = document.createElement('option');
                option.value = country.cca2;
                option.textContent = country.name.common;
                select.appendChild(option);
            });
        });
}

document.addEventListener('DOMContentLoaded', function() {
    populateCountries();
    document.getElementById('countrySelect').addEventListener('change', function() {
        const selectedCode = this.value;
        const country = countriesData.find(c => c.cca2 === selectedCode);
        const numberCodeInput = document.getElementById('numberCode');
        if (country && country.idd && country.idd.root) {
            // Use the first suffix if available, otherwise just the root
            const code = country.idd.root + (country.idd.suffixes && country.idd.suffixes.length ? country.idd.suffixes[0] : "");
            numberCodeInput.value = code;
        } else {
            numberCodeInput.value = "";
        }
    });
});


fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => console.log("Countries loaded:", data.length))
  .catch(err => console.error("API error:", err));
// ...existing code...


fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        console.log("API response:", data); // Add this line
        countriesData = Array.isArray(data) ? data.sort((a, b) => a.name.common.localeCompare(b.name.common)) : [];
        // ...rest of your code...
    });