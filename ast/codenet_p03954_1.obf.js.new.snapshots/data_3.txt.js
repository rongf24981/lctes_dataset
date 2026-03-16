(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("317541OEIHGq") / 1 + parseInt("8402zuTjHI") / 2 * (-parseInt("3JSOotl") / 3) + -parseInt("3819844eDIRCn") / 4 * (-parseInt("5zdhYzY") / 5) + parseInt("114ztdxlL") / 6 * (-parseInt("87717spaExX") / 7) + parseInt("712bWpeme") / 8 * (parseInt("15066yEirNO") / 9) + -parseInt("259270DIZtoN") / 10 * (parseInt("198ZnNLNa") / 11) + parseInt("1989036MFDuvW") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 878265);
function __STRING_ARRAY__() {
  var _0x2dc147 = ["259270DIZtoN", "15066yEirNO", "3819844eDIRCn", "317541OEIHGq", "198ZnNLNa", "8402zuTjHI", "length", "3JSOotl", "split", "/dev/stdin", "114ztdxlL", "utf8", "log", "87717spaExX", "712bWpeme", "readFileSync", "1989036MFDuvW", "5zdhYzY"];
  __STRING_ARRAY__ = function () {
    return _0x2dc147;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input["split"]("\n");
  tmp = input[1]["split"](" ");
  var N = parseInt(input[0], 10);
  var array_N = new Array(N * 2 - 1);
  for (var i = 0; i < array_N["length"]; i++) {
    array_N[i] = parseInt(tmp[i], 10);
  }
  function getArrayNext(array_i) {
    array_i_next = new Array(array_i["length"] - 2);
    for (var j = 0; j < array_i_next["length"]; j++) {
      var small_array = array_i.slice(j, j + 3);
      array_i_next[j] = small_array.sort(function (a, b) {
        if (a < b) {
          return -1;
        } else {
          return 1;
        }
      })[1];
    }
    return array_i_next;
  }
  var array_i = array_N;
  while (array_i.length > 1) {
    array_i = getArrayNext(array_i);
  }
  console["log"](array_i[0]);
}
function __DECODE_0__(mSKZfh, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 424;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mSKZfh, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
