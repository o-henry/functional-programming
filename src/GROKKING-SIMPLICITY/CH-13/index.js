function biggestPurchasesBestCustomers(customers) {
  let bestCustomers = selectBestCustomers(customers);
  let biggestPurchase = getBiggestPurchases(bestCustomers);
  return biggestPurchase;
}

function selectBestCustomers(customers) {
  filter(customers, function (customer) {
    return customer.purchases.length >= 3;
  });
}

function getBiggestPurchases(customers) {
  return map(customers, getBiggestPurchase);
}

function getBiggestPurchase(customer) {
  return maxKey(customer.purchases, { total: 0 }, function (purchase) {
    return purchase.total;
  });
}

function filter(array, f) {
  var newArray = [];
  forEach(array, function (element) {
    if (f(element)) newArray.push(element);
  });
  return newArray;
}

function map(array, f) {
  var newArray = [];
  forEach(array, function (element) {
    newArray.push(f(element));
  });
  return newArray;
}

function reduce(array, init, f) {
  var accum = init;
  forEach(array, function (element) {
    accum = f(accum, element);
  });
  return accum;
}

function maxKey(array, init, f) {
  return reduce(array, init, function (biggestSoFar, element) {
    if (f(biggestSoFar) > f(element)) return biggestSoFar;
    else return element;
  });
}
