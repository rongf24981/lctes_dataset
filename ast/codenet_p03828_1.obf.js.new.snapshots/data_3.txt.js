'use strict';

function __STRING_ARRAY__() {
  const _0x576522 = ["57696wAGmey", "forEach", "751428dQdyjk", "trim", "27ZsrSon", "536448OuCWjL", "52566jKCqwz", "65830FFxScM", "/dev/stdin", "keys", "1577800XDreFP", "1276fVZqNt", "24fllasY", "80wNnwQo", "61014OFfSwV"];
  __STRING_ARRAY__ = function () {
    return _0x576522;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(mCZyYz, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 397;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mCZyYz, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("57696wAGmey") / 1 + -parseInt("751428dQdyjk") / 2 + -parseInt("52566jKCqwz") / 3 * (parseInt("24fllasY") / 4) + -parseInt("80wNnwQo") / 5 * (parseInt("61014OFfSwV") / 6) + parseInt("1577800XDreFP") / 7 + -parseInt("536448OuCWjL") / 8 * (parseInt("27ZsrSon") / 9) + -parseInt("65830FFxScM") / 10 * (-parseInt("1276fVZqNt") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 202006);
const pf = (n, res) => {
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      n /= i;
      if (!(i in res)) {
        res[i] = 0;
      }
      res[i]++;
    }
  }
  return res;
};
function main(input) {
  input = Number(input["trim"]());
  const mod = 1000000007;
  let obj = {};
  let ans = 1;
  for (let i = 1; i <= input; i++) {
    obj = pf(i, obj);
  }
  Object["keys"](obj)["forEach"](n => {
    ans = ans * (obj[n] + 1) % mod;
  });
  console.log(ans);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
