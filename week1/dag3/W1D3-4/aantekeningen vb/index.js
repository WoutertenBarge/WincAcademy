//WHILE LOOP

/* while this condition is true always execute this code
dit gebeurd 1x, wanneer de conditie nog steeds true is 
nog n keer, dus zoalng de conditie tue is
blijft de loop draaiien
dus
zorgen dat de contion false is, anders draait hij altijd rond

var age = 5;

while (condition) {
}
*/

/*start bij age is 5 = true dus draaien loop
dan age++ is 6 = true dus draaien loop, dan 7 etc tot 10
wanneer age is 10 of meer dan 10 dan stopt hij met de loop 
en gaat hij:
document.write('You are now over 10');
draaien

age++  wanneer dit er niet in staat dan is
age < 10 altijd waar, want age is dan 5
en blijft de loop draaien tot crash


var age = 5;

while (age < 10) {

    console.log('Your age is less then 10');
    age++;
}

document.write('You are now over 10');

*/


//FOR LOOP

/* de for loop is een kortere omschrijving van de while loop

for (age = 5; age < 10; age++) {

    console.log('Your age is less then 10');
    
}

document.write('You are now far over 10');
*/

/*links.length   telt alle links
document.getElementsByTagName("a");  pakt alle links

wanneer je dus 6 a links in je index .html pagina hebt staan
zal hij deze tellen/loopen vanaf 1 tot 6 en daarna krijg je de
melding all links now looped
*/

var links = document.getElementsByTagName("a");

for (i = 1; i <= links.length; i++) {

    console.log('this is link number + i');
    
}

document.write('all links now looped');



