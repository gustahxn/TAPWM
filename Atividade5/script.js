const responses = [];
const maxResponses = 45;

const form = document.getElementById('survey-form');
const elements = {
    meanAge: document.getElementById('mean-age'),
    maxAge: document.getElementById('max-age'),
    minAge: document.getElementById('min-age'),
    badCount: document.getElementById('bad-count'),
    goodPercentage: document.getElementById('good-percentage'),
    menCount: document.getElementById('men-count'),
    womenCount: document.getElementById('women-count'),
    othersCount: document.getElementById('others-count'),
    counter: document.getElementById('counter-display'),
    submitBtn: document.getElementById('submit-btn')
};

// reseta dados
const resetForm = () => {
    form.reset();
    document.getElementById('age').focus();
};

// calcula as stats a cada input
const updateStats = () => {
    if (responses.length === 0) return;

    let totalAge = 0;
    let maxAge = -Infinity;
    let minAge = Infinity;
    let badCount = 0;
    let goodCount = 0;
    let menCount = 0;
    let womenCount = 0;
    let othersCount = 0;

    for (const res of responses) {
        totalAge += res.age;

        if (res.age > maxAge) maxAge = res.age;
        if (res.age < minAge) minAge = res.age;

        if (res.opinion === 1) badCount++;
        if (res.opinion === 3 || res.opinion === 4) goodCount++;

        if (res.gender === 'masculino') menCount++;
        else if (res.gender === 'feminino') womenCount++;
        else if (res.gender === 'outros') othersCount++;
    }

    const meanAge = totalAge / responses.length;
    const goodPercentage = (goodCount / responses.length) * 100;

    elements.meanAge.textContent = `${meanAge.toFixed(1)} anos`;
    elements.maxAge.textContent = `${maxAge} anos`;
    elements.minAge.textContent = `${minAge} anos`;
    elements.badCount.textContent = badCount;
    elements.goodPercentage.textContent = `${goodPercentage.toFixed(1)}%`;
    elements.menCount.textContent = menCount;
    elements.womenCount.textContent = womenCount;
    elements.othersCount.textContent = othersCount;
    elements.counter.textContent = `respostas: ${responses.length} / ${maxResponses}`;
};

// salvando
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (responses.length >= maxResponses) {
        alert('limite máximo de respostas atingido');
        return;
    }

    const age = parseInt(document.getElementById('age').value, 10);
    const gender = document.getElementById('gender').value;
    const opinion = parseInt(document.getElementById('opinion').value, 10);

    responses.push({ age, gender, opinion });

    updateStats();
    resetForm();

    // trava o sistema e botao apos 45 entradas
    if (responses.length >= maxResponses) {
        elements.submitBtn.disabled = true;
        elements.submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
    }
});
