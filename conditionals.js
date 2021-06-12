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