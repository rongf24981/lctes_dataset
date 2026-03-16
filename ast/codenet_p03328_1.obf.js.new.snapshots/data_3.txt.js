function __DECODE_0__(agIITk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 289;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(agIITk, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("243539iKJHNM") / 1 + -parseInt("4zJsMBg") / 2 * (-parseInt("406914gqXyiN") / 3) + parseInt("446236ExqBAQ") / 4 + parseInt("11365raVQWb") / 5 * (parseInt("318OvfkzA") / 6) + -parseInt("663558mjIZNm") / 7 + -parseInt("2344HVyJRu") / 8 * (parseInt("3348PORjNd") / 9) + -parseInt("1883530VLyfqK") / 10 * (parseInt("22QihnGq") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 166347);
function Main(input) {
  input = input["split"](" ");
  var a = parseInt(input[0], 10);
  var b = parseInt(input[1], 10);
  var a_real = 1;
  var b_real = 1;
  var a_count = 1;
  var b_count = 1;
  var ans = 0;
  while (true) {
    while (true) {
      a_count++;
      a_real += a_count;
      b_count++;
      b_real += b_count;
      if (a_real > a) {
        break;
      }
    }
    while (true) {
      b_count++;
      b_real += b_count;
      if (b_real > b) {
        break;
      }
    }
    if (a_real - a == b_real - b) {
      break;
    }
  }
  ans = a_real - a;
  console["log"](ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0xb9977c = ["3348PORjNd", "4zJsMBg", "readFileSync", "663558mjIZNm", "446236ExqBAQ", "406914gqXyiN", "11365raVQWb", "2344HVyJRu", "log", "22QihnGq", "318OvfkzA", "split", "243539iKJHNM", "utf8", "1883530VLyfqK"];
  __STRING_ARRAY__ = function () {
    return _0xb9977c;
  };
  return __STRING_ARRAY__();
}
