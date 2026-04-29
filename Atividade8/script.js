// calculo com apply
function processThreeNumbers(arr) {
    function calcOperations(a, b, c) {
        const sum = a + b + c;
        const sq1 = a * a;
        const sq2 = b * b;
        return `A soma dos três números é: ${sum}, o quadrado do primeiro é: ${sq1} e o quadrado do segundo é: ${sq2}`;
    }

    return calcOperations.apply(null, arr);
}


const formF1 = document.getElementById('form-f1');
const resF1 = document.getElementById('res-f1');

formF1.addEventListener('submit', function (e) {
    e.preventDefault();
    const n1 = parseFloat(document.getElementById('f1-n1').value);
    const n2 = parseFloat(document.getElementById('f1-n2').value);
    const n3 = parseFloat(document.getElementById('f1-n3').value);

    // usando array
    const numbersArray = [n1, n2, n3];
    resF1.textContent = processThreeNumbers(numbersArray);
});

formF1.addEventListener('reset', () => resF1.textContent = '-');


// formando palavras
function getDistinctWords(lettersArr) {
    const words = new Set();

    function permute(arr, currentWord) {
        if (words.size >= 10) return;

        if (arr.length === 0) {
            words.add(currentWord.join(''));
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            const nextArr = arr.slice();
            const char = nextArr.splice(i, 1)[0];

            const nextWord = [];

            // apply / push

            Array.prototype.push.apply(nextWord, currentWord);
            nextWord.push(char);

            permute(nextArr, nextWord);
        }
    }

    permute(lettersArr, []);
    return Array.from(words);
}

const formF2 = document.getElementById('form-f2');
const resF2 = document.getElementById('res-f2');

formF2.addEventListener('submit', function (e) {
    e.preventDefault();

    // alfabeto em minusculo
    const l1 = document.getElementById('f2-l1').value.toUpperCase();
    const l2 = document.getElementById('f2-l2').value.toUpperCase();
    const l3 = document.getElementById('f2-l3').value.toUpperCase();
    const l4 = document.getElementById('f2-l4').value.toUpperCase();
    const l5 = document.getElementById('f2-l5').value.toUpperCase();

    // recebe um array de 5 letras
    const letters = [l1, l2, l3, l4, l5];

    const results = getDistinctWords(letters);
    resF2.textContent = results.join(', ');
});

formF2.addEventListener('reset', () => resF2.textContent = '-');
