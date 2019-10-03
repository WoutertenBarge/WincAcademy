/*
Opdracht

Write a for loop that will iterate from 0 to 20. 
For each iteration, it will check if the current 
number is even or odd, and report that to the screen 
(e.g. "2 is even").
*/

/*While loop

var i = 0;

while (i = 0; i <= 20;) {

    console.log('Your age is less then 10');
    i++;
}

document.write('You are now over 10');
*/

/*for loop
While loop is nu for loop


for (var i = 0; i <= 20; i++) {

    console.log('Your age is less then 10');
    
}

document.write('You are now far over 10');
*/


/*
Waarom nu bij var?
wat betekend i % 2 === 0

*/
for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }
}


