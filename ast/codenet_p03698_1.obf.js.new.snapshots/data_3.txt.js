function __STRING_ARRAY__() {
  var _0x5c1f0d = ["split", "13TAIyWq", "5290NHnNsS", "33513gzxyDw", "/dev/stdin", "5886BMdQGv", "indexOf", "readFileSync", "log", "24189yJvaWC", "7305468ctMSNV", "38xlTkWU", "699408KqqPoI", "2579344NsTTIZ", "utf8", "4835Pmlnpa", "1444804wVgHHT", "3MKKpiD", "length", "7DsToQl"];
  __STRING_ARRAY__ = function () {
    return _0x5c1f0d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("33513gzxyDw") / 1 * (parseInt("38xlTkWU") / 2) + parseInt("3MKKpiD") / 3 * (-parseInt("1444804wVgHHT") / 4) + parseInt("4835Pmlnpa") / 5 * (parseInt("5886BMdQGv") / 6) + parseInt("7DsToQl") / 7 * (parseInt("2579344NsTTIZ") / 8) + -parseInt("699408KqqPoI") / 9 + -parseInt("5290NHnNsS") / 10 * (-parseInt("24189yJvaWC") / 11) + -parseInt("7305468ctMSNV") / 12 * (parseInt("13TAIyWq") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 749867);
function main(data) {
  input = data["split"]("");
  len = input["length"];
  temp = [];
  for (i = 0; i < len; i += 1) {
    if (temp["indexOf"](input[i]) === -1) {
      temp.push(input[i]);
    } else {
      console["log"]("no");
      return;
    }
  }
  console.log("yes");
}
function __DECODE_0__(WHpFUB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 364;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WHpFUB, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
