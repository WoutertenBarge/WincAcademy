var age = 18


if (age == 18){

    document.write("U mag naar binnen");
}

else if (age > 18){

    document.write("U mag naar binnen");
}

else if (age < 18){

    document.write("U mag NIET naar binnen");
}

//code werkt

var isFemale = true

if (isFemale) {

    document.write(" Koop ticket");
}

var driverStatusBob = true

if (driverStatusBob) {

    document.write(" U mag met de auto rijden");
}

var age = 20

if (age >=18 && age <=25) {

    document.write(" Je krijgt 50% korting!");
}

else {
    document.write(" Je krijgt iets anders");
}


/*
var name = Sara || Bram

if (name = "Sara || Bram") {

    document.write("Je krijgt een gratis biertje!");
}
*/

// deze werkt niet wanneer ik een andere naam invul
var name = "Sara || Bram"

if (name = "Sara || Bram") {

    document.write("Je krijgt een gratis biertje!");
}


var totalAmount = 102


if (totalAmount > 25 && totalAmount <=50){

    document.write(" Gratis Bitterballen");
}

else if (totalAmount > 50 && totalAmount <=100){

    document.write(" Gratis Nacho's");
}

else if (totalAmount > 100){

    document.write(" Gratis Champagne");
}

