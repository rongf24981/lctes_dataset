function __DECODE_0__(VVubkk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 147;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VVubkk, key);
}
function __STRING_ARRAY__() {
  var _0x3e704b = ["533940CfThHv", "527566UDvVBD", "utf8", "36ICEYJm", "/dev/stdin", "zyxwvutsrqponmlkjihgfedcba", "177950nCwMzo", "fill", "12vkcvwD", "40156MMAPIL", "charCodeAt", "length", "slice", "709144LzfZrS", "trim", "3ZXysvo", "2818340hmNNcG", "log", "16415920ItQZaT", "fromCharCode"];
  __STRING_ARRAY__ = function () {
    return _0x3e704b;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("177950nCwMzo") / 1 + -parseInt("527566UDvVBD") / 2 + parseInt("3ZXysvo") / 3 * (parseInt("40156MMAPIL") / 4) + parseInt("533940CfThHv") / 5 * (-parseInt("12vkcvwD") / 6) + -parseInt("2818340hmNNcG") / 7 + parseInt("709144LzfZrS") / 8 * (-parseInt("36ICEYJm") / 9) + parseInt("16415920ItQZaT") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 239130);
function Main(s) {
  const n = s["length"];
  const a = "a"["charCodeAt"]();
  var b = Array(26)["fill"](1);
  var i;
  if (n < 26) {
    for (i = 0; i < n; i++) {
      b[s.charCodeAt(i) - a] = 0;
    }
    for (i = 0; i < 26; i++) {
      if (b[i]) {
        s += String["fromCharCode"](a + i);
        break;
      }
    }
  } else {
    if (s === "zyxwvutsrqponmlkjihgfedcba") {
      console["log"](-1);
      return;
    }
    var c = s[25];
    b[s["charCodeAt"](25) - a] = 0;
    for (i = 24; i >= 0; i--) {
      if (c > s[i]) {
        c = s["charCodeAt"](i) - a;
        s = s["slice"](0, i);
        break;
      } else {
        b[s["charCodeAt"](i) - a] = 0;
      }
    }
    for (var j = c - a; j < 26; j++) {
      if (b[j] === 0) {
        s += String["fromCharCode"](a + j);
        break;
      }
    }
  }
  console["log"](s);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8")["trim"]());
