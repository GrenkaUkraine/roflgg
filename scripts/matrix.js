const matrixContainer = document.querySelector('.matrix-container');
const columns = Math.floor(window.innerWidth / 20); // Количество столбцов символов

// Создание и заполнение строк случайными символами
const createMatrixText = () => {
    let matrixText = '';
    const symbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>!@#$%^&*';

    for (let i = 0; i < columns * 2; i++) {
        matrixText += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }

    return matrixText;
};

// Обновление анимации через интервал
const updateMatrix = () => {
    matrixContainer.textContent = createMatrixText();
};

// Запуск обновления анимации
setInterval(updateMatrix, 100); // Интервал в миллисекундах для обновления анимации
