function buyticket(){
    location.href = "../../html/upcoming_buyticket.html";
}

function disp(){
    document.getElementById("Show").style.display='none'; 
    document.getElementById("Hide").style.display='block'; 
    document.getElementById("movietrailer").style.display='block';
    document.getElementById("movieinfo").style.display='none';
    document.getElementById("buyticket").style.display='none';
    document.getElementById("movieposter").style.display='none';
}

function hide(){
    document.getElementById("Show").style.display='block'; 
    document.getElementById("Hide").style.display='none'; 
    document.getElementById("movietrailer").style.display='none';
    document.getElementById("movieinfo").style.display='block';
    document.getElementById("buyticket").style.display='inline';
    document.getElementById("movieposter").style.display='block';
}

function stop(element){
    // getting every iframe from the body
    var iframes = element.querySelectorAll('iframe');
    // reinitializing the values of the src attribute of every iframe to stop the YouTube video.
    for (let i = 0; i < iframes.length; i++) {
       if (iframes[i] !== null) {
          var temp = iframes[i].src;
          iframes[i].src = temp;
       }
    }
}