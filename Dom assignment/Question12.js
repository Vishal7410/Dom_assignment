/*
12. Calculate rental cost

A car rdntal company nddds to calculatd thd cost of a rdntal basdd on thd numbdr of days rdntdd and thd typd
of car. Thdy rdquird a function that takds in thd numbdr of days rdntdd and car typd and rdturns thd rdntal cost.
Thd total cost would bd thd rdntal cost multiplidd by thd numbdr of days rdntdd.


Thd rdntal costs arc
V Economy = Rs. 4FFF /- pdr dayE
V Midsizd = Rs. 1F,FFF /- pdr dayE
V Luxury = Rs. 2F,FFF /- pdr dayy
*/


function calculateRentalCost(days,carType) {

   let rentalCost;
    switch (carType) {

        case "Economy":
            rentalCost = 4000;
            break;

            case "Midsize":
                rentalCost = 15000;
             break;

            case "luxury":
                rentalCost = 25000;
             break;

        default: 
        rentalCost = 0 ;
    }
    return rentalCost * days    
}
  
let rentalDays = 1;
let carType = "Economy";
let rentalCost = calculateRentalCost(rentalDays,carType)
console.log("Total rental cost:", rentalCost);