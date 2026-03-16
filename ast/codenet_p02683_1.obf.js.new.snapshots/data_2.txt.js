function __DECODE_0__(uaBLHm, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x158;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uaBLHm, key);
}
function __STRING_ARRAY__() {
  const _0x312054 = ['5325940gcBVUB', '31712MALMqE', 'trim', '7587720NWPAOt', '432300ywWnMR', '/dev/stdin', 'length', 'map', 'split', 'every', 'utf8', '5UxmHcr', '2676822kXhNfA', 'min', 'keys', '9389450zWSlOR', 'log', '5134728YWNaGo'];
  __STRING_ARRAY__ = function () {
    return _0x312054;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x160)) / 0x1 + -parseInt(__DECODE_0__(0x163)) / 0x2 + -parseInt(__DECODE_0__(0x159)) / 0x3 + -parseInt(__DECODE_0__(0x15f)) / 0x4 + -parseInt(__DECODE_0__(0x158)) / 0x5 * (-parseInt(__DECODE_0__(0x15e)) / 0x6) + parseInt(__DECODE_0__(0x15c)) / 0x7 + parseInt(__DECODE_0__(0x162)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa48be);
function main(input) {
  const lines = input[__DECODE_0__(0x161)]()[__DECODE_0__(0x167)]('\x0a');
  const [N, M, X] = splitN(lines[0x0]);
  const costs = [];
  const options = [...Array(N)[__DECODE_0__(0x15b)]()];
  select(options);
  function select(options, cost = 0x0, aList = []) {
    for (let i = 0x0; i < options[__DECODE_0__(0x165)]; i++) {
      const _options = [...options];
      const [s] = _options['splice'](i, 0x1);
      const [c, ...a] = splitN(lines[s + 0x1]);
      const _cost = cost + c;
      const _aList = a['map']((v, i) => v + (aList[i] || 0x0));
      if (_aList[__DECODE_0__(0x168)](v => v >= X)) {
        costs['push'](_cost);
        continue;
      }
      select(_options, _cost, _aList);
    }
  }
  console[__DECODE_0__(0x15d)](costs['length'] ? Math[__DECODE_0__(0x15a)](...costs) : -0x1);
}
main(require('fs')['readFileSync'](__DECODE_0__(0x164), __DECODE_0__(0x169)));
function splitN(s) {
  return s[__DECODE_0__(0x167)]('\x20')[__DECODE_0__(0x166)](Number);
}
