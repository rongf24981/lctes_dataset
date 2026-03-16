function __DECODE_0__(Nyptqa, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d4;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Nyptqa, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1e1)) / 0x1 + -parseInt(__DECODE_0__(0x1e2)) / 0x2 + -parseInt(__DECODE_0__(0x1df)) / 0x3 * (parseInt(__DECODE_0__(0x1d5)) / 0x4) + -parseInt(__DECODE_0__(0x1da)) / 0x5 + -parseInt(__DECODE_0__(0x1d8)) / 0x6 * (parseInt(__DECODE_0__(0x1de)) / 0x7) + -parseInt(__DECODE_0__(0x1e0)) / 0x8 + -parseInt(__DECODE_0__(0x1dc)) / 0x9 * (-parseInt(__DECODE_0__(0x1d7)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x88f6c);
function Main(input) {
  input = input[__DECODE_0__(0x1e4)]('\x0a');
  var N = parseInt(input[0x0]);
  var ans = 0x0;
  var set = new Set();
  var N2 = N;
  for (var i = 0x2; i < Math[__DECODE_0__(0x1d9)](N); i++) {
    var x = i;
    for (var j = 0x1; x < N; j++) {
      if (N2 % Math[__DECODE_0__(0x1db)](i, j) == 0x0) {
        ans++;
        N2 = N2 / Math[__DECODE_0__(0x1db)](i, j);
      } else {
        break;
      }
      x = Math['pow'](i, j + 0x1);
    }
  }
  if (ans == 0x0 && N != 0x1) {
    ans = 0x1;
  }
  console[__DECODE_0__(0x1e3)]('%s', ans);
  return ans;
}
function __STRING_ARRAY__() {
  var _0x5ca636 = ['7720bqzKVs', '18pSGtfO', 'sqrt', '3270985HbPkNx', 'pow', '27198XiFHCE', 'readFileSync', '324457ZXtyri', '2112822cmldGr', '5570632nOFsPw', '1051317ljMdsa', '1258888Uoyzrk', 'log', 'split', 'getElementById', 'value', 'innerHTML', '4fcGjxX', 'output'];
  __STRING_ARRAY__ = function () {
    return _0x5ca636;
  };
  return __STRING_ARRAY__();
}
function debug(n) {
  var input = document['getElementById']('input' + n)[__DECODE_0__(0x1e6)];
  var ans = Main(input);
  var result = 'WA';
  if (ans == document[__DECODE_0__(0x1e5)](__DECODE_0__(0x1d6) + n)[__DECODE_0__(0x1e6)][__DECODE_0__(0x1e4)]('\x0a')[0x0]) {
    result = 'AC';
  }
  document[__DECODE_0__(0x1e5)]('result' + n)[__DECODE_0__(0x1d4)] = result;
}
Main(require('fs')[__DECODE_0__(0x1dd)]('/dev/stdin', 'utf8'));
