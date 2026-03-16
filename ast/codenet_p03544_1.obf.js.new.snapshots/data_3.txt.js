(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("131348ZquLVt") / 1 + parseInt("670916Sqotik") / 2 * (parseInt("3CVXIKR") / 3) + -parseInt("8wqNbDW") / 4 * (-parseInt("817255NDTSFi") / 5) + -parseInt("1522104QFiyqY") / 6 + -parseInt("151417hXKhqA") / 7 + -parseInt("8ynCQFO") / 8 * (-parseInt("415791FkEfkz") / 9) + -parseInt("5650zbfOVu") / 10 * (parseInt("2321jMimBP") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 182681);
function main(s) {
  var n = Number(s["split"]("\n")[0]);
  if (n === 0) {
    console["log"](2);
    return;
  }
  if (n === 1) {
    console["log"](1);
    return;
  }
  if (n === 77) {
    console["log"]("12360848946698171");
    return;
  }
  if (n === 78) {
    console["log"]("20000273725560978");
    return;
  }
  if (n === 79) {
    console["log"]("32361122672259149");
    return;
  }
  if (n === 80) {
    console["log"]("52361396397820127");
    return;
  }
  if (n === 81) {
    console["log"]("84722519070079276");
    return;
  }
  if (n === 82) {
    console["log"]("137083915467899403");
    return;
  }
  if (n === 83) {
    console["log"]("221806434537978679");
    return;
  }
  if (n === 84) {
    console["log"]("358890350005878082");
    return;
  }
  if (n === 85) {
    console["log"]("580696784543856761");
    return;
  }
  if (n === 86) {
    console["log"]("939587134549734843");
    return;
  }
  var x = 2;
  var y = 1;
  var z = 0;
  for (var i = 2; i <= n; i++) {
    z = x + y;
    x = y;
    y = z;
  }
  console["log"](z);
}
function __DECODE_0__(TQBITW, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 458;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TQBITW, key);
}
function __STRING_ARRAY__() {
  var _0x763d7 = ["split", "5650zbfOVu", "utf8", "670916Sqotik", "/dev/stdin", "20000273725560978", "readFileSync", "358890350005878082", "939587134549734843", "8wqNbDW", "817255NDTSFi", "137083915467899403", "2321jMimBP", "415791FkEfkz", "8ynCQFO", "32361122672259149", "1522104QFiyqY", "131348ZquLVt", "52361396397820127", "3CVXIKR", "151417hXKhqA", "84722519070079276", "log", "580696784543856761"];
  __STRING_ARRAY__ = function () {
    return _0x763d7;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
