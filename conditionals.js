const raining= true;
//const cold= false;

/*
if(raining){
    console.log("Don't forget your umbrella!");
}

if(cold){
    console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!"); 

if(cold){
    console.log("make sure to pick out a scarf!");
} else { console.log("Short sleeves are fine.")
}
*/

const temperature= -1;
/*
if(temperature<0){
    console.log("make sure you wear a scarf.");
} else if (temperature < 15){
    console.log("short sleeves won't do.");
} else { console.log("short sleeves are okay.");
}
console.log("Now you are ready to go outside.");
*/
//LOGICAL OPERATORS
/*
const isCitizen= true;
const age= 26;
if( isCitizen && age > 18){
    console.log("you can vote");
}

if( temperature < -40 || temperature > 40){
    console.log("maybe going outside isn't such a great idea");
}

if( !raining){
    console.log("don't bring umbrella");
}
CONDITIONALS CHALLENGE-WHICHFUNCTION
/*
let age= 15
if( age < 13){
    whichSchool= "Elementary School"
    console.log("you should go to "+ whichSchool)
} else if( age >= 13 || age <19){
    whichSchool= "Secondary School"
    console.log( "you should go to "+ whichSchool)
} else { 
    whichschool= "Lighthouse Labs"
    console.log( "You should go to "+ whichSchool)
}
*/
/*LOOPING CHALLENGE
let num= 100
while(num= 200){
num= num +1
} */

for (var x = 0; x < 5; x = x + 1) {
    for (var y = 0; y < 3; y = y + 1) {
      console.log(x + "," + y);
    }
  }