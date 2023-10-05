
 

addCard_button.addEventListener("click", openAddCard());

function openAddCard() {
    document.getElementById("addcardForm").style.display = "block";
    document.getElementById("userdetails").style.display = "none";
    document.getElementById("addticketForm").style.display = "none";
    document.getElementById("security").style.display = "none";
}

profileDetails_button.addEventListener("click", openProfile());

function openProfile() {
    document.getElementById("addcardForm").style.display = "none";
    document.getElementById("userdetails").style.display = "block";
    document.getElementById("addticketForm").style.display = "none";
    document.getElementById("security").style.display = "none";
}

myTicket_button.addEventListener("click", openTicket());

function openTicket() {
    document.getElementById("addcardForm").style.display = "none";
    document.getElementById("addticketForm").style.display = "block";
    document.getElementById("userdetails").style.display = "none";
    document.getElementById("security").style.display = "none";
}

security_button.addEventListener("click", openSecurity());

function openSecurity() {
    document.getElementById("addcardForm").style.display = "none";
    document.getElementById("addticketForm").style.display = "none";
    document.getElementById("userdetails").style.display = "none";
    document.getElementById("security").style.display = "block";
}

var password = document.getElementById("newpass");
var confirm_password = document.getElementById("checknewpass");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;