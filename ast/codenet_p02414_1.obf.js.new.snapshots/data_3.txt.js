(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("20751FyvcuN") / 1 * (parseInt("28JQbzfT") / 2) + -parseInt("295710cLlrYp") / 3 + -parseInt("594056xummuw") / 4 + parseInt("1720920wwvHkn") / 5 + -parseInt("6YcXYsW") / 6 * (parseInt("2215164HUdTGG") / 7) + parseInt("323536kzlMSk") / 8 + parseInt("54BaqRuE") / 9 * (parseInt("111750DsFyWn") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 178654);
function __STRING_ARRAY__() {
  var _0x5441f5 = ["push", "slice", "log", "295710cLlrYp", "28JQbzfT", "111750DsFyWn", "length", "20751FyvcuN", "map", "1720920wwvHkn", "join", "54BaqRuE", "ascii", "323536kzlMSk", "stdin", "end", "2215164HUdTGG", "setEncoding", "toString", "split", "6YcXYsW", "594056xummuw"];
  __STRING_ARRAY__ = function () {
    return _0x5441f5;
  };
  return __STRING_ARRAY__();
}
var n;
var m;
var l;
var a;
var b;
var bt;
function __DECODE_0__(fFKDIG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 115;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fFKDIG, key);
}
process["stdin"]["setEncoding"]("ascii");
process["stdin"].on("data", function (chunk) {
  var line;
  var ary;
  line = chunk["toString"]()["split"](/\r?\n/);
  for (i in line) {
    ary = line[i]["split"](" ");
    if (ary["length"] !== 0) {
      line[i] = ary["map"](Number);
    }
  }
  n = line[0][0];
  m = line[0][1];
  l = line[0][2];
  a = line["slice"](1, n + 1);
  b = line["slice"](n + 1, n + m + 1);
});
process["stdin"].on("end", function () {
  var i;
  var j;
  var ci;
  make_b_transpose();
  for (i in a) {
    ci = [];
    for (j in bt) {
      ci["push"](inner_product(a[i], bt[j]));
    }
    console["log"](ci["join"](" "));
  }
});
function make_b_transpose() {
  var j;
  var k;
  var bj;
  bt = [];
  for (j = 0; j < l; j++) {
    bj = [];
    for (k = 0; k < m; k++) {
      bj.push(b[k][j]);
    }
    bt["push"](bj);
  }
}
function inner_product(a, b) {
  var res = 0;
  for (var i in a) {
    res += a[i] * b[i];
  }
  return res;
}
