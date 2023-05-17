const calculateTotalCost = (cart) => {
    let totalCost = 0;
    cart.forEach((item)=>{
        totalCost += item.unitprice * item.quantity;

    });

    return totalCost;
};

const cart = [
   
    {unitprice : 10, quantity: 2},
    {unitprice : 15, quantity: 2},
    {unitprice : 20, quantity: 2},
    
];
const totalCost = calculateTotalCost(cart);
console.log(totalCost);