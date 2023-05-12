const passengerAge = parseInt(prompt("Inserici la tua età"));
const passengerTour = parseInt(prompt("Inserici la distanza da percorrere (in KM)"));

let tourPrice = passengerTour * 0.21;

document.getElementById("tour-price").innerHTML = tourPrice + "€";

if (passengerAge < 18){
    document.getElementById("passenger-age").innerHTML += 'meno di 18 anni' ;
    document.getElementById("tour-discount").innerHTML += '20%' ;
    let finalPrice = tourPrice * 0.8;
    document.getElementById("final-price").innerHTML += finalPrice.toFixed(2) + '€';
} else if (passengerAge >= 65) {
    document.getElementById("passenger-age").innerHTML += 'più di 65 anni' ;
    document.getElementById("tour-discount").innerHTML += '40%';
    let finalPrice = tourPrice * 0.6;
    document.getElementById("final-price").innerHTML += finalPrice.toFixed(2) + '€';
}  else {
    document.getElementById("passenger-age").innerHTML = '';
    document.getElementById("tour-discount").innerHTML = '';
    document.getElementById("final-price").innerHTML = '';
    document.getElementById("tour-price").innerHTML = tourPrice.toFixed(2) + "€";
}




// var decimalCount = numero.toFixed(2);