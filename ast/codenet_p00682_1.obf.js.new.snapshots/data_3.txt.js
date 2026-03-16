function __STRING_ARRAY__() {
  var _0x1897f1 = ["3FvoPzC", "length", "200655qWewwf", "push", "shift", "resume", "318994cczAxr", "8SWMLYY", "data", "utf8", "setEncoding", "1155008LlkGqd", "979913rmDVcd", "185vQrIeu", "toFixed", "stdin", "1494uVaabs", "8825817HFsiGt", "72dsKAsf", "abs", "183750TkOtXn", "20960WXMARL"];
  __STRING_ARRAY__ = function () {
    return _0x1897f1;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("3FvoPzC") / 1 * (parseInt("318994cczAxr") / 2) + parseInt("200655qWewwf") / 3 + -parseInt("1155008LlkGqd") / 4 + -parseInt("185vQrIeu") / 5 * (-parseInt("183750TkOtXn") / 6) + parseInt("8825817HFsiGt") / 7 * (parseInt("8SWMLYY") / 8) + parseInt("1494uVaabs") / 9 * (-parseInt("20960WXMARL") / 10) + parseInt("979913rmDVcd") / 11 * (-parseInt("72dsKAsf") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 811164);
process["stdin"]["resume"]();
process["stdin"]["setEncoding"]("utf8");
function __DECODE_0__(tzmZNa, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 110;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tzmZNa, key);
}
process["stdin"].on("data", function (chunk) {
  var input = chunk.trim().split("\n");
  var order = 1;
  while (true) {
    var n = input["shift"]();
    if (n == 0) {
      break;
    }
    var coordinate = [];
    while (n--) {
      coordinate["push"](input["shift"]().split(" ").map(Number));
    }
    coordinate["push"](coordinate[0]);
    var area = 0;
    for (var i = 0; i < coordinate["length"] - 1; i++) {
      area += coordinate[i][0] * coordinate[i + 1][1] - coordinate[i][1] * coordinate[i + 1][0];
    }
    console.log(order + " " + Math["abs"](area / 2)["toFixed"](1));
    input["shift"]();
    order++;
  }
});
