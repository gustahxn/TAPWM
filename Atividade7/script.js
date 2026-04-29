// maior
function maxOfThree(n1, n2, n3) {
    return Math.max(n1, n2, n3);
}

const formF1 = document.getElementById('form-f1');
const resF1 = document.getElementById('res-f1');

formF1.addEventListener('submit', function (e) {
    e.preventDefault();
    const n1 = parseFloat(document.getElementById('f1-n1').value);
    const n2 = parseFloat(document.getElementById('f1-n2').value);
    const n3 = parseFloat(document.getElementById('f1-n3').value);
    resF1.textContent = maxOfThree(n1, n2, n3);
});

formF1.addEventListener('reset', () => resF1.textContent = '-');


// ordem
function sortThree(n1, n2, n3) {
    const arr = [n1, n2, n3];
    return arr.sort((a, b) => a - b).join(', ');
}

const formF2 = document.getElementById('form-f2');
const resF2 = document.getElementById('res-f2');

formF2.addEventListener('submit', function (e) {
    e.preventDefault();
    const n1 = parseFloat(document.getElementById('f2-n1').value);
    const n2 = parseFloat(document.getElementById('f2-n2').value);
    const n3 = parseFloat(document.getElementById('f2-n3').value);
    resF2.textContent = sortThree(n1, n2, n3);
});

formF2.addEventListener('reset', () => resF2.textContent = '-');


// palindromo
function isPalindrome(str) {
    const cleanStr = str.replace(/\s+/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

const formF3 = document.getElementById('form-f3');
const resF3 = document.getElementById('res-f3');

formF3.addEventListener('submit', function (e) {
    e.preventDefault();
    const str = document.getElementById('f3-str').value;
    
    if (isPalindrome(str)) {
        resF3.textContent = 'Sim';
        resF3.className = 'font-medium text-green-600';
    } else {
        resF3.textContent = 'Não';
        resF3.className = 'font-medium text-red-600';
    }
});

formF3.addEventListener('reset', () => {
    resF3.textContent = '-';
    resF3.className = 'font-medium text-gray-900';
});


// subconjunto
function isSubset(word1, word2) {
    if (!word1 || !word2 || word1.trim() === '' || word2.trim() === '') {
        return 'erro';
    }
    
    if (word1.includes(word2)) {
        return 'é um subconjunto';
    }
    
    return 'não é um subconjunto';
}

const formF4 = document.getElementById('form-f4');
const resF4 = document.getElementById('res-f4');

formF4.addEventListener('submit', function (e) {
    e.preventDefault();
    const p1 = document.getElementById('f4-p1').value;
    const p2 = document.getElementById('f4-p2').value;
    
    const result = isSubset(p1, p2);
    resF4.textContent = result;
    
    if (result === 'erro') {
        resF4.className = 'font-medium text-red-600';
    } else if (result === 'é um subconjunto') {
        resF4.className = 'font-medium text-green-600';
    } else {
        resF4.className = 'font-medium text-gray-900';
    }
});

formF4.addEventListener('reset', () => {
    resF4.textContent = '-';
    resF4.className = 'font-medium text-gray-900';
});


// dia
function getDayOfWeek(dateString) {
    // ajustando timezone
    const date = new Date(dateString + 'T12:00:00');
    const days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return days[date.getDay()];
}

const formF5 = document.getElementById('form-f5');
const resF5 = document.getElementById('res-f5');

formF5.addEventListener('submit', function (e) {
    e.preventDefault();
    const dateStr = document.getElementById('f5-data').value;
    resF5.textContent = getDayOfWeek(dateStr);
});

formF5.addEventListener('reset', () => resF5.textContent = '-');
