
/*
    1.  add a prompt that ask "enter the fahrenhiet"
    50 F is #c 
    It is  ......outside
    2.  compare the number to certain standards
        a. compare input to a value that is cold 
        b. compare input to a value that is warm
        c. compare input to a value that is hot
    3. Alert to show my results based on the comparisons
*/ 
// 69 <= cold; 69 to 83 = warm; 84 >= hot;

// Ask for input 
const name = prompt("What is your name?");

const degFahren = prompt("enter degrees in Fahrenheit");
const degCel = toCelcius(degFahren);

// convert input to celcius
function toCelcius (fahrenhiet) {
    return (5 / 9) * (fahrenhiet - 32);
}

// display message based on temperature in fahrenheit



function fahrenMSG(fahrenhiet) {
    let msg = fahrenhiet + "\xB0 f is " + celcius + "\xB0 c"; 

    if (fahrenhiet <= 69) {
        alert(msg + "\n It's cold outside");
    }
     
    else if ((fahrenhiet > 69) && (fahrenhiet < 83)) {
        alert(msg + "\n It's warm outside");
    }
    
    else {
        alert(msg + "\n It's hot outside");
    }
}


// console.log(msg); 
