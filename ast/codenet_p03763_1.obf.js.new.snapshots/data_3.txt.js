function __DECODE_0__(lzUPfu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 102;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lzUPfu, key);
}
function __STRING_ARRAY__() {
  var _0x5e06b7 = ["281202xXajKp", "utf8", "readFileSync", "1977004MrDVBv", "403767oNUbqK", "1155500HLOOoj", "861573XjeKpx", "repeat", "abcdefghijklmnopqrstuvwxyz", "396eEJgfq", "/dev/stdin", "7TkqbmP", "11177950fkgSOX", "findIndex", "104KcRcRe", "397XAkkhn", "forEach", "split", "fill"];
  __STRING_ARRAY__ = function () {
    return _0x5e06b7;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("397XAkkhn") / 1 * (-parseInt("396eEJgfq") / 2) + -parseInt("861573XjeKpx") / 3 + -parseInt("1977004MrDVBv") / 4 + -parseInt("1155500HLOOoj") / 5 + -parseInt("281202xXajKp") / 6 * (parseInt("7TkqbmP") / 7) + -parseInt("104KcRcRe") / 8 * (-parseInt("403767oNUbqK") / 9) + parseInt("11177950fkgSOX") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 562999);
function Main(input) {
  input = input["split"]("\n");
  var S = "abcdefghijklmnopqrstuvwxyz"["split"]("");
  var array = new Array(26);
  array["fill"](0);
  var temp;
  for (var i = 1; i < input.length; i++) {
    temp = new Array(26);
    temp["fill"](0);
    for (var j = 0; j < input[i].length; j++) {
      temp[S["findIndex"](e => {
        return e === input[i][j];
      })]++;
    }
    for (var j = 0; j < 26; j++) {
      if (array[j] > temp[j] || i === 1) {
        array[j] = temp[j];
      }
    }
  }
  var ret = "";
  array["forEach"]((e, i) => {
    ret += S[i]["repeat"](e);
  });
  console.log(ret);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
