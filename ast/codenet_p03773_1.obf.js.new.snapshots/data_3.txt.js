(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("862068KcmXJT") / 1 + parseInt("16RPJuKR") / 2 * (-parseInt("239604pNeDTC") / 3) + -parseInt("3854156HLxgpf") / 4 + parseInt("2175790chwmTz") / 5 + parseInt("468696noDwAv") / 6 + parseInt("3558443anhdGX") / 7 + parseInt("16005344HcETES") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 557740);
function __DECODE_0__(oEpZJi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 107;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oEpZJi, key);
}
process["stdin"]["resume"]();
process["stdin"]["setEncoding"]("utf8");
function __STRING_ARRAY__() {
  var _0x5a0268 = ["16005344HcETES", "resume", "data", "utf8", "239604pNeDTC", "16RPJuKR", "stdin", "862068KcmXJT", "468696noDwAv", "3854156HLxgpf", "3558443anhdGX", "setEncoding", "2175790chwmTz", "log", "split"];
  __STRING_ARRAY__ = function () {
    return _0x5a0268;
  };
  return __STRING_ARRAY__();
}
process["stdin"].on("data", function (chunk) {
  var lines = chunk.toString()["split"](" ");
  var first = Number(lines[0]);
  var second = Number(lines[1]);
  var time = second + first;
  if (time < 24) {
    console["log"](time);
  } else {
    console["log"](time - 24);
  }
});
