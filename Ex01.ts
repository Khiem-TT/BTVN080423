function Ex01(arr: number[], n: number) {
    let arrResult = [];
    for (let i: number = 0; i < arr.length; i += n) arrResult.push(arr.slice(i, i + n));
    return arrResult;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(Ex01(array, 3));