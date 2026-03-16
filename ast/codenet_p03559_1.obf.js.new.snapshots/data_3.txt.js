(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("677389dDVoNv") / 1 + parseInt("197742ULBiFL") / 2 + parseInt("33YazhyL") / 3 * (-parseInt("436292njXDxL") / 4) + parseInt("9885nkTXJp") / 5 * (-parseInt("1656XCSTGD") / 6) + -parseInt("7DqSXsQ") / 7 * (parseInt("1817944YioDGP") / 8) + -parseInt("9wrCJWS") / 9 * (-parseInt("5973340RzDats") / 10) + parseInt("30009452kxUDZN") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 774250);
function __DECODE_0__(ouurdr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 373;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ouurdr, key);
}
function __STRING_ARRAY__() {
  var _0x428001 = ["split", "197742ULBiFL", "436292njXDxL", "utf8", "sort", "map", "7DqSXsQ", "5973340RzDats", "trim", "9wrCJWS", "677389dDVoNv", "9885nkTXJp", "30009452kxUDZN", "33YazhyL", "from", "readFileSync", "max", "1656XCSTGD", "1817944YioDGP"];
  __STRING_ARRAY__ = function () {
    return _0x428001;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input["trim"]()["split"]("\n")["map"](function (x) {
    return x.split(" ");
  });
  var N = parseInt(input[0][0], 10);
  var vec_A = input[1]["map"](e => parseInt(e, 10));
  var vec_B = input[2]["map"](e => parseInt(e, 10));
  var vec_C = input[3]["map"](e => parseInt(e, 10));
  function compareFunc(a, b) {
    return b - a;
  }
  vec_A["sort"](compareFunc);
  vec_B["sort"](compareFunc);
  vec_C["sort"](compareFunc);
  var s = 0;
  var t = -1;
  var vec_sumB = Array["from"]({
    length: N
  }, () => 0);
  var tmpAdj = 0;
  var ans = 0;
  for (var i = 0; i < N; i++) {
    while (s < N && vec_B[s] > vec_A[i]) {
      while (t < N - 1 && vec_C[t + 1] > vec_B[s]) {
        t++;
      }
      if (s > 0) {
        tmpAdj = vec_sumB[s - 1];
      } else {
        tmpAdj = 0;
      }
      vec_sumB[s] = tmpAdj + t + 1;
      s++;
    }
    s = Math["max"](0, s - 1);
    ans += vec_sumB[s];
  }
  console.log(ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
