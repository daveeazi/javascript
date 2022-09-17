// Using Arrays

// Code stores a list of names and when prompted returns a boolean of either name is present in the list or not

var names = ["Boy", "Girl", "Sandra", "woman", "woman"];

var listOfNames = prompt("What is your name? ");

// NOTE - The (.includes) is an inbuilt js method which iterates an array containing a specific data

// Conditionals

if (names.includes(listOfNames)) {
 alert("Welcome");
} 
else {
    alert("Sorry your name no dey here!!")
}