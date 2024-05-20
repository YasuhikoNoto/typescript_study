export {};

let numbers: number[] = [1, 2, 3];

//同じ意味
let numbers2: Array<number> = [1, 2, 3];
let string2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings: string[] = ['TypeScript', 'Javascript', 'CofffeeScript'];

// 二次元配列
let nijigenHairetsu: number[][] = [
  [50, 100],
  [150, 300]
];

// 複数の型を持つ場合 共用型
let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];