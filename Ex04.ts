function Ex04(n: number) {
    let sum: number = 0;
    for (let i: number = 1; i < n; i++) {
        if (n % i === 0) sum += i;
    }
    if (sum === n) console.log('Perfect number');
    else console.log('Not perfect number');
}

Ex04(6);