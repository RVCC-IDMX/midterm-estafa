document.getElementById("des1").onclick = function() {myFunction1()}; // on click of the button it will run myFunction1
document.getElementById("des2").onclick = function() {myFunction2()}; // on click of the button it will run myFunction2
document.getElementById("des3").onclick = function() {myFunction3()}; // on click of the button it will run myFunction3

function myFunction1() {
    document.getElementById("inner1").classList.toggle("anotherClass");  
    document.getElementById("pro1").classList.toggle("anotherClass2"); 
}

function myFunction2() {
    document.getElementById("inner2").classList.toggle("anotherClass"); 
    document.getElementById("pro2").classList.toggle("anotherClass2"); 
}

function myFunction3() {
    document.getElementById("inner3").classList.toggle("anotherClass"); 
    document.getElementById("pro3").classList.toggle("anotherClass2"); 
}
