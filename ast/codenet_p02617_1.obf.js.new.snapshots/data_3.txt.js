(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("24LceGWX") / 1 * (-parseInt("5732HnizuR") / 2) + parseInt("2265105xeWvne") / 3 + parseInt("862920xrWEux") / 4 + -parseInt("4123585RQBdDK") / 5 + -parseInt("2780748PRsRkz") / 6 + -parseInt("4738804cRFYRp") / 7 + parseInt("1682216foQdPx") / 8 * (parseInt("63WEtMKU") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 546341);
function __STRING_ARRAY__() {
  const _0x253633 = ["63WEtMKU", "2780748PRsRkz", "1682216foQdPx", "readFileSync", "4738804cRFYRp", "862920xrWEux", "map", "2265105xeWvne", "/dev/stdin", "4123585RQBdDK", "5732HnizuR", "utf8", "24LceGWX"];
  __STRING_ARRAY__ = function () {
    return _0x253633;
  };
  return __STRING_ARRAY__();
}
const [_n, ..._edges] = require("fs")["readFileSync"]("/dev/stdin", "utf8").split(/\n/);
function __DECODE_0__(wbPfGI, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 308;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wbPfGI, key);
}
const n = Number(_n);
let result = n * (n + 1) * (n + 2) / 6;
for (const _edge of _edges) {
  let [u, v] = _edge.split(/\s/)["map"](Number);
  if (u > v) {
    [u, v] = [v, u];
  }
  result -= u * (n - v + 1);
}
console.log(result);
