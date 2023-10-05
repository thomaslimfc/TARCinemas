
// Retrieve data from localStorage
var movieselected = localStorage.getItem("movieselected");
var hallselected = localStorage.getItem("hallselected");
var dateselected = localStorage.getItem("dateselected");
var timeselected = localStorage.getItem("timeselected");
var seatselected = parseInt(localStorage.getItem("seatselected"), 10);
var subtotal1 = localStorage.getItem("subtotal");
var subtotal = JSON.parse(subtotal1);

// Display the data in the HTML elements
document.getElementById("movieselected").innerHTML = movieselected;
document.getElementById("hallselected").textContent = hallselected;
document.getElementById("dateselected").textContent = dateselected;
document.getElementById("timeselected").textContent = timeselected;
document.getElementById("seatselected").textContent = seatselected;
document.getElementById("subtotal").textContent = subtotal.toFixed(2); // Display as currency

const cardbutton = document.querySelector(".card-button");
cardbutton.addEventListener("click", openCard());

function  openCard() {
    document.getElementById("card-details").style.display = "block";
    document.getElementById("qr-details").style.display = "none";
    document.getElementById("fpx-details").style.display = "none";
}

qr-button.addEventListener("click", openQR());

function openQR() {
    document.getElementById("qr-details").style.display = "block";
    document.getElementById("card-details").style.display = "none";
    document.getElementById("fpx-details").style.display = "none";
}

fpx-button.addEventListener("click", openFPX());

function openFPX() {
    document.getElementById("qr-details").style.display = "none";
    document.getElementById("card-details").style.display = "none";
    document.getElementById("fpx-details").style.display = "block";
}


var toggleSelect = changeColor() 
{
    document.style.background = "rgb(194, 108, 50)";
}

window.onload = changeColor() 
{
    getElementById("payment-method-choice").addEventListener("click", toggleSelect);
}

$(document).ready(function(){

    //For Card Number formatted input
    var cardNum = document.getElementById('cr_no');
    cardNum.onkeyup = function (e) {
        if (this.value == this.lastValue) return;
        var caretPosition = this.selectionStart;
        var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
        var parts = [];
        
        for (var i = 0, len = sanitizedValue.length; i < len; i += 4) {
            parts.push(sanitizedValue.substring(i, i + 4));
        }
        
        for (var i = caretPosition - 1; i >= 0; i--) {
            var c = this.value[i];
            if (c < '0' || c > '9') {
                caretPosition--;
            }
        }
        caretPosition += Math.floor(caretPosition / 4);
        
        this.value = this.lastValue = parts.join(' ');
        this.selectionStart = this.selectionEnd = caretPosition;
    }
    
    //For Date formatted input
    var expDate = document.getElementById('exp');
    expDate.onkeyup = function (e) {
        if (this.value == this.lastValue) return;
        var caretPosition = this.selectionStart;
        var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
        var parts = [];
        
        for (var i = 0, len = sanitizedValue.length; i < len; i += 2) {
            parts.push(sanitizedValue.substring(i, i + 2));
        }
        
        for (var i = caretPosition - 1; i >= 0; i--) {
            var c = this.value[i];
            if (c < '0' || c > '9') {
                caretPosition--;
            }
        }
        caretPosition += Math.floor(caretPosition / 2);
        
        this.value = this.lastValue = parts.join('/');
        this.selectionStart = this.selectionEnd = caretPosition;
    }
    
    
    });

    
document.getElementById("cont_button").addEventListener("click", confirmContinue);

function confirmContinue() {
    var confirmation = confirm("Confirm Your Order? ");
    
    if (confirmation) {
        // clicked OK, display payment success message using alert
        window.location.href = "payment_method.html";


    } else {
        // clicked Cancel, go to the payment page
        window.location.href = "payment.html";
    }
}

document.getElementById("back_button").addEventListener("click", goBack);

function goBack() {
    alert("Redirecting to main page...");

    window.location.href = "../index.html";
}

document.getElementById("payment_button").addEventListener("click", confirmOrder);

function confirmOrder() {
    var confirmation = confirm("Confirm Payment?");
    
    if (confirmation) {
        // clicked OK, display payment success message using alert
        alert("Payment Successful !!!");
        alert("Receipt will be send to your email registered");
        window.location.href = "movies.html";
    } else {
        // clicked Cancel, go to the payment page
        window.location.href = "payment.html";
    }
}


