(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("579981PxxSlX") / 1 + -parseInt("595954uxINce") / 2 + parseInt("1914TAeOCx") / 3 * (-parseInt("2512yoLqNv") / 4) + parseInt("615535INqjCB") / 5 * (parseInt("6lnvMAF") / 6) + parseInt("2226469WMSqHD") / 7 * (parseInt("8ZhVxbj") / 8) + parseInt("2393649WitaTz") / 9 + -parseInt("82510oQDbep") / 10 * (-parseInt("1166REDiko") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 303119);
function main() {
  input["forEach"](function (line) {
    var a;
    var b;
    var c;
    var p;
    var x;
    var y;
    var z;
    var i;
    if (line["trim"]() === "") {
      return;
    }
    p = line.match(/([0-9X]+)\+([0-9X]+)\=([0-9X]+)/);
    a = p[1];
    b = p[2];
    c = p[3];
    for (i = 0; i <= 9; i++) {
      if (i === 0 && (a["charAt"](0) === "X" || b.charAt(0) === "X" || c.charAt(0) === "X")) {
        continue;
      }
      x = parseInt(a["replace"](/X/g, i), 10);
      y = parseInt(b["replace"](/X/g, i), 10);
      z = parseInt(c["replace"](/X/g, i), 10);
      if (x + y === z) {
        break;
      }
    }
    console.log(i === 10 ? "NA" : i);
  });
}
var input = "";
function __DECODE_0__(iivwIy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 388;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iivwIy, key);
}
process["stdin"]["resume"]();
function __STRING_ARRAY__() {
  var _0x372bff = ["2226469WMSqHD", "resume", "1914TAeOCx", "forEach", "replace", "end", "579981PxxSlX", "8ZhVxbj", "595954uxINce", "split", "82510oQDbep", "setEncoding", "2512yoLqNv", "stdin", "utf8", "615535INqjCB", "charAt", "trim", "2393649WitaTz", "6lnvMAF", "1166REDiko"];
  __STRING_ARRAY__ = function () {
    return _0x372bff;
  };
  return __STRING_ARRAY__();
}
process["stdin"]["setEncoding"]("utf8");
process["stdin"].on("data", function (chunk) {
  input += chunk;
});
process["stdin"].on("end", function () {
  input = input["split"]("\n");
  main();
});
