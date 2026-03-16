function __STRING_ARRAY__() {
  var _0x10d917 = ["350496DMIVMg", "368450PelsMv", "163912slenST", "split", "11371984igpBGg", "slice", "3534828gmVhvo", "1031820NNDgaB", "log", "35LFEYkX", "readFileSync", "map", "3707081yUBrCN", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x10d917;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(kqRSdM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 488;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kqRSdM, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("368450PelsMv") / 1 + -parseInt("1031820NNDgaB") / 2 + -parseInt("350496DMIVMg") / 3 + -parseInt("163912slenST") / 4 * (-parseInt("35LFEYkX") / 5) + -parseInt("3534828gmVhvo") / 6 + -parseInt("3707081yUBrCN") / 7 + parseInt("11371984igpBGg") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 325331);
function main(input) {
  input = input["split"](" ")["map"](Number);
  const N = input[0];
  const K = input[1];
  var result = 0;
  for (i = 1; i <= N; i++) {
    var tmp = 1 / N;
    var now = i;
    while (now < K) {
      now *= 2;
      tmp /= 2;
    }
    result += tmp;
  }
  console["log"](result.toString()["slice"](0, 14));
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
