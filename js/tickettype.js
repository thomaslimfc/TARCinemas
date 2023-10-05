//get value from local storage
const movie = localStorage.getItem("movieselected");
document.getElementById("movie").innerHTML = movie;

const hall = localStorage.getItem("hallselected");
document.getElementById("hall").innerHTML = hall;

const date = localStorage.getItem("dateselected");
document.getElementById("date").innerHTML = date;

const time = localStorage.getItem("timeselected");
document.getElementById("time").innerHTML = time;

const seat = localStorage.getItem("seatselected");
const seatamt = JSON.parse(seat);

let numkid = document.querySelector("#kid");
let numadult = document.querySelector("#adult");
let numstud = document.querySelector("#student");
let numsenior = document.querySelector("#senior");

const button1 = document.getElementById("cart");
button1.disabled=true;

var valkid = 0;
var valadult = 0;
var valstud = 0;
var valsenior = 0;

var ticketamt = 0;
var subtotal = 0;
//check number changes of spinner
numkid.addEventListener("input", function (){
        valkid = parseFloat(numkid.value);
        document.getElementById("kidprice").innerHTML = 10 * valkid;
        //pass in value kid
        //into compare function
        localStorage.setItem("valkid",valkid);
        calculate();
});
numadult.addEventListener("input", function (){
        valadult = parseFloat(numadult.value);
        document.getElementById("adultprice").innerHTML = 18 * valadult;
        localStorage.setItem("valadult",valadult);
        calculate();
});
numstud.addEventListener("input", function (){
        valstud = parseFloat(numstud.value);
        document.getElementById("studprice").innerHTML = 12 * valstud;
        localStorage.setItem("valstud",valstud);
        calculate();
});
numsenior.addEventListener("input", function (){
        valsenior = parseFloat(numsenior.value);
        document.getElementById("seniorprice").innerHTML = 10 * valsenior;
        localStorage.setItem("valsenior",valsenior);
        calculate();
});

//pass out the value for compare
//check is it ticketamt > seatamt
//only if < then can add 
//if = then only can enable button
function calculate(){

        var valkid1 = localStorage.getItem("valkid");
        var valadult1 = localStorage.getItem("valadult");
        var valstud1 = localStorage.getItem("valstud");
        var valsenior1 = localStorage.getItem("valsenior");
        valkid = JSON.parse(valkid1);
        valadult = JSON.parse(valadult1);
        valstud = JSON.parse(valstud1);
        valsenior = JSON.parse(valsenior1);

        //console.log(typeof valkid, valkid);
        //console.log(typeof valadult, valadult);
        //console.log(typeof valstud, valstud);
        //console.log(typeof valsenior, valsenior);

        ticketamt = valkid+valadult+valstud+valsenior;
        //console.log(typeof ticketamt, ticketamt);

        if(ticketamt == seatamt){
                button1.disabled=false;
        }
        else{
                button1.disabled=true;
        }

        subtotal += ((valkid*10) + (valadult*18) + (valstud*12) + (valsenior*10));
        localStorage.setItem("subtotal",subtotal);

        
}


function proceed(){
        //to reset
        calculate();
        
        //var subtotal = localStorage.getItem("subtotal");
        //console.log(typeof subtotal, subtotal);
        location.href = "../html/food.html";        
}
