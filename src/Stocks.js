function getProfits(buyPrice, sellPrices) {
  return sellPrices.map(sellPrice => sellPrice - buyPrice);
}

function getMaxProfit(prices) {
  let profits = [];
  prices.forEach((value, i) => {
    let sellPrices = prices.slice(i + 1);
    if (sellPrices.length > 0) {
      profits = profits.concat(getProfits(value, sellPrices));
    }
  });
  return Math.max.apply(Math, profits);
}
