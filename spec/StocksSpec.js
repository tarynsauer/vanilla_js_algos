describe("Stocks", function() {
 it("returns max profit", function() {
   const stockPricesYesterday = [10, 7, 5, 8, 11, 9];
   const result = getMaxProfit(stockPricesYesterday);
   expect(result).toEqual(6);
  });
});
