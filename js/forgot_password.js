
function checkmail() {
    var mail = document.getElementById('email');
    if (mail.value == "") {
      alert("Please enter your email!")
    }
    else if (mail.checkValidity() == false) {
      alert("Please enter a valid email address!");
      mail.checkValidity()
      return false;
    }
    else {
      alert("Please check your email and click on the link provided to reset your password.");
      window.location.href = "resetPW.html";
      return true;
    }
}
