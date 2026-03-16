function __DECODE_0__(wdZkfA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 107;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wdZkfA, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1262894neODmM") / 1 + -parseInt("816850MTMbbC") / 2 + parseInt("1971669HPHWSY") / 3 + parseInt("4969356SAGSEY") / 4 + parseInt("3838085DBzzYi") / 5 + -parseInt("168VIneLH") / 6 * (-parseInt("13153rlNOXR") / 7) + -parseInt("2530896AFaITD") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 732110);
function __STRING_ARRAY__() {
  var _0x471724 = ["168VIneLH", "13153rlNOXR", "utf8", "log", "readFileSync", "2530896AFaITD", "1971669HPHWSY", "3838085DBzzYi", "4969356SAGSEY", "/dev/stdin", "split", "816850MTMbbC", "1262894neODmM"];
  __STRING_ARRAY__ = function () {
    return _0x471724;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input["split"]("\n");
  var T = input[0]["split"](" ");
  var A = input[1]["split"](" ");
  var B = input[2].split(" ");
  for (var i = 0; i < 2; i++) {
    T[i] = Number(T[i]);
    A[i] = Number(A[i]);
    B[i] = Number(B[i]);
  }
  var sa = new Array(2);
  sa[0] = T[0] * A[0] - T[0] * B[0];
  sa[1] = T[1] * A[1] - T[1] * B[1];
  var x = 0;
  var xmae = 1;
  var pm = 0;
  var count = -1;
  if (sa[0] == sa[1] * -1) {
    console["log"]("infinity");
  } else {
    for (var i = 0; i < 1; i) {
      count++;
      xmae = x;
      x += sa[count % 2];
      if (x * xmae > 0) {
        i = 1;
      } else if (x == 0) {
        i = 1;
        count++;
      }
    }
    console.log(count - 1);
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
