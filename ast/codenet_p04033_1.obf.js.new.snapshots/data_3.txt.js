(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("10PgVtuN") / 1 * (-parseInt("106346RcRRKV") / 2) + parseInt("1815249sQbEWe") / 3 + -parseInt("2309172jYRhlS") / 4 + parseInt("5276795PlLeuH") / 5 + parseInt("7885740mGsyYU") / 6 + -parseInt("847Zisydk") / 7 * (-parseInt("58216cvtYPs") / 8) + -parseInt("79641dDNUBs") / 9 * (parseInt("2180jGTxOE") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 817144);
const main = input => {
  const data = input.split(/\n|\s/)["map"](a => parseInt(a, 10));
  const a = data[0];
  const b = data[1];
  if (a <= 0 && b >= 0) {
    return "Zero";
  }
  if ((b - a) % 2 || a > 0) {
    return "Positive";
  } else {
    return "Negative";
  }
};
function __DECODE_0__(pguUUM, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 362;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pguUUM, key);
}
console["log"](main(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
function __STRING_ARRAY__() {
  const _0x4ea703 = ["2309172jYRhlS", "utf8", "5276795PlLeuH", "106346RcRRKV", "2180jGTxOE", "79641dDNUBs", "1815249sQbEWe", "7885740mGsyYU", "Positive", "Negative", "Zero", "847Zisydk", "10PgVtuN", "58216cvtYPs", "log", "readFileSync", "/dev/stdin", "map"];
  __STRING_ARRAY__ = function () {
    return _0x4ea703;
  };
  return __STRING_ARRAY__();
}
