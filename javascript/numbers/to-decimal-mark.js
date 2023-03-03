function toDecimalMark(number) {
  return number.toLocaleString('en-US');
}

const num = 934838218412.238;
console.log(`${num} :`, toDecimalMark(num)); // 934,838,218,412.238

// Reference:
// - https://morioh.com/p/a76bc7d72226
