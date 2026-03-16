function __DECODE_0__(OaLZzH, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19f;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OaLZzH, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1a6)) / 0x1 * (-parseInt(__DECODE_0__(0x1aa)) / 0x2) + -parseInt(__DECODE_0__(0x1a0)) / 0x3 + parseInt(__DECODE_0__(0x1a4)) / 0x4 * (-parseInt(__DECODE_0__(0x1a2)) / 0x5) + parseInt(__DECODE_0__(0x1b0)) / 0x6 * (-parseInt(__DECODE_0__(0x1af)) / 0x7) + -parseInt(__DECODE_0__(0x1a1)) / 0x8 * (parseInt(__DECODE_0__(0x1ae)) / 0x9) + parseInt(__DECODE_0__(0x1a9)) / 0xa * (parseInt(__DECODE_0__(0x1b1)) / 0xb) + parseInt(__DECODE_0__(0x1a8)) / 0xc * (parseInt(__DECODE_0__(0x1ac)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x89aef);
console[__DECODE_0__(0x1b5)]((args => {
  const [HW, ...S] = args[__DECODE_0__(0x1ab)]()[__DECODE_0__(0x1a5)]('\x0a');
  const [H, W] = HW['split']('\x20')['map'](v => parseInt(v));
  const trail = Array['from']({
    'length': H
  }, _ => Array(W)[__DECODE_0__(0x1b2)](![]));
  const dir = [[-0x1, 0x0], [0x0, -0x1], [0x1, 0x0], [0x0, 0x1]];
  let p = 0x0;
  for (let i = 0x0; i < H; i++) {
    for (let j = 0x0; j < W; j++) {
      if (trail[i][j]) {
        continue;
      }
      const stack = [[i, j]];
      trail[i][j] = !![];
      let w = S[i][j] === '.' | 0x0;
      let b = w ^ 0x1;
      while (stack[__DECODE_0__(0x19f)]) {
        const [x, y] = stack[__DECODE_0__(0x1b4)]();
        for (const [dx, dy] of dir) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx < 0x0 || H <= nx || ny < 0x0 || W <= ny || trail[nx][ny] || S[x][y] === S[nx][ny]) {
            continue;
          }
          trail[nx][ny] = !![];
          if (S[nx][ny] === '#') {
            b++;
          } else {
            w++;
          }
          stack[__DECODE_0__(0x1a7)]([nx, ny]);
        }
      }
      p += w * b;
    }
  }
  return '' + p;
})(require('fs')[__DECODE_0__(0x1ad)](__DECODE_0__(0x1a3), __DECODE_0__(0x1b3))));
function __STRING_ARRAY__() {
  const _0x4e90d5 = ['2237109KOGhRY', '6jMLjfA', '22bjQgqL', 'fill', 'utf8', 'pop', 'log', 'length', '3232311LCIVvJ', '433448PyqpBj', '5hGLWYJ', '/dev/stdin', '3677204jNGvdn', 'split', '320YTDTmg', 'push', '36CwXRIT', '5198160pQRqNp', '2426dYPwHy', 'trim', '12710347IxtHcx', 'readFileSync', '117uFSKyp'];
  __STRING_ARRAY__ = function () {
    return _0x4e90d5;
  };
  return __STRING_ARRAY__();
}
