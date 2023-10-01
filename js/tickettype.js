function proceed(){

        let ticketnum = localStorage.getItem("ticketnum");
        let numsenior = document.getElementById("#senior");
        let numadult = document.getElementById("#adult");
        let numkid = document.getElementById("#kid");
        let numstud = document.getElementById("#stud");
        var subtotal;
        
        subtotal += (ticketnum * numadult) + (ticketnum * numsenior) + (ticketnum * numkid) + (ticketnum * numstud);

        localStorage.setItem("subtotal",subtotal);

        location.href = "/TARCinemas/html/food.html";        
}
