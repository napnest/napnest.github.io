const surpriseButton = document.getElementById('surprise-button');
const surpriseContainer = document.getElementById('surprise-container');

surpriseButton.addEventListener('click', () => {
    surpriseContainer.style.display = 'block';
    const surpriseText = `${getRandomFact()}.`;
    surpriseContainer.innerHTML = surpriseText;
});

function getRandomFact() {
    const facts = ['Ошибка найдена!', 'Баги не существуют, есть только неоткрытые возможности', 'Тестирование - это не только поиск ошибок, но и поиск смысла жизни', 'Ошибка - это не конец, а новый шанс', 'Код - это не только строки, но и история', 'Ошибка - это не проблема, а возможность научиться','Код должен быть написан так, как если бы его читал твой враг','Тестирование - это не только работа, но и вызов'];
    return facts[Math.floor(Math.random() * facts.length)];
}