// This program gives and output of a Random person's name according to the list given by the user

function whoisPaying(names) {

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is gonna buy food!";
}

whoisPaying("John", "Sarah");