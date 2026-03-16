function __DECODE_0__(VQVEQu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 127;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VQVEQu, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("778152vRBTnp") / 1 + -parseInt("220dEqBom") / 2 * (-parseInt("21705CdYYnD") / 3) + parseInt("20PdlzCd") / 4 * (-parseInt("1304730lnnXxe") / 5) + parseInt("108XLhYDr") / 6 * (parseInt("347627PXbHHS") / 7) + -parseInt("8uFexcj") / 8 * (-parseInt("6282072bOxvcy") / 9) + -parseInt("20nKFSyz") / 10 * (parseInt("2435345kfBRaT") / 11) + -parseInt("4588332SApznQ") / 12 * (parseInt("26XxcmDG") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 653666);
process["stdin"]["resume"]();
process["stdin"]["setEncoding"]("utf8");
function __STRING_ARRAY__() {
  var _0x33f3dc = ["resume", "8uFexcj", "split", "21705CdYYnD", "4588332SApznQ", "splice", "6282072bOxvcy", "filter", "apply", "setEncoding", "20PdlzCd", "log", "indexOf", "108XLhYDr", "20nKFSyz", "reduce", "778152vRBTnp", "26XxcmDG", "stdin", "min", "1304730lnnXxe", "220dEqBom", "length", "round", "shift", "2435345kfBRaT", "max", "utf8", "347627PXbHHS"];
  __STRING_ARRAY__ = function () {
    return _0x33f3dc;
  };
  return __STRING_ARRAY__();
}
process.stdin.on("data", function (line) {
  before(line);
});
var log = console["log"];
function before(line) {
  var lines = line["split"]("\n");
  lines = lines["filter"](function (e) {
    return e !== "";
  });
  main(lines);
}
function main(lines) {
  var ls = lines.map(function (e) {
    return Number(e);
  });
  while (ls["length"] > 1) {
    var tpl = ls["shift"]();
    var arr = ls.slice(0, tpl);
    ls = ls.slice(tpl);
    var mid = arr["indexOf"](Math["min"]["apply"](this, arr));
    arr["splice"](mid, 1);
    var Mid = arr["indexOf"](Math["max"]["apply"](this, arr));
    arr["splice"](Mid, 1);
    var sum = arr["reduce"](function (p, c, i, a) {
      return p + c;
    });
    log(Math["round"](sum / arr["length"]));
  }
}
