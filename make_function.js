function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('date_time').innerHTML =h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}       
function checkTime(i) {
     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
} 

//Bar
     //Slide 
var myIndex = 0;
carousel();
    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
             x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
// End Slide 
