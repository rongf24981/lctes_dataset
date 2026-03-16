function __STRING_ARRAY__() {
  var _0x5465ae = ["36HDVQVt", "459SWytdo", "3840260NDmJvv", "log", "98659iFYTuI", "1029129tojUCl", "readFileSync", "/dev/stdin", "9924ljZTnS", "6594091DFkMxz", "2746368OAmSJK", "8707302tveoKA", "12836TbOUxF", "utf8", "8FvgkUb", "5UtYzBL"];
  __STRING_ARRAY__ = function () {
    return _0x5465ae;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1029129tojUCl") / 1 + parseInt("12836TbOUxF") / 2 * (-parseInt("459SWytdo") / 3) + -parseInt("2746368OAmSJK") / 4 + -parseInt("5UtYzBL") / 5 * (parseInt("8707302tveoKA") / 6) + parseInt("6594091DFkMxz") / 7 * (-parseInt("8FvgkUb") / 8) + -parseInt("36HDVQVt") / 9 * (parseInt("3840260NDmJvv") / 10) + -parseInt("98659iFYTuI") / 11 * (-parseInt("9924ljZTnS") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 790354);
function __DECODE_0__(YkhWII, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 339;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YkhWII, key);
}
function main(s) {
  var add = 0;
  for (var i = 0; i < 3; i++) {
    if (s[i] == "o") {
      add++;
    }
  }
  console["log"](700 + add * 100);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
