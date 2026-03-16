function __STRING_ARRAY__() {
  var _0x529521 = ["322232dzbajn", "204sNCCVF", "setEncoding", "114760jbjpRk", "160IjtZdC", "data", "7wlrHyk", "push", "461098nbpvZO", "stdin", "resume", "275IePfSu", "248592RafGPX", "1698aaxafm", "join", "645480osgiDv", "utf-8", "23724OkuGdl"];
  __STRING_ARRAY__ = function () {
    return _0x529521;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(oGpKrG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 270;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oGpKrG, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("114760jbjpRk") / 1 + -parseInt("322232dzbajn") / 2 + parseInt("1698aaxafm") / 3 * (parseInt("204sNCCVF") / 4) + parseInt("275IePfSu") / 5 * (-parseInt("23724OkuGdl") / 6) + parseInt("7wlrHyk") / 7 * (parseInt("248592RafGPX") / 8) + -parseInt("645480osgiDv") / 9 + parseInt("160IjtZdC") / 10 * (parseInt("461098nbpvZO") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 165562);
var readable = process["stdin"];
readable["resume"]();
readable["setEncoding"]("utf-8");
readable.on("data", function (chunk) {
  var n = parseInt(chunk);
  var i = 1;
  var output = [];
  do {
    var x = i;
    if (x % 3 == 0) {
      output["push"](" " + i);
    } else {
      do {
        if (x % 10 == 3) {
          output["push"](" " + i);
          break;
        } else {
          x /= 10;
        }
      } while (x);
    }
  } while (++i <= n);
  console.log(output["join"](""));
});
