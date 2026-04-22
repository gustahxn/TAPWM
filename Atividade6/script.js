const form = document.getElementById('triangle-form');
const inputA = document.getElementById('sideA');
const inputB = document.getElementById('sideB');
const inputC = document.getElementById('sideC');
const isTriangleDisplay = document.getElementById('is-triangle');
const triangleTypeDisplay = document.getElementById('triangle-type');
const errorMessage = document.getElementById('error-message');
const clearBtn = document.getElementById('clear-btn');

function restrictInput(event) {
    this.value = this.value.replace(/[^0-9.]/g, '');
    
    const parts = this.value.split('.');
    if (parts.length > 2) {
        this.value = parts[0] + '.' + parts.slice(1).join('');
    }
}

inputA.addEventListener('input', restrictInput);
inputB.addEventListener('input', restrictInput);
inputC.addEventListener('input', restrictInput);

// clear
if (clearBtn) {
    clearBtn.addEventListener('click', function() {
        form.reset();
        errorMessage.classList.add('hidden');
        isTriangleDisplay.textContent = '-';
        isTriangleDisplay.className = 'font-medium text-gray-900';
        triangleTypeDisplay.textContent = '-';
    });
}

// verificando se é triang
function isValidTriangle(a, b, c) {
    const condA = Math.abs(b - c) < a && a < (b + c);
    const condB = Math.abs(a - c) < b && b < (a + c);
    const condC = Math.abs(a - b) < c && c < (a + b);

    return condA && condB && condC;
}

// lados possiveis
function getTriangleType(a, b, c) {
    if (a === b && b === c) {
        return 'Equilátero';
    } else if (a === b || a === c || b === c) {
        return 'Isósceles';
    } else {
        return 'Escaleno';
    }
}


form.addEventListener('submit', function (event) {

    event.preventDefault();
    errorMessage.classList.add('hidden');

    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);
    const c = parseFloat(inputC.value);

    // isNaN
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        errorMessage.textContent = 'por favor, digite apenas números nos três campos.';
        errorMessage.classList.remove('hidden');

        isTriangleDisplay.textContent = '-';
        isTriangleDisplay.className = 'font-medium text-gray-900';
        triangleTypeDisplay.textContent = '-';

        return;
    }

    if (a <= 0 || b <= 0 || c <= 0) {
        errorMessage.textContent = 'os lados devem ser maiores que zero para formar um triângulo.';
        errorMessage.classList.remove('hidden');
        return;
    }

    // verifica regra e lados
    const isTriangle = isValidTriangle(a, b, c);

    if (isTriangle) {
        isTriangleDisplay.textContent = 'Sim';
        isTriangleDisplay.className = 'font-medium text-green-600';

        const type = getTriangleType(a, b, c);
        triangleTypeDisplay.textContent = type;


    } else {
        isTriangleDisplay.textContent = 'Não';
        isTriangleDisplay.className = 'font-medium text-red-600';
        triangleTypeDisplay.textContent = 'Não se aplica';

    }
});
