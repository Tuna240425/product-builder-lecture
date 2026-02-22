document.addEventListener('DOMContentLoaded', () => {
    const lottoNumbersContainer = document.getElementById('lotto-numbers');
    const generateBtn = document.getElementById('generate-btn');

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function getBallColor(number) {
        if (number <= 10) return '#fbc400'; // Yellow
        if (number <= 20) return '#69c8f2'; // Blue
        if (number <= 30) return '#ff7272'; // Red
        if (number <= 40) return '#aaa';    // Grey
        return '#b0d840'; // Green
    }

    function displayNumbers(numbers) {
        lottoNumbersContainer.innerHTML = '';
        for (const number of numbers) {
            const ball = document.createElement('div');
            ball.classList.add('lotto-ball');
            ball.textContent = number;
            ball.style.backgroundColor = getBallColor(number);
            lottoNumbersContainer.appendChild(ball);
        }
    }

    function generateAndDisplay() {
        const numbers = generateLottoNumbers();
        displayNumbers(numbers);
    }

    generateBtn.addEventListener('click', generateAndDisplay);

    // Initial generation
    generateAndDisplay();
});
