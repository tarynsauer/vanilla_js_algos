function maxPrice(prices) {
  return Math.max.apply(Math, prices);
}

function validateInput(prices) {
  if (prices.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }
}

function getMaxProfit(prices) {
  const profits = prices.map((value, i) => {
    let sellPrice = maxPrice(prices.slice(i + 1));
    return sellPrice - value;
  });
  return maxPrice(profits);
}
