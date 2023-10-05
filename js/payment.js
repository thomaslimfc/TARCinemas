
cardButton.addEventListener("click", openCard());

function  openCard() {
    document.getElementById("cardForm").style.display = "block";
    document.getElementById("qrForm").style.display = "none";
    document.getElementById("fpxForm").style.display = "none";
    document.getElementById("bankTransferForm").style.display = "none";
}

qrButton.addEventListener("click", openQR());

function  openQR() {
    document.getElementById("qrForm").style.display = "block";
    document.getElementById("cardForm").style.display = "none";
    document.getElementById("fpxForm").style.display = "none";
    document.getElementById("bankTransferForm").style.display = "none";
}

fpxButton.addEventListener("click", openFPX());

function openFPX() {
    document.getElementById("qrForm").style.display = "none";
    document.getElementById("cardForm").style.display = "none";
    document.getElementById("fpxForm").style.display = "block";
    document.getElementById("bankTransferForm").style.display = "none";
}

transferButton.addEventListener("click", openBTransfer());

function  openBTransfer() {
    document.getElementById("qrForm").style.display = "none";
    document.getElementById("cardForm").style.display = "none";
    document.getElementById("fpxForm").style.display = "none";
    document.getElementById("bankTransferForm").style.display = "block";
}


document.getElementById("payment_button").addEventListener("click", confirmOrder);

function confirmOrder() {
    var confirmation = confirm("Confirm Your Order? ");
    
    if (confirmation) {
        // clicked OK, display payment success message using alert
        window.location.href = "paymentsuccess.html";


    } else {
        // clicked Cancel, go to the payment page
        window.location.href = "payment.html";
    }
}





