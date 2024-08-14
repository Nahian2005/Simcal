
for(x=1; x<=5; x++ ){

var num1=parseInt(prompt("Enter First Number (You can put 2 different values 5 times)"));
var num2=parseInt(prompt("Enter Second Number (You can put 2 different values 5 times)"));
var text="<h2>Thanks for using world's most simplest calculator. Here are the results: </h2>"
var text1="<h4> Contact:nahian2005.github.io </h4>"



var sum ,sub ,mul, div;

document.write(text +"<br/>");

sum=num1+num2;

document.write(num1  +  "+"  +  num2  +  "=" + sum + "<br/>");

sub=num1-num2;

document.write(num1  +  "-"  +  num2  +  "=" + sub +"<br/>");

mul=num1*num2;

document.write(num1  +  "×"  +  num2  +  "=" + mul +"<br/>");

div=num1/num2;

document.write(num1  +  "÷"  +  num2  +  "=" + div +"<br/>");

rem=num1%num2;

document.write(num1  +  "%"  +  num2  +  "=" + rem +"<br/>");



}

document.write(text1);
























                                            





