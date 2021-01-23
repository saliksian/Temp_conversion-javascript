const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function Temp_Change(temp1){
    let fahrenheit = (temp1 * 9/5) + 32 ;
    return fahrenheit;
}

rl.question("Enter Temperature in celsius:  ", function(celsius) {
var fahrenheit = Temp_Change(celsius);
console.log("Temperature in fahrenheit: " + fahrenheit);
        rl.close();
});


