function __DECODE_0__(xtaNwh, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 254;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xtaNwh, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("42337GgewYU") / 1 * (parseInt("2pOFhAr") / 2) + -parseInt("1420626LUkZeM") / 3 + parseInt("5346028jdwQlX") / 4 + parseInt("5858465lViDwE") / 5 + parseInt("866838dhcnYN") / 6 + -parseInt("9828959pkDiLC") / 7 + parseInt("80CnlJhD") / 8 * (parseInt("133119TiNDAk") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 880567);
function __STRING_ARRAY__() {
  var _0x1c15d0 = ["1420626LUkZeM", "2pOFhAr", "end", "9828959pkDiLC", "stdin", "42337GgewYU", "5858465lViDwE", "push", "log", "utf8", "resume", "866838dhcnYN", "5346028jdwQlX", "setEncoding", "split", "133119TiNDAk", "80CnlJhD", "length", "first", "data"];
  __STRING_ARRAY__ = function () {
    return _0x1c15d0;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  var line1 = parseInt(input[0]);
  var ans = false;
  for (var i = 1; i < input["length"]; i++) {
    var n = parseInt(input[i]);
    if (n % 2 === 1) {
      ans = true;
    }
    ;
  }
  console["log"](ans ? "first" : "second");
}
function parse(line) {
  var ret = [];
  var arr = line["split"](" ");
  for (var i = 0; i < arr["length"]; i++) {
    ret["push"](parseInt(arr[i]));
  }
  return ret;
}
var input = "";
process["stdin"]["resume"]();
process["stdin"]["setEncoding"]("utf8");
process["stdin"].on("data", function (chunk) {
  input += chunk;
});
process["stdin"].on("end", function () {
  input = input["split"]("\n");
  main(input);
});
