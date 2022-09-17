// code generating random numbers 

var n = Math.random();

n = n * 6   // This prints random numbers from 0 to 5.9
n = Math.floor(n); // This prints random whole numbers from 0 to 5
n = Math.floor(n) +1; // This prints random whole numbers from 0 to 6

console.log(n);

// The love calculator simulator

prompt("What is your name?");
prompt("What is there name?");

// Initial var for lovescore

var loveScore = Math.random();
loveScore = loveScore * 100;
loveScore = Math.floor(loveScore) +1;

// Conditions

if (loveScore > 70) {
    alert("Your lovescore is " + loveScore + "%" + "You love" );
} else{
    alert("Your lovescore is " + loveScore + "%");
}


alert("Your lovescore is " + loveScore + "%");