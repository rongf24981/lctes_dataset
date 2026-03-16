function __DECODE_0__(hGdhKi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 468;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hGdhKi, key);
}
function __STRING_ARRAY__() {
  var _0x32603d = ["56Msclii", "63115nasVVL", "utf8", "split", "22536yKKdto", "110nsUpUn", "107830NTOafi", "132fEYqku", "2274108tybhOP", "6075732JOajgm", "18897KopBVi", "/dev/stdin", "232941ooGAWD", "log", "2793SKumuI", "22vizPhR", "1143ELFBpe"];
  __STRING_ARRAY__ = function () {
    return _0x32603d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("18897KopBVi") / 1 * (parseInt("110nsUpUn") / 2) + parseInt("232941ooGAWD") / 3 * (parseInt("56Msclii") / 4) + -parseInt("63115nasVVL") / 5 * (-parseInt("132fEYqku") / 6) + -parseInt("2793SKumuI") / 7 * (-parseInt("22536yKKdto") / 8) + parseInt("1143ELFBpe") / 9 * (-parseInt("107830NTOafi") / 10) + parseInt("22vizPhR") / 11 * (parseInt("2274108tybhOP") / 12) + parseInt("6075732JOajgm") / 13;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 926353);
(function (stdin) {
  input = stdin["split"]("\n");
  var n = parseInt(input[0], 10);
  var a = input[1].split(" ");
  var ans = 1;
  var up = false;
  var down = false;
  for (var i = 0; i < n - 1; i++) {
    if (a[i] < a[i + 1]) {
      up = true;
    }
    if (a[i] > a[i + 1]) {
      down = true;
    }
    if (up && down) {
      up = down = false;
      ans++;
    }
  }
  console["log"]("%d", ans);
})(require("fs").readFileSync("/dev/stdin", "utf8"));
