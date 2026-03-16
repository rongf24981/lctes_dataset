function __STRING_ARRAY__() {
  var _0x15c37e = ['7KQznvR', '5823880rUSItp', '4275372IyKhUx', 'split', '459120EnnWsN', 'join', '51AwEuRC', 'log', 'trim', '738177cbrwEJ', 'map', '460hoZlvm', 'indexOf', 'utf8', 'error', '62138RixTvT', '351216RSyKcz', '7929680PFHXXc'];
  __STRING_ARRAY__ = function () {
    return _0x15c37e;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x98)) / 0x1 + -parseInt(__DECODE_0__(0x8c)) / 0x2 * (-parseInt(__DECODE_0__(0x95)) / 0x3) + -parseInt(__DECODE_0__(0x93)) / 0x4 + -parseInt(__DECODE_0__(0x90)) / 0x5 + -parseInt(__DECODE_0__(0x91)) / 0x6 * (parseInt(__DECODE_0__(0x8f)) / 0x7) + parseInt(__DECODE_0__(0x8e)) / 0x8 + parseInt(__DECODE_0__(0x8d)) / 0x9 * (parseInt(__DECODE_0__(0x88)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8ea00);
Main(myin());
function myin() {
  return require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x8a))[__DECODE_0__(0x97)]();
}
function myout(t) {
  console[__DECODE_0__(0x96)](t);
}
function myerr(t) {
  console[__DECODE_0__(0x8b)](t);
}
function __DECODE_0__(MvPruC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x87;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MvPruC, key);
}
function myconv(i, no) {
  switch (no) {
    case 0x1:
      return parseInt(i);
    case 0x2:
      return i[__DECODE_0__(0x92)]('\x20');
    case 0x3:
      return i[__DECODE_0__(0x92)]('\x0a');
    case 0x4:
      return i[__DECODE_0__(0x92)]('\x20')[__DECODE_0__(0x87)](a => Number(a));
    case 0x5:
      return i[__DECODE_0__(0x92)]('\x0a')[__DECODE_0__(0x87)](a => Number(a));
    case 0x6:
      return i['split']('');
    case 0x7:
      return i[__DECODE_0__(0x92)]('')[__DECODE_0__(0x87)](a => Number(a));
    case 0x8:
      return i['join']('\x20');
    case 0x9:
      return i['join']('\x0a');
    case 0x0:
      return i[__DECODE_0__(0x94)]('');
    default:
      return i;
  }
}
function Main(input) {
  input = myconv(input, null);
  var list = 'abcdefghijklmnopqrstivwxyz'['split']('');
  myout(list[list[__DECODE_0__(0x89)](input) + 0x1]);
}
