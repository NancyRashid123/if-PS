//  1- Check if a given number is less than or equal to 100
// If number is less than or equal to 100
// Console.log number is less than or equal to 100
// Else number is greater than 100

var num = +prompt("enter num");
if(num<= 100){
    console.log ("number is less than or equal to 100");
}
else{
    console.log("number is greater than 100");
    
}

// 2- Check the number of characters in text
//  If number of characters greater than 100 
//  Console log the string is long 
//  Else console log string is short




var x = prompt("Enter x");
if (x.length >= 10) {
    console.log("the string is long");   
}else{
    console.log("string is short");
    
}

// 3- Password validation 
// If password equal confirm password 
// Password is validation else no valied 

let pass = prompt("enter pass");
let confirmPassword = prompt("enter confirmPassword");

if( pass === confirmPassword)
{
    console.log("validation");
    
}else{
    console.log("no valied");
    
}

// 4- Check the day of the week if saterday 
//  It's weekend else work day 

let day=  prompt("enter day");
if (day === 'saterday') {
    console.log("weekend");
    
}else{
    console.log("work day");
    
}

// 5- Check number positive or negative

let number = prompt("enter number")
if(number > 0){
    console.log("positive");
    
}else{
    console.log("negative");
    
}

// Verifying academic grade less than 50 F
//  Greater 60 it's D 70 C 80 B greater than it A

let result=  +prompt("enter result");
if(result >= 90){
    console.log("A");
    
}else if(result >= 80){
    console.log("B");
    
}else if(result >= 70){
    console.log("C");
    
}else if(result >= 60){
    console.log("D");
    
}else{
    console.log("F");
    
}

// 7- Check temperature temp greater than 30 it's hot 
// else it's cold

let temp = prompt("enter temp");
if(temp>=30){
    console.log("it's hot");
    
}else{
    console.log("it's cold");
    
}

// 8- Checking an odd or even number

let num1 = +prompt("enter num1");
if(num1 % 2 == 0){
    console.log("even");
    
}else{
    console.log("odd");
    
}

// 9- Checking an odd or even number if greater than 20 
// console log You can enter the university
// Else You can't enter


let num2 = +prompt("enter num2");
if(num2 >=20) {
    if(num2 % 2 == 0){
        console.log("even,You can enter the university");
    }else{
        console.log("odd,You can enter the university");
        
    }
}else
{
    console.log(" You can't enter");
    
}