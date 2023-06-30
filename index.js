// Write your solution in this file!
window.customerName = 'bob';

function getCustomerName() {
  return customerName;
}
// Converting customerName to upper case
function upperCaseCustomerName() {
    window.customerName = window.customerName.toUpperCase();
  }
  //Setting the best customer
  function setBestCustomer() {
    window.bestCustomer = 'not bob';
  }
  
  //Overwriting the best customer
  function overwriteBestCustomer(customer) {
    window.bestCustomer = customer;
  }
  //Changing the leastFavoriteCustomer
  function changeLeastFavoriteCustomer() {
    throw new Error('Assignment to constant variable.');
  }
  