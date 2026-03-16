function __STRING_ARRAY__() {
  const _0x776de1 = ["set", "96JytTls", "map", "sort", "38oRaJyK", "readFileSync", "length", "274041eJbUgo", "slice", "6634744GgaGRd", "240ILKpeE", "join", "3800636QjoNgw", "102876GHVRnj", "get", "140kfYQIH", "29147767sRnxpr", "utf8", "13644XwVYrP", "has", "31763SGgFVf", "/dev/stdin", "from"];
  __STRING_ARRAY__ = function () {
    return _0x776de1;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(lKDsXQ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 442;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lKDsXQ, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("31763SGgFVf") / 1 * (-parseInt("38oRaJyK") / 2) + parseInt("102876GHVRnj") / 3 * (parseInt("96JytTls") / 4) + -parseInt("240ILKpeE") / 5 * (parseInt("13644XwVYrP") / 6) + parseInt("3800636QjoNgw") / 7 + parseInt("6634744GgaGRd") / 8 + parseInt("274041eJbUgo") / 9 * (parseInt("140kfYQIH") / 10) + -parseInt("29147767sRnxpr") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 466133);
function main(input) {
  const list = input.split("\n")["slice"](1)["map"](s => Array["from"](s)["sort"]()["join"](""));
  let totalCount = 0;
  const map = new Map();
  for (let i = 0; i < list["length"]; i++) {
    if (!map["has"](list[i])) {
      map["set"](list[i], 1);
      continue;
    }
    totalCount += map.get(list[i]);
    map.set(list[i], map["get"](list[i]) + 1);
  }
  console.log(totalCount);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
