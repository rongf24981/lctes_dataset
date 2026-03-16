(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x8d)) / 0x1 * (parseInt(__DECODE_0__(0x8e)) / 0x2) + -parseInt(__DECODE_0__(0x92)) / 0x3 * (parseInt(__DECODE_0__(0x8f)) / 0x4) + parseInt(__DECODE_0__(0x98)) / 0x5 * (-parseInt(__DECODE_0__(0x96)) / 0x6) + parseInt(__DECODE_0__(0x8a)) / 0x7 + parseInt(__DECODE_0__(0x91)) / 0x8 + -parseInt(__DECODE_0__(0x93)) / 0x9 + -parseInt(__DECODE_0__(0x89)) / 0xa * (-parseInt(__DECODE_0__(0x90)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xcf7c5);
var p = require('fs')['readFileSync'](__DECODE_0__(0x97), __DECODE_0__(0x8c));
function __STRING_ARRAY__() {
  var _0x537ac6 = ['utf8', '749BdZhBG', '3154QsEVQx', '957820bmoSLa', '7370xsTyBj', '2784864dpoyef', '18tCvjiL', '4810356dFggDX', 'Yes', 'log', '7962rfiTKE', '/dev/stdin', '2435hhRMkY', 'split', '63110OfbPql', '504133JEMruM', 'map'];
  __STRING_ARRAY__ = function () {
    return _0x537ac6;
  };
  return __STRING_ARRAY__();
}
p = p[__DECODE_0__(0x88)]('\x0a')[__DECODE_0__(0x8b)](a => +a);
function __DECODE_0__(ovyrcK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x88;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ovyrcK, key);
}
console[__DECODE_0__(0x95)](main());
function main() {
  var N = 'No';
  var n = p[0x0];
  var t = 0x0;
  for (i = 0x1; i <= n; i++) {
    while (t > i) {
      if (p[i] !== i) {
        return N;
      }
      i++;
    }
    var j = i;
    while (p[j] !== i) {
      j++;
      if (p[j] !== j) {
        return N;
      }
      j++;
    }
    t = j;
    while (j > i) {
      if (p[j - 0x2] < p[j - 0x1]) {
        return N;
      }
      p[j] = p[j - 0x2];
      j -= 0x2;
    }
  }
  return __DECODE_0__(0x94);
}
