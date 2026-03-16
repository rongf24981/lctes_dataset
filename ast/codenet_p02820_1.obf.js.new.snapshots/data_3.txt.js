(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1QdNELv") / 1 * (-parseInt("1685628mVVwci") / 2) + -parseInt("2320221yPDpTI") / 3 * (-parseInt("4ihMPVT") / 4) + parseInt("5feUWMD") / 5 * (parseInt("2274780IPckpn") / 6) + -parseInt("165095VrzlMk") / 7 + parseInt("6887272SAPSKu") / 8 + -parseInt("189uekyJA") / 9 * (-parseInt("353230inISCo") / 10) + -parseInt("15261092jEwzkw") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 501458);
function __DECODE_0__(QRmxcd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 444;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QRmxcd, key);
}
function Main(input) {
  input = input["split"]("\n");
  var tmp0 = input[0]["split"](" ");
  var N = tmp0[0] - 0;
  var K = tmp0[1] - 0;
  var tmp1 = input[1]["split"](" ");
  var point = {
    r: tmp1[2] - 0,
    s: tmp1[0] - 0,
    p: tmp1[1] - 0
  };
  var str = input[2];
  var sum = 0;
  for (var i = 0; i < N; i++) {
    var char = str[i];
    var charBK = "";
    if (i - K >= 0) {
      charBK = str[i - K];
    }
    if (char == charBK) {
      str = str.slice(0, i) + "B" + str.slice(i + 1);
      continue;
    }
    sum += point[char];
  }
  console.log(sum);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x48416a = ["189uekyJA", "2320221yPDpTI", "4ihMPVT", "5feUWMD", "1QdNELv", "1685628mVVwci", "/dev/stdin", "split", "353230inISCo", "165095VrzlMk", "6887272SAPSKu", "readFileSync", "15261092jEwzkw", "2274780IPckpn"];
  __STRING_ARRAY__ = function () {
    return _0x48416a;
  };
  return __STRING_ARRAY__();
}
