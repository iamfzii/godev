var btn1 = document.getElementById("btn-1")
var btn2 = document.getElementById("btn-2")
var btn3 = document.getElementById("btn-3")
var btn4 = document.getElementById("btn-4")
var btn5 = document.getElementById("btn-5")
var btn6 = document.getElementById("btn-6")
var btn7 = document.getElementById("btn-7")
var btn8 = document.getElementById("btn-8")
var btn9 = document.getElementById("btn-9")
var btn0 = document.getElementById("btn-0")
var btn00 = document.getElementById("btn-00")

var ac = document.getElementById("AC")
var add = document.getElementById("add")
var subtract = document.getElementById("subtract")
var multiply = document.getElementById("multiply")
var divide = document.getElementById("division")
var equal = document.getElementById("equal")
var decimal = document.getElementById("decimal")
var back = document.getElementById("back")

btn1.addEventListener("click", function(){
    document.getElementById("display").value +="1";

})

btn2.addEventListener("click", function(){
    document.getElementById("display").value +="2";

})

btn3.addEventListener("click", function(){
    document.getElementById("display").value +="3";

})

btn4.addEventListener("click", function(){
    document.getElementById("display").value +="4";

})

btn5.addEventListener("click", function(){
    document.getElementById("display").value +="5";

})

btn6.addEventListener("click", function(){
    document.getElementById("display").value +="6";

})

btn7.addEventListener("click", function(){
    document.getElementById("display").value +="7";

})

btn8.addEventListener("click", function(){
    document.getElementById("display").value +="8";

})

btn9.addEventListener("click", function(){
    document.getElementById("display").value +="9";

})

btn0.addEventListener("click", function(){
    document.getElementById("display").value +="0";

})

btn00.addEventListener("click", function(){
    document.getElementById("display").value +="00";

})

add.addEventListener("click", function(){
    document.getElementById("display").value +="+";

})
 
subtract.addEventListener("click", function(){
    document.getElementById("display").value +="-";

})

multiply.addEventListener("click", function(){
    document.getElementById("display").value +="*";

})

divide.addEventListener("click", function(){
    document.getElementById("display").value +="/";

})

back.addEventListener("click", function(){
    var str = document.getElementById("display").value;
    var back = str.substr(0, str.length -1);
    document.getElementById("display").value = back;

})

decimal.addEventListener("click", function(){
    document.getElementById("display").value +=".";

})

ac.addEventListener("click", function(){
    document.getElementById("display").value = "";

})

equal.addEventListener("click", function(){
    var equation = document.getElementById("display").value;
    var result = eval(equation)
    document.getElementById("display").value = result;

})