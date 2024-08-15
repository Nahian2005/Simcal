
var num1=parseFloat(prompt("enter 1st number"));
var num2=parseFloat(prompt("enter 2nd number"));
var num3=parseFloat(prompt("enter 3rd number"));
var num4=parseFloat(prompt("enter 4th number"));
var num5=parseFloat(prompt("enter 5th number"));
var num6=parseFloat(prompt("enter 6th number"));

function add(num1, num2, num3, num4, num5, num6){

    var sum= num1+num2+num3+num4+num5+num6;

    
    document.write("<h2>Addition:</h2>  "+ num1  +  "+"  +  num2 + "+" + num3  +  "+"  +  num4 + "+" + num5  +  "+"  +  num6  + "="+ sum+ "<br/>");



}
add(num1, num2,num3, num4, num5, num6);

function sub(num1, num2 , num3, num4, num5, num6){

    var sub= num1-num2-num3-num4-num5-num6;

    
    document.write("<h2>Subtraction:</h2>  "+ num1  +  "-"  +  num2 + "-" + num3  +  "-"  +  num4 + "-" + num5  +  "-"  +  num6  + "="+  sub+ "<br/>");

    

}

sub(num1, num2 , num3, num4, num5, num6);


function mul(num1, num2 , num3, num4, num5, num6){

    var mul= num1*num2*num3*num4*num5*num6;

    
    document.write("<h2>Multiplication:</h2>  "+ num1  +  "×"  +  num2 + "×" + num3  +  "×"  +  num4 + "×" + num5  +  "×"  +  num6  + "="+  mul+ "<br/>");

    

}
mul(num1, num2 , num3, num4, num5, num6);

function div(num1, num2 , num3, num4, num5, num6){

    var div= num1/num2/num3/num4/num5/num6;

    
    document.write("<h2>Division: </h2>  "+ num1  +  "÷"  +  num2 + "÷" + num3  +  "÷"  +  num4 + "÷" + num5  +  "÷"  +  num6  + "="+  div+ "<br/>");

    

}
div(num1, num2 , num3, num4, num5, num6);
















