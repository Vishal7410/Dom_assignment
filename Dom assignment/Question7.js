let cart = ['Item A','Item B','Item A','Item C','Item D','Item C'];

let uniqueCart = [];

//loop through each item in the original cart 

for(let i=0; i<cart.length;i++)
{
    if(!uniqueCart.includes(cart[i])){

        uniqueCart.push(cart[i]);

    }
}

console.log(uniqueCart);