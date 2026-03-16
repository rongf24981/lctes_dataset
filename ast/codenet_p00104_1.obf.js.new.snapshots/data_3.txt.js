(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("609HzDiyz") / 1 * (parseInt("538oqJFyE") / 2) + parseInt("137868azMROA") / 3 + -parseInt("2372VvTVRP") / 4 * (parseInt("2195xdpbBO") / 5) + parseInt("2112570ZQCUip") / 6 + -parseInt("1547dsWHVb") / 7 * (parseInt("9544LgAhsC") / 8) + parseInt("450315ozCBTe") / 9 * (-parseInt("30WJpWNZ") / 10) + parseInt("3204905xRAaDj") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 179142);
process["stdin"]["resume"]();
function __STRING_ARRAY__() {
  var _0xd76c71 = ["3204905xRAaDj", "609HzDiyz", "9544LgAhsC", "2195xdpbBO", "137868azMROA", "split", "LOOP", "data", "utf8", "450315ozCBTe", "resume", "1547dsWHVb", "log", "trim", "30WJpWNZ", "stdin", "2112570ZQCUip", "2372VvTVRP", "538oqJFyE", "setEncoding"];
  __STRING_ARRAY__ = function () {
    return _0xd76c71;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(QveLCt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 394;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QveLCt, key);
}
process.stdin["setEncoding"]("utf8");
process["stdin"].on("data", function (chunk) {
  main(chunk["trim"]());
});
function main(chunk) {
  var lines = chunk["split"]("\n");
  for (var n = 0; n < lines.length - 1;) {
    var H = Number(lines[n]["split"](" ")[0]);
    var W = Number(lines[n]["split"](" ")[1]);
    var map = [];
    n++;
    for (var i = 0; i < H; i++) {
      map[i] = lines[n]["split"]("");
      n++;
    }
    console["log"](calc(map, 0, 0));
  }
}
function calc(map, h, w) {
  if (map[h][w] == ".") {
    return w + " " + h;
  }
  if (map[h][w] == "1") {
    return "LOOP";
  }
  switch (map[h][w]) {
    case ">":
      map[h][w] = "1";
      return calc(map, h, w + 1);
    case "<":
      map[h][w] = "1";
      return calc(map, h, w - 1);
    case "v":
      map[h][w] = "1";
      return calc(map, h + 1, w);
    case "^":
      map[h][w] = "1";
      return calc(map, h - 1, w);
  }
}
