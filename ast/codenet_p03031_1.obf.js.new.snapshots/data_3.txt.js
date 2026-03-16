function __DECODE_0__(dtvFjF, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 268;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dtvFjF, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("202673wAcTDx") / 1 * (parseInt("2NPYlQN") / 2) + parseInt("921qkoyod") / 3 * (parseInt("1940yLsSJt") / 4) + -parseInt("801775RzldKo") / 5 * (-parseInt("6umgXSG") / 6) + -parseInt("7cYhgoG") / 7 * (-parseInt("2068856vFuHRt") / 8) + parseInt("18cVukar") / 9 * (parseInt("1845190GgmBXM") / 10) + -parseInt("6191625MNYBBD") / 11 + parseInt("2368920DBRZuk") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 368757);
function __STRING_ARRAY__() {
  var _0x4ee81b = ["2068856vFuHRt", "split", "1940yLsSJt", "utf8", "toString", "/dev/stdin", "7cYhgoG", "slice", "log", "6191625MNYBBD", "6umgXSG", "801775RzldKo", "2368920DBRZuk", "1845190GgmBXM", "length", "921qkoyod", "18cVukar", "202673wAcTDx", "map", "2NPYlQN"];
  __STRING_ARRAY__ = function () {
    return _0x4ee81b;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  lines = input["split"]("\n");
  lines = input["split"]("\n");
  n = lines[0].split(" ")[0] * 1;
  m = lines[0]["split"](" ")[1] * 1;
  ps = lines[lines["length"] - 1]["split"](" ");
  lines = lines["slice"](1, -1)["map"](function (l) {
    return l.split(" ").slice(1);
  });
  ans = 0;
  for (i = 0; i < 1 << n; i++) {
    s = ("0000000000" + i["toString"](2))["slice"](n * -1);
    flg = true;
    for (j = 0; j < lines["length"]; j++) {
      on = 0;
      if (!flg) {
        break;
      }
      for (k = 0; k < lines[j]["length"]; k++) {
        on += s[n - lines[j][k]] * 1;
      }
      if (on % 2 != ps[j]) {
        flg = false;
      }
    }
    if (flg) {
      ans++;
    }
  }
  console["log"](ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
