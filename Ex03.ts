function Ex03(str: string) {
    let arr = str.split('');
    arr.reverse();
    return arr.join('');
}

let string = 'string';
console.log(Ex03(string));