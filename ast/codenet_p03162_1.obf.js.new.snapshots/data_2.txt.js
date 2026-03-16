(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x77)) / 0x1 * (-parseInt(__DECODE_0__(0x7b)) / 0x2) + parseInt(__DECODE_0__(0x79)) / 0x3 + -parseInt(__DECODE_0__(0x6f)) / 0x4 * (parseInt(__DECODE_0__(0x75)) / 0x5) + -parseInt(__DECODE_0__(0x7d)) / 0x6 * (parseInt(__DECODE_0__(0x7a)) / 0x7) + -parseInt(__DECODE_0__(0x76)) / 0x8 + -parseInt(__DECODE_0__(0x70)) / 0x9 * (-parseInt(__DECODE_0__(0x6e)) / 0xa) + parseInt(__DECODE_0__(0x78)) / 0xb * (parseInt(__DECODE_0__(0x74)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xae14f);
function __DECODE_0__(EVDmRE, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x6d;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EVDmRE, key);
}
function main(input) {
  let tmp = input[__DECODE_0__(0x72)]('\x0a');
  let vacations = [];
  for (let i = 0x1; i < tmp[__DECODE_0__(0x73)]; i++) {
    let vacation = tmp[i][__DECODE_0__(0x72)]('\x20')[__DECODE_0__(0x7e)](element => parseInt(element, 0xa));
    vacations['push'](vacation);
  }
  let dp = [0x0, 0x0, 0x0];
  for (let day = 0x0; day < vacations[__DECODE_0__(0x73)]; day++) {
    let vacation = vacations[day];
    let new_dp = [0x0, 0x0, 0x0];
    for (let i = 0x0; i < 0x3; i++) {
      for (let j = 0x0; j < 0x3; j++) {
        if (i !== j) {
          new_dp[j] = Math['max'](new_dp[j], dp[i] + vacation[j]);
        }
      }
    }
    dp = new_dp;
  }
  console[__DECODE_0__(0x6d)](Math['max'](dp[0x0], dp[0x1], dp[0x2]));
}
main(require('fs')[__DECODE_0__(0x71)](__DECODE_0__(0x7c), 'utf8'));
function __STRING_ARRAY__() {
  const _0x40dd68 = ['/dev/stdin', '6KmeKgG', 'map', 'log', '550vQIcrb', '4932xZLRhL', '192618vjskHm', 'readFileSync', 'split', 'length', '12hPRiSf', '585loMecB', '8467256ZuFFRk', '30kOZShF', '14231767SBKpUP', '1195263wSMjEc', '6859727ElBoQz', '1756wdEsgd'];
  __STRING_ARRAY__ = function () {
    return _0x40dd68;
  };
  return __STRING_ARRAY__();
}
