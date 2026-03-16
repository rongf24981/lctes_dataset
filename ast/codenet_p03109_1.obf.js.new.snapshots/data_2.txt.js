function __STRING_ARRAY__() {
  const _0x33ab77 = ['5CsLhIF', '10wndwrB', '2200644VmPQvV', '243088eUpunb', 'stdin', '74600DnCBWx', '20214036qJVymO', '3304432wqFbdW', '7xZKtaC', 'Heisei', 'line', 'readline', '8CxUySc', '11546095GemhOS', '5519946jqkkok', 'push', '108JVmkJF', 'log', 'stdout', 'length'];
  __STRING_ARRAY__ = function () {
    return _0x33ab77;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x153)) / 0x1 * (parseInt(__DECODE_0__(0x14a)) / 0x2) + -parseInt(__DECODE_0__(0x157)) / 0x3 * (-parseInt(__DECODE_0__(0x14c)) / 0x4) + -parseInt(__DECODE_0__(0x15b)) / 0x5 * (-parseInt(__DECODE_0__(0x155)) / 0x6) + parseInt(__DECODE_0__(0x14f)) / 0x7 * (-parseInt(__DECODE_0__(0x14e)) / 0x8) + -parseInt(__DECODE_0__(0x149)) / 0x9 + -parseInt(__DECODE_0__(0x15c)) / 0xa * (parseInt(__DECODE_0__(0x154)) / 0xb) + parseInt(__DECODE_0__(0x14d)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x91967);
function __DECODE_0__(PKRRRC, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x149;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PKRRRC, key);
}
let lines = [];
let reader = require(__DECODE_0__(0x152))['createInterface']({
  'input': process[__DECODE_0__(0x14b)],
  'output': process[__DECODE_0__(0x159)]
});
reader['on'](__DECODE_0__(0x151), function (line) {
  lines[__DECODE_0__(0x156)](line);
});
reader['on']('close', function () {
  if (lines[__DECODE_0__(0x15a)] === 0x1) {
    let date_int = lines[0x0]['replace'](/\//g, '');
    if (date_int <= 0x13414de) {
      console['log'](__DECODE_0__(0x150));
      return;
    }
  }
  console[__DECODE_0__(0x158)]('TBD');
});
