function __STRING_ARRAY__() {
  var _0x14469d = ["/dev/stdin", "log", "shift", "replace", "1443162GXAvfk", "this", "map", "7Imbuay", "5lEQhfX", "split", "2BcGxau", "288jfiqDE", "429107IZsvzV", "readFileSync", "84fnhUJt", "5653420AcqOMo", "charCodeAt", "629199IKqIxe", "1846916vFRcWO", "length", "395197LYPqaI", "utf8", "5512fHYCJS"];
  __STRING_ARRAY__ = function () {
    return _0x14469d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("429107IZsvzV") / 1 + -parseInt("2BcGxau") / 2 * (parseInt("629199IKqIxe") / 3) + parseInt("1846916vFRcWO") / 4 * (-parseInt("5lEQhfX") / 5) + -parseInt("1443162GXAvfk") / 6 * (parseInt("7Imbuay") / 7) + -parseInt("5512fHYCJS") / 8 * (parseInt("288jfiqDE") / 9) + parseInt("5653420AcqOMo") / 10 + parseInt("395197LYPqaI") / 11 * (parseInt("84fnhUJt") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 311901);
(function (input) {
  var p = input["replace"](/\n$/, "")["split"]("\n");
  var n = Number(p["shift"]());
  for (var i = 0; i < n; i++) {
    console["log"](conv(p["shift"]()));
  }
})(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(nIgsNY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 484;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nIgsNY, key);
}
function conv(s) {
  a = s["split"](" ");
  for (var i = 0; i < a["length"]; i++) {
    var r = check(a[i]);
    if (r) {
      return conv_(s, r);
    }
  }
  return s;
}
function conv_(s, r) {
  var a = r[0];
  var b = r[1];
  var s = s.split("")["map"](function (e) {
    if (e === " ") {
      return e;
    }
    return String.fromCharCode((a * e["charCodeAt"](0) + b) % 26 + "a"["charCodeAt"](0));
  }).join("");
  return s;
}
function check(str) {
  if (str["length"] !== 4) {
    return false;
  }
  for (var i = 0; i < 26; i++) {
    for (var j = 0; j < 26; j++) {
      var s = conv_(str, [i, j]);
      if (s === "this" || s === "that") {
        return [i, j];
      }
    }
  }
  return false;
}
