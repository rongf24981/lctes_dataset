(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("139yPyQUt") / 1 * (parseInt("7830FUpQHh") / 2) + parseInt("1271373cPpBee") / 3 + parseInt("120TYaIpm") / 4 * (parseInt("143795BamTiw") / 5) + parseInt("78UmVawQ") / 6 * (parseInt("380009zVaPhZ") / 7) + parseInt("24AbeFCN") / 8 * (-parseInt("606834JXhnht") / 9) + -parseInt("190KvEmxE") / 10 * (parseInt("114532eNhtQu") / 11) + -parseInt("20173476PHCJch") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 455248);
function gcd(i, j, k) {
  var max = 0;
  if (max < i) {
    max = i;
  }
  if (max < j) {
    max = j;
  }
  if (max < k) {
    max = k;
  }
  var a = 0;
  for (var count = 1; count <= max; count++) {
    if (i % count == 0 && i >= count && j % count == 0 && j >= count && k % count == 0 && k >= count) {
      a = count;
    }
  }
  return a;
}
function __DECODE_0__(wjWwcO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 202;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wjWwcO, key);
}
function __STRING_ARRAY__() {
  var _0x59f0e8 = ["120TYaIpm", "114532eNhtQu", "190KvEmxE", "24AbeFCN", "7830FUpQHh", "log", "20173476PHCJch", "606834JXhnht", "78UmVawQ", "utf8", "1271373cPpBee", "139yPyQUt", "380009zVaPhZ", "readFileSync", "143795BamTiw", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x59f0e8;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  var N = parseInt(input, 10);
  var sum = 0;
  for (var i = 1; i <= N; i++) {
    for (var j = 1; j <= N; j++) {
      for (var k = 1; k <= N; k++) {
        sum += gcd(i, j, k);
      }
    }
  }
  console["log"](sum);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
