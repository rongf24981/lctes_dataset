(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("527055PskubM") / 1 + -parseInt("813720SXppyM") / 2 + parseInt("6PeAWVH") / 3 * (parseInt("448588eWrjgK") / 4) + -parseInt("7375755PdxadF") / 5 + parseInt("266454rHbefY") / 6 * (parseInt("133QfMkhK") / 7) + -parseInt("15064yXYNsF") / 8 * (parseInt("324Bfrprk") / 9) + parseInt("10ROMsjd") / 10 * (parseInt("25947911PztvSt") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 950112);
function __DECODE_0__(wfhlql, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 495;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wfhlql, key);
}
function Main(input) {
  input = input["split"]("\n");
  var n = Number(input[0]);
  var d = Number(input[1].split(" ")[0]);
  var x = Number(input[1]["split"](" ")[1]);
  var array = [];
  for (var i = 0; i < input.length - 2; i++) {
    array["push"](Number(input[i + 2]));
  }
  var total = [];
  for (var j = 0; j < array["length"]; j++) {
    for (var k = 1; k < 100; k++) {
      if (d >= k * array[j] + 1) {
        total["push"](k * array[j] + 1);
      }
    }
  }
  console.log(total["length"] + n + x);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x249cef = ["448588eWrjgK", "527055PskubM", "6PeAWVH", "push", "813720SXppyM", "133QfMkhK", "10ROMsjd", "length", "split", "7375755PdxadF", "15064yXYNsF", "266454rHbefY", "324Bfrprk", "25947911PztvSt"];
  __STRING_ARRAY__ = function () {
    return _0x249cef;
  };
  return __STRING_ARRAY__();
}
