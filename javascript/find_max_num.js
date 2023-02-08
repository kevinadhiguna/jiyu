function find_max(nums) {
  let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
  for (let num of nums) {
    if (num > max_num) {
      // (Fill in the missing line here)
      max_num = num; // <- Answer
    }
  }
  return max_num;
}

/**
Options :
a) num = max_num
b) max_num += 1
c) max_num = num
d) max_num += num
 */

const numbers = [511, 990, 220, 194];
console.log(`max number in ${numbers} :`, find_max(numbers));

// Source: turing.com
