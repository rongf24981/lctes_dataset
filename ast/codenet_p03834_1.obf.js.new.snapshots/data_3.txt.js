(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("505648TLcxEQ") / 1 + parseInt("420582ZaPYFA") / 2 + -parseInt("245553xoLlKz") / 3 + -parseInt("512wxwaEE") / 4 * (-parseInt("15110jIiOdn") / 5) + parseInt("6kEozjj") / 6 * (-parseInt("666190PaKvQh") / 7) + parseInt("56jqNcLx") / 8 * (-parseInt("159093ZwHhEd") / 9) + -parseInt("5136240enUJhp") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 288371);
process["stdin"]["resume"]();
process["stdin"]["setEncoding"]("ascii");
var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
process["stdin"].on("data", function (data) {
  input_stdin += data;
});
function __DECODE_0__(axjeuZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 203;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(axjeuZ, key);
}
process.stdin.on("end", function () {
  input_stdin_array = input_stdin["split"]("\n");
  main();
});
function readLine() {
  return input_stdin_array[input_currentline++];
}
function __STRING_ARRAY__() {
  var _0x4f5867 = ["join", "666190PaKvQh", "5136240enUJhp", "505648TLcxEQ", "setEncoding", "ascii", "end", "write", "data", "245553xoLlKz", "420582ZaPYFA", "resume", "56jqNcLx", "15110jIiOdn", "159093ZwHhEd", "6kEozjj", "stdin", "split", "512wxwaEE"];
  __STRING_ARRAY__ = function () {
    return _0x4f5867;
  };
  return __STRING_ARRAY__();
}
function main() {
  var s = readLine();
  s = s["split"](",");
  s = s["join"](" ");
  process.stdout["write"](s);
}
