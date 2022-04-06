function sequenceFibonacci(n) {
    const arrLength = n;
    let arrSequence = [0, 1];

    const aux = arrLength > 0 || ((typeof arrLength) === 'Number');

    if (!aux) {
        return console.log('Insira um número maior do que 0.');
    }
    else if (arrLength === 1) {
        return arrSequence.pop();
    }
    else if (arrLength === 2) {
        return arrSequence;
    }
    else {
        for (let i = 2; i < n; i++) {
            const lastIndex = arrSequence.length - 1;
            const penultimateIndex = arrSequence.length - 2;

            const nextNumber = arrSequence[lastIndex] + arrSequence[penultimateIndex];
            arrSequence.push(nextNumber);
        }
        return arrSequence;
    }
}

const number = 25;
console.log(sequenceFibonacci(number))