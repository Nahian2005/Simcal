var num= new Array();
for(var x=0; x <10 ; x++ ){

  num[x]= parseFloat(prompt("Type a number(Maximum capacity 10 number)"));

}

var sum=0;
var b=0;

for(var x=0; x <10 ; x++ ){

    document.write("<h3> Given Numbers</h3>  " +num[x]+ "<br/>");

    sum=sum+num[x];
    b= b-num[x];
}

document.write("<h2> Sum is= </h2> "+ sum+ "<br/>");
document.write("<h2> Sub is= </h2> "+ b);
