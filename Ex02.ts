function Ex02(arr1: number[], arr2: number[], arr3: number[], arr4: number[]) {
    let a: number = arr1.reduce((sum: number, e: number) => sum + e, 0);
    let b: number = arr2.reduce((sum: number, e: number) => sum + e, 0);
    let c: number = arr3.reduce((sum: number, e: number) => sum + e, 0);
    let d: number = arr4.reduce((sum: number, e: number) => sum + e, 0);
    let array: number[] = [a, b, c, d];
    array.sort((a, b) => b - a);
    if (array[0] === a) return arr1;
    else if (array[0] === b) return arr2;
    else if (array[0] === c) return arr3;
    else return arr4;
}

let a1 = [1, 2];
let a2 = [3, 4];
let a3 = [5, 6];
let a4 = [7, 8];
console.log(Ex02(a1, a2, a3, a4));


