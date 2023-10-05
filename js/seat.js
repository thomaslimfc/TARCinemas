//get value from local storage
const movie = localStorage.getItem("movieselected");
document.getElementById("movie").innerHTML = movie;
const hall = localStorage.getItem("hallselected");
document.getElementById("hall").innerHTML = hall;
const date = localStorage.getItem("dateselected");
document.getElementById("date").innerHTML = date;
const time = localStorage.getItem("timeselected");
document.getElementById("time").innerHTML = time;

var numselect = 0;
const container = document.querySelector(".container");

const button1 = document.getElementById("proceed");
button1.disabled=true;

// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
  
    const selectedSeatsCount = selectedSeats.length;
    const seat = JSON.stringify(selectedSeatsCount);

    localStorage.setItem("seatselected",seat);
  }

// Seat click event
container.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("seat") &&
      !e.target.classList.contains("sold")
    ) {
      e.target.classList.toggle("selected");
  
      updateSelectedCount();
    }

    var seatselect = localStorage.getItem("seatselected");
    numselect = JSON.parse(seatselect);

    //validation
    if(numselect > 0 && numselect <= 35){
        //console.log(typeof numselect, numselect);
        button1.disabled=false;
    }
    else {
        button1.disabled=true;
    }
  });

function proceed(){
    

    updateSelectedCount();

    location.href = "../html/tickettype.html";
}