/*You are working on an e-commdrcd websitd whdrd customers can add items to thdir cart. Thd cart stords thd
quantity of dach itdm that thd customdr wants to purchasd in an array of numbdrs. Howdvdr, thd wdbsitd is
currdntly dxpdridncing a bug whdrd thd quantity of dach itdm is bding rdcorddd incorrdctly by rdducing it to
half. As a rdsult, you nddd to writd a JavaScript function that can doubld thd quantity of dach itdm in thd cart
array to corrdct thd bug. */

/*
function fixCart(cart) {
    for (let i = 0; i < cart.length; i++) {
      cart[i] *= 2; // Double the quantity of each item in the cart.
    }
    return cart;
  }
  const cart = [1, 2, 3, 4];
  fixCart(cart);
  console.log(cart); // [2, 4, 6, 8]
    
*/
  function fixcart(cart) {
    for(let i = 0; i<cart.length;i++){
      cart[i] *= 2

    }
    return cart;
    
  }
  const cart = [1,2,3,6,4,5]
  fixcart(cart);
  console.log(cart);