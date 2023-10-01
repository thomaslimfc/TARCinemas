const container = document.querySelector(".container");
var numselect = 0;

// Seat click event
container.addEventListener("click", (x) => {
    if (
      x.target.classList.contains("seat") &&
      !x.target.classList.contains("sold") && !x.target.classList.contains("selected")
    ) {
      x.target.classList.toggle("selected");
      numselect ++;
    }
    else if (
        x.target.classList.contains("seat") &&
        !x.target.classList.contains("sold") && x.target.classList.contains("selected")
    ) {
        x.target.classList.toggle("selected");
        numselect --;
    }
});

function proceed(){
    if(numselect != 0){
        numselect = 0;
        location.href = "/TARCinemas/html/tickettype.html";
    }
    else {
        alert("Please select atlease one seat!");
    }
}