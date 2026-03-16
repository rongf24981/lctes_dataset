(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x196)) / 0x1 + -parseInt(__DECODE_0__(0x198)) / 0x2 + parseInt(__DECODE_0__(0x192)) / 0x3 * (-parseInt(__DECODE_0__(0x187)) / 0x4) + parseInt(__DECODE_0__(0x18a)) / 0x5 * (parseInt(__DECODE_0__(0x18e)) / 0x6) + parseInt(__DECODE_0__(0x190)) / 0x7 * (parseInt(__DECODE_0__(0x197)) / 0x8) + parseInt(__DECODE_0__(0x18d)) / 0x9 + -parseInt(__DECODE_0__(0x185)) / 0xa * (-parseInt(__DECODE_0__(0x18f)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4a00f);
function main() {
  input[__DECODE_0__(0x193)](function (line) {
    var a;
    var b;
    var c;
    var p;
    var x;
    var y;
    var z;
    var i;
    if (line[__DECODE_0__(0x18c)]() === '') {
      return;
    }
    p = line['match'](/([0-9X]+)\+([0-9X]+)\=([0-9X]+)/);
    a = p[0x1];
    b = p[0x2];
    c = p[0x3];
    for (i = 0x0; i <= 0x9; i++) {
      if (i === 0x0 && (a[__DECODE_0__(0x18b)](0x0) === 'X' || b['charAt'](0x0) === 'X' || c['charAt'](0x0) === 'X')) {
        continue;
      }
      x = parseInt(a[__DECODE_0__(0x194)](/X/g, i), 0xa);
      y = parseInt(b[__DECODE_0__(0x194)](/X/g, i), 0xa);
      z = parseInt(c[__DECODE_0__(0x194)](/X/g, i), 0xa);
      if (x + y === z) {
        break;
      }
    }
    console['log'](i === 0xa ? 'NA' : i);
  });
}
var input = '';
function __DECODE_0__(iivwIy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x184;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iivwIy, key);
}
process[__DECODE_0__(0x188)][__DECODE_0__(0x191)]();
function __STRING_ARRAY__() {
  var _0x372bff = ['2226469WMSqHD', 'resume', '1914TAeOCx', 'forEach', 'replace', 'end', '579981PxxSlX', '8ZhVxbj', '595954uxINce', 'split', '82510oQDbep', 'setEncoding', '2512yoLqNv', 'stdin', 'utf8', '615535INqjCB', 'charAt', 'trim', '2393649WitaTz', '6lnvMAF', '1166REDiko'];
  __STRING_ARRAY__ = function () {
    return _0x372bff;
  };
  return __STRING_ARRAY__();
}
process[__DECODE_0__(0x188)][__DECODE_0__(0x186)](__DECODE_0__(0x189));
process[__DECODE_0__(0x188)]['on']('data', function (chunk) {
  input += chunk;
});
process[__DECODE_0__(0x188)]['on'](__DECODE_0__(0x195), function () {
  input = input[__DECODE_0__(0x184)]('\x0a');
  main();
});
