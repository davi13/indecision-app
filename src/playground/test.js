
// function currency(cash) {
//     const t = 10;
//     const f = 5;
//     const tw = 2;

//     if (cash >= t) {
//         nTen++;
//         solder = cash - t;
//     }
//     else if (cash >= f && cash < t) {
//         nFive++;
//         solder = cash - f;
//     }
//     else {
//         nTwo++;
//         solder = cash - tw;
//     }

//     if (solder <= 0) {
//         return;
//     } else {
//         currency(solder);
//     }
// }


// function change(cash) {
//     currency(cash);
//     return {
//         ten: nTen,
//         five: nFive,
//         two: nTwo,
//     };
// }

// console.log(change(42).five);

let arr = [1, 2, 3];
let it = arr[Symbol.iterator]();

console.log(it.next(), it.next());