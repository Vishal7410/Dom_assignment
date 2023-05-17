// Define the customer object with name and balance properties
const customer = {
    name: "John Doe",
    balance: 1000,
  };
  
  // Function to deposit money into the customer's account
  function deposit(amount) {
    // Use the 'this' keyword to refer to the customer object
    this.balance += amount;
    console.log(`Successfully deposited ${amount}. New balance is ${this.balance}.`);
  }
  
  // Function to withdraw money from the customer's account
  function withdraw(amount) {
    // Use the 'this' keyword to refer to the customer object
    if (this.balance < amount) {
      console.log(`Insufficient funds. Current balance is ${this.balance}.`);
    } else {
      this.balance -= amount;
      console.log(`Successfully withdrew ${amount}. New balance is ${this.balance}.`);
    }
  }
  
  // Call the deposit and withdraw functions using the customer object
  deposit.call(customer, 500); // Deposits $500 into the account
  withdraw.call(customer, 200); // Withdraws $200 from the account
  