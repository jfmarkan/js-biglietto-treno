const passengerAge = parseInt(prompt("Inserici la tua età"));
const passengerTour = parseInt(prompt("Inserici la distanza da percorrere (in KM)"));

let tourPrice = passengerTour * 0.21;

if (passengerAge < 18){
    console.log(tourPrice * 0.8);
} else if (passengerAge >= 65) {
    console.log(tourPrice * 0.6);
}  else {
    console.log(tourPrice);
}




// var decimalCount = numero.toFixed(2);