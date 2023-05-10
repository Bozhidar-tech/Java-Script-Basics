/*
//Task 1

function grade(input){
    let grade = Number(input[0]);
    if(grade >= 5.50){
        console.log("Excellent!");
    }
}
grade(["6"]);

--------------------------------------------------

//Task 2

function numbers(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    if(a > b){
        console.log(a);
    }else{
        console.log(b);
    }
}
numbers(["-5", "5"]);

---------------------------------------------------

//Task 3

function oddOrEven(input){
    let number = Number(input[0]);
    if(number % 2 == 0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
oddOrEven(["2"]);

----------------------------------------------------

//Task 4

function password(input) {
  let password = input[0];
  if (password === "s3cr3t!P@ssw0rd") {
    console.log("Welcome!");
  } else {
    console.log("Wrong password!");
  }
}
password(["qwerty"]);

-----------------------------------------------------

//Task 5

function hundredToTwoHundred(input) {
  let number = Number(input[0]);
  if (number < 100) {
    console.log("Less than 100");
  } else if (number > 100 && number < 200) {
    console.log("Between 100 and 200");
  } else if (number > 200) {
    console.log("Greater than 200");
  }
}
hundredToTwoHundred(["1195"]);

-------------------------------------------------------

//Task 6

function speed(input){

let currentSpeed = Number(input[0]);
if(currentSpeed <= 10){
    console.log("slow");
}else if(currentSpeed > 10 && currentSpeed <= 50){
    console.log("average");
}else if(currentSpeed > 50 && currentSpeed <= 150){
    console.log("fast");
}else if(currentSpeed > 150 && currentSpeed <= 1000){
    console.log("ultra fast");
}else{
    console.log("extremely fast");
}

}
speed(["1000"])

------------------------------------------------------------------

//Task 7

function figures(input){

let shape = input[0];
if(shape === "square"){
    let sideSquare = Number(input[1]);
    let formulaSquare = sideSquare * sideSquare;
    console.log(formulaSquare.toFixed(3));
}if(shape === "rectangle"){
    let sideRectangle = Number(input[1]);
    let sideTwoRectangle = Number(input[2]);
    let formulaRectangle = sideRectangle * sideTwoRectangle;
    console.log(formulaRectangle.toFixed(3));
}if(shape === "circle"){
    let radius = Number(input[1]);
    let formulaCircle = Math.PI * (radius * radius)
    console.log(formulaCircle.toFixed(3));
}if(shape === "triangle"){
    let sideTriangle = Number(input[1]);
    let heightTriangle = Number(input[2]);
    let formulaTriangle = (sideTriangle * heightTriangle) / 2
    console.log(formulaTriangle.toFixed(3));
}

}
figures(["square", "5"])

*/