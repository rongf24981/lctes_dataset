function __DECODE_0__(mOycpi, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x163;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mOycpi, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x163)) / 0x1 + -parseInt(__DECODE_0__(0x16d)) / 0x2 + parseInt(__DECODE_0__(0x169)) / 0x3 + parseInt(__DECODE_0__(0x164)) / 0x4 + parseInt(__DECODE_0__(0x16c)) / 0x5 * (-parseInt(__DECODE_0__(0x167)) / 0x6) + -parseInt(__DECODE_0__(0x166)) / 0x7 + parseInt(__DECODE_0__(0x16a)) / 0x8 * (parseInt(__DECODE_0__(0x165)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xac4f5);
function __STRING_ARRAY__() {
  const _0x3f5d59 = ['readFileSync', '/dev/stdin', '467293myJCyE', '1988392YJDLnx', '13059VsSIaB', '2505993CmBHxv', '1410qUkXMu', 'log', '896142sXZVnF', '6568xAivNs', 'split', '9695LYPvOK', '690UPStDZ', 'push'];
  __STRING_ARRAY__ = function () {
    return _0x3f5d59;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  input = input[__DECODE_0__(0x16b)](/\s/);
  let h = parseInt(input[0x0]);
  let w = parseInt(input[0x1]);
  let mp = [];
  for (let i = 0x2; i < 0x2 + h; i++) {
    mp[__DECODE_0__(0x16e)](input[i]);
  }
  function check(x, y) {
    let res = 0x0;
    for (let i = 0x0; i < h; i++) {
      if (mp[i][x] == '#') {
        res++;
        break;
      }
    }
    for (let j = 0x0; j < w; j++) {
      if (mp[y][j] == '#') {
        res++;
        break;
      }
    }
    return res == 0x2;
  }
  for (let i = 0x0; i < h; i++) {
    ans = '';
    for (let j = 0x0; j < w; j++) {
      if (check(j, i)) {
        ans = ans + mp[i][j];
      }
    }
    if (ans != '') {
      console[__DECODE_0__(0x168)](ans);
    }
  }
}
main(require('fs')[__DECODE_0__(0x16f)](__DECODE_0__(0x170), 'utf8'));
