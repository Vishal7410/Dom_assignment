function calculateBill(dishCosts,numpeople) {
    const totalBill = dishCosts.reduce((acc,cost)=> acc + cost,0);
    const billPerPerson = totalBill/numpeople;
    return {
        totalBill: totalBill,
        billPerPerson : billPerPerson

    };
}

const dishCosts = [10,15,20,40]
const numpeople = 4;

const bill = calculateBill(dishCosts,numpeople)

console.log(bill.totalBill);
console.log(bill.billPerPerson);