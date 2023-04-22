function getBestPrice(priceArr) {
  if (priceArr) {
    return Math.min(...priceArr);
  }
}

const prices = [376.41, 19.87, 21.33, 100.11, 23.12, 56.12];
console.log(`Best price out of ${prices} is ${getBestPrice(prices)}`);
