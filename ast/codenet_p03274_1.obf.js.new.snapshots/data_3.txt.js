(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("200796egSQVj") / 1 + -parseInt("2JKxdop") / 2 * (parseInt("2062677acTuKV") / 3) + -parseInt("2678428KQqHvU") / 4 + -parseInt("436095MCdqlS") / 5 + -parseInt("282ImEcRL") / 6 * (parseInt("102431hYOGOf") / 7) + -parseInt("2512ozBWLi") / 8 * (parseInt("13806sfpXvU") / 9) + parseInt("32034970jsYvTh") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 388889);
function __DECODE_0__(uoQePl, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 308;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uoQePl, key);
}
function get_run_length(min, max) {
  var result = 0;
  if (max > Math["abs"](min)) {
    result = Math["abs"](min * 2) + max;
  } else {
    result = Math["abs"](min) + max * 2;
  }
  if (min >= 0) {
    result = max;
  }
  if (max <= 0) {
    result = Math["abs"](min);
  }
  return result;
}
function __STRING_ARRAY__() {
  var _0x87ea39 = ["log", "abs", "102431hYOGOf", "split", "2678428KQqHvU", "282ImEcRL", "/dev/stdin", "32034970jsYvTh", "2062677acTuKV", "readFileSync", "utf8", "436095MCdqlS", "map", "2512ozBWLi", "2JKxdop", "200796egSQVj", "13806sfpXvU"];
  __STRING_ARRAY__ = function () {
    return _0x87ea39;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  const lines = input["split"]("\n");
  const N = parseInt(lines[0]["split"](" ")[0]);
  const K = parseInt(lines[0]["split"](" ")[1]);
  const Xs = lines[1]["split"](" ")["map"](x => parseInt(x));
  var result = 10000000;
  for (var i = 0; i < N - K + 1; i++) {
    var min = Xs[i];
    var max = Xs[i + K - 1];
    var tmp = get_run_length(min, max);
    result = Math.min(tmp, result);
  }
  console["log"](result);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
