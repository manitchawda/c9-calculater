var n1,n2;
var b1,b2,b3,b4;
var input1;
var input2;
function setup() {
  
  createCanvas(400, 400);

input1=createInput("Enter Number 1")

input1.position(5,60);
  input2=createInput("enter number 2")
 input2.position(5,100)

 b1=createButton("ADD");
 b1.position(5,130);

 b1.mousePressed(add)
b2=createButton("substract")
b2.position(60,130)
b2.mousePressed(sub)


}

function draw() {

  background("cyan");

  

}

function add()

{
n1=parseInt(input1.value());
n2=parseInt(input2.value());
var ans=n1+n2;
console.log("your addition is " +ans);
alert("your addition is " +ans)


}

function sub(){

  n1=parseInt(input1.value());
  n2=parseInt(input2.value());
  var ans=n1-n2;
  console.log("your substraction is " +ans);

  alert("your substraction is " +ans)
  
  


}





