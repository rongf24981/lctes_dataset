function __STRING_ARRAY__() {
  var _0x17ed94 = ["1546641OehOpm", "208554tDOHcm", "fill", "utf8", "/dev/stdin", "669264CraBta", "2777608rRKcbZ", "3371930SVSwoL", "804656NHwrph", "140uEKMfl", "3XWItkj", "map", "726257WMsZQC", "24UrFHeC", "split", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x17ed94;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("804656NHwrph") / 1 + parseInt("669264CraBta") / 2 * (parseInt("3XWItkj") / 3) + parseInt("2777608rRKcbZ") / 4 + parseInt("140uEKMfl") / 5 * (parseInt("208554tDOHcm") / 6) + parseInt("726257WMsZQC") / 7 * (-parseInt("24UrFHeC") / 8) + parseInt("1546641OehOpm") / 9 + -parseInt("3371930SVSwoL") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 721033);
function __DECODE_0__(nmNWRM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 231;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nmNWRM, key);
}
function Main(s) {
  s = s["split"]("\n");
  s[0] = s[0].split(" ").map(a => +a);
  var n = s[0][0];
  var c = s[0][1];
  var d = [];
  var a = [];
  for (var i = 0; i < c; i++) {
    d[i] = s[i + 1].split(" ")["map"](a => +a);
  }
  for (i = 0; i < n; i++) {
    a[i] = s[i + 1 + c]["split"](" ")["map"](a => +a - 1);
  }
  var z = Array(3)["fill"](0).map(a => Array(c)["fill"](0));
  for (i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      var t = (i + j) % 3;
      z[t][a[i][j]]++;
    }
  }
  var ans = 9000000000;
  for (i = 0; i < c; i++) {
    for (j = 0; j < c; j++) {
      if (i === j) {
        continue;
      }
      for (var k = 0; k < c; k++) {
        if (i === k || j === k) {
          continue;
        }
        t = 0;
        for (var l = 0; l < c; l++) {
          t += z[0][l] * d[l][i];
          t += z[1][l] * d[l][j];
          t += z[2][l] * d[l][k];
        }
        ans = Math.min(ans, t);
      }
    }
  }
  console.log(ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
