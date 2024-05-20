//tuple型　配列要素の方が明確に分かっているが全ての方が同列でない
export {};

// let profile: (string | number)[] = ['Ham', 43];
// profile = [43, 'Ham'];  再代入してもコンパイルエラーが発生しない
//共用型だと順序性を持たせることができない 逆転した配列でもエラーにならない為、データがすりかわっても気づきにくい

//より強い制約を持たせるためtuple型を使う
let profile: [string, number] = ['Ham', 43];
// profile = [43, 'Ham'];  再代入するとコンパイルエラー