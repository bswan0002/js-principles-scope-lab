var customerName = "bob";
const leastFavoriteCustomer = "someVal";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = "not bob";
  return;
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "what's up";
}
