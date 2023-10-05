//get value from local storage
const movie = localStorage.getItem("movieselected");
document.getElementById("movie").innerHTML = movie;

//for the dropdown display 
var acc = document.getElementsByClassName("selection");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

function time1_10(){
    //store value into local storage
    var time = ("10:00 AM");
    localStorage.setItem("timeselected",time);
    var date = ("19/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("4DX");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time1_12(){
    //store value into local storage
    var time = ("12:00 PM");
    localStorage.setItem("timeselected",time);
    var date = ("19/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("IMAX");
    localStorage.setItem("hallselected",hall);
    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time1_02(){
    //store value into local storage
    var time = ("2:00 PM");
    localStorage.setItem("timeselected",time);
    var date = ("19/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("2D");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time1_0430(){
    //store value into local storage
    var time = ("4:30 PM");
    localStorage.setItem("timeselected",time);
    var date = ("19/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("DB , DA");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time1_0615(){
    //store value into local storage
    var time = ("6:15 PM");
    localStorage.setItem("timeselected",time);
    var date = ("19/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("DA");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time1_0945(){
    //store value into local storage
    var time = ("9:45 PM");
    localStorage.setItem("timeselected",time);
    var date = ("19/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("DB , DA");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time2_11(){
    //store value into local storage
    var time = ("11:00 AM");
    localStorage.setItem("timeselected",time);
    var date = ("20/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("4DX");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time2_01(){
    //store value into local storage
    var time = ("1:00 PM");
    localStorage.setItem("timeselected",time);
    var date = ("20/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("DB , DA");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time2_0215(){
    //store value into local storage
    var time = ("2:15 PM");
    localStorage.setItem("timeselected",time);
    var date = ("20/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("IMAX");
    localStorage.setItem("hallselected",hall);
    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time2_0430(){
    //store value into local storage
    var time = ("4:30 PM");
    localStorage.setItem("timeselected",time);
    var date = ("20/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("DB , DA");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time2_0830(){
    //store value into local storage
    var time = ("8:30 PM");
    localStorage.setItem("timeselected",time);
    var date = ("20/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("4DX");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time2_1015(){
    //store value into local storage
    var time = ("10:15 PM");
    localStorage.setItem("timeselected",time);
    var date = ("20/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("DA");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time3_10(){
    //store value into local storage
    var time = ("10:00 AM");
    localStorage.setItem("timeselected",time);
    var date = ("21/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("IMAX");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time3_12(){
    //store value into local storage
    var time = ("12:00 PM");
    localStorage.setItem("timeselected",time);
    var date = ("21/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("2D");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time3_02(){
    //store value into local storage
    var time = ("2:00 PM");
    localStorage.setItem("timeselected",time);
    var date = ("21/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("DB , DA");
    localStorage.setItem("hallselected",hall);
    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time3_0430(){
    //store value into local storage
    var time = ("4:30 PM");
    localStorage.setItem("timeselected",time);
    var date = ("21/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("DB , DA");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time3_0615(){
    //store value into local storage
    var time = ("6:15 PM");
    localStorage.setItem("timeselected",time);
    var date = ("21/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("4DX");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time3_0945(){
    //store value into local storage
    var time = ("9:45 PM");
    localStorage.setItem("timeselected",time);
    var date = ("21/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("4DX");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time4_11(){
    //store value into local storage
    var time = ("11:00 AM");
    localStorage.setItem("timeselected",time);
    var date = ("22/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("2D");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time4_1230(){
    //store value into local storage
    var time = ("12:30 PM");
    localStorage.setItem("timeselected",time);
    var date = ("22/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("IMAX");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time4_0215(){
    //store value into local storage
    var time = ("2:15 PM");
    localStorage.setItem("timeselected",time);
    var date = ("22/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("DB , DA");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}


function time4_0430(){
    //store value into local storage
    var time = ("4:30 PM");
    localStorage.setItem("timeselected",time);
    var date = ("22/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("DB , DA");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time4_0715(){
    //store value into local storage
    var time = ("7:15 PM");
    localStorage.setItem("timeselected",time);
    var date = ("22/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("IMAX");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time4_0945(){
    //store value into local storage
    var time = ("9:45 PM");
    localStorage.setItem("timeselected",time);
    var date = ("22/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("4DX");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time5_10(){
    //store value into local storage
    var time = ("10:00 AM");
    localStorage.setItem("timeselected",time);
    var date = ("23/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("4DX");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time5_1230(){
    //store value into local storage
    var time = ("12:30 PM");
    localStorage.setItem("timeselected",time);
    var date = ("23/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("DB , DA");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time5_0115(){
    //store value into local storage
    var time = ("1:15 PM");
    localStorage.setItem("timeselected",time);
    var date = ("23/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("IMAX");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time5_0345(){
    //store value into local storage
    var time = ("3:45 PM");
    localStorage.setItem("timeselected",time);
    var date = ("23/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("IMAX");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time5_0515(){
    //store value into local storage
    var time = ("5:15 PM");
    localStorage.setItem("timeselected",time);
    var date = ("23/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("2D");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}

function time5_1045(){
    //store value into local storage
    var time = ("10:45 PM");
    localStorage.setItem("timeselected",time);
    var date = ("23/10/2023");
    localStorage.setItem("dateselected",date);
    var hall = ("4DX");
    localStorage.setItem("hallselected",hall);

    //console.log(typeof time, time);

    location.href = "seatselect.html";
}