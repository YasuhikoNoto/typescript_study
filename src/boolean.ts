export {};
// モジュール化　対象は何でもよいので{}内は空でOK
let name = 'TypeScript';
// export {}をコメントアウトするとエラーとなる　モジュール化していない、つまりglobal変数を利用する形になっているため

let isFinished: boolean = true;
isFinished = false;
// isFinished = 1;
// 型注釈でbooleanに設定している為、isFinished = 1 は受け付けない
console.log({ isFinished });
