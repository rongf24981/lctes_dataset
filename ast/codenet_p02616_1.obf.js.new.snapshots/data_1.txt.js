function __STRING_ARRAY__() {
  const _0x13ca58 = ['utf8', '27795UvNyEH', '357612FoGONC', 'length', 'pop', 'map', '154107XOILMP', 'sort', '6563670VRokSP', 'split', 'trim', '18085600MhoGqG', 'slice', '3376884lbqWNF', '19256MMXpep', '96eWHTGE', 'log', '1089JBcOdi', '30tzHFNY', '/dev/stdin', 'reduce', 'push'];
  __STRING_ARRAY__ = function () {
    return _0x13ca58;
  };
  return __STRING_ARRAY__();
}
const a0_0x33214a = __DECODE_0__;
function __DECODE_0__(XPekHO, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x169;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XPekHO, key);
}
(function (stringArrayFunction, comparisonValue) {
  const _0x2ab8cb = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x2ab8cb(0x169)) / 0x1 + -parseInt(_0x2ab8cb(0x172)) / 0x2 * (-parseInt(_0x2ab8cb(0x17a)) / 0x3) + -parseInt(_0x2ab8cb(0x17b)) / 0x4 * (parseInt(_0x2ab8cb(0x175)) / 0x5) + -parseInt(_0x2ab8cb(0x16b)) / 0x6 + -parseInt(_0x2ab8cb(0x170)) / 0x7 + -parseInt(_0x2ab8cb(0x171)) / 0x8 * (-parseInt(_0x2ab8cb(0x174)) / 0x9) + parseInt(_0x2ab8cb(0x16e)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8f083);
console[a0_0x33214a(0x173)]((args => {
  const _0x302e41 = a0_0x33214a;
  const [[N, K], A] = args[_0x302e41(0x16d)]()[_0x302e41(0x16c)]('\x0a')[_0x302e41(0x17e)](r => r['split']('\x20')[_0x302e41(0x17e)](v => v | 0x0));
  let Am = [];
  let Ap = [];
  for (let i = 0x0; i < N; i++) {
    if (A[i] > 0x0) {
      Ap[_0x302e41(0x178)](A[i]);
    }
    if (A[i] < 0x0) {
      Am[_0x302e41(0x178)](A[i]);
    }
  }
  const MOD = BigInt(0x3b9aca00 + 0x7);
  const mul = (a, b) => (BigInt(a) * BigInt(b) % MOD + MOD) % MOD;
  Am[_0x302e41(0x16a)]((a, b) => a - b);
  Ap[_0x302e41(0x16a)]((a, b) => b - a);
  if (Ap[_0x302e41(0x17c)] === 0x0 && K & 0x1) {
    return '' + Am[_0x302e41(0x16f)](-K)[_0x302e41(0x177)](mul, 0x1);
  }
  let om = 0x0;
  let op = 0x0;
  let ap = [];
  let am = [];
  for (let i = 0x0; i < K; i++) {
    if ((Ap[op] | 0x0) > -(Am[om] | 0x0)) {
      ap[_0x302e41(0x178)](Ap[op]);
      op++;
    } else {
      am['push'](Am[om]);
      om++;
    }
  }
  if (am[_0x302e41(0x17c)] & 0x1) {
    if ((Ap[op] | 0x0) > -(Am[om] | 0x0)) {
      ap[_0x302e41(0x178)](Ap[op]);
      am[_0x302e41(0x17d)]();
    } else {
      am[_0x302e41(0x178)](Am[om]);
      ap[_0x302e41(0x17d)]();
    }
  }
  return '' + mul(ap['reduce'](mul, 0x1), am[_0x302e41(0x177)](mul, 0x1));
})(require('fs')['readFileSync'](a0_0x33214a(0x176), a0_0x33214a(0x179))));
