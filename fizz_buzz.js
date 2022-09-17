var output = [];
var count = 1;

// ***********************USING WHILE LOOPS*******************8


function fizzBuzz() {

    while(count <= 100){

    // Conditional statement handling FizzBuzz

    if (count % 3 === 0 && count % 5 === 0){
        output.push("FizzBuzz");
    } else if (count % 3 === 0){
        output.push("Fizz");
    } else if (count % 5 === 0){
        output.push("Buzz");
    } else{
        output.push(count);
    }

    // Increment value
    
    count++;

    }
    console.log(output);
    
}


// ***********************USING FOR LOOPS***********************8

// var output = [];


// function fizzBuzz() {

//     for(var count = 1; count < 101; count++){

//     // Conditional statement handling FizzBuzz

//     if (count % 3 === 0 && count % 5 === 0){
//         output.push("FizzBuzz");
//     } else if (count % 3 === 0){
//         output.push("Fizz");
//     } else if (count % 5 === 0){
//         output.push("Buzz");
//     } else{
//         output.push(count);
//     }
//     }
//     console.log(output);
    
// }
