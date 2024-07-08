document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const button = document.getElementById('button');
    const body = document.body;
    const quoteSpan = document.querySelector('.quote');
    const progress = document.getElementById('generation');
    const calculatorDiv = document.querySelector('.calculator');

    const quotes = [
        "When something is important enough, you do it even if the odds are not in your favor.",
        "I think it is possible for ordinary people to choose to be extraordinary.",
        "Persistence is very important. You should not give up unless you are forced to give up.",
        "Failure is an option here. If things are not failing, you are not innovating enough.",
        "I say something, and then it usually happens. Maybe not on schedule, but it usually happens.",
        "People work better when they know what the goal is and why. It is important that people look forward to coming to work in the morning and enjoy working.",
        "I think it's very important to have a feedback loop, where you're constantly thinking about what you've done and how you could be doing it better.",
        "It's OK to have your eggs in one basket as long as you control what happens to that basket.",
        "I think we are at the dawn of a new era in commercial space exploration.",
        "I think it is possible for ordinary people to choose to be extraordinary.",
        "If something is important enough, even if the odds are against you, you should still do it.",
        "The first step is to establish that something is possible; then probability will occur.",
        "The path to the CEO's office should not be through the CFO's office, and it should not be through the marketing department. It needs to be through engineering and design.",
        "There's a tremendous bias against taking risks. Everyone is trying to optimize their ass-covering.",
        "You shouldn't do things differently just because they're different. They need to be better.",
        "I always have optimism, but I'm realistic. It was not with the expectation of great success that I started Tesla or SpaceX. It's just that I thought they were important enough to do anyway.",
        "Really pay attention to negative feedback and solicit it, particularly from friends. ... Hardly anyone does that, and it's incredibly helpful.",
        "It's very important to like the people you work with; otherwise, life [and] your job is gonna be quite miserable.",
        "Brand is just a perception, and perception will match reality over time. Sometimes it will be ahead, other times it will be behind. But brand is simply a collective impression some have about a product.",
        "I think we have a duty to maintain the light of consciousness, to make sure it continues into the future."
    ];

    function setRandomQuote() {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteSpan.textContent = randomQuote;
    }

    setRandomQuote();

    function applyEasterEgg() {
        const inputValue = input.value.toLowerCase().trim();

        switch (inputValue) {
            case 'elon':
                showElonMuskImage();
                break;
            case 'musk':
                changeBackgroundToMuskImage();
                break;
            case 'tesla':
                showMovingTesla();
                break;
            case 'space y':
                flipUpsideDown();
                break;
            case 'space x':
                flipBackToNormal();
                break;
            case 'rocket':
                rocketAnimation();
                break;
        }
    }

    function rocketAnimation() {
        calculatorDiv.classList.add('rocket');
    
        // Добавляем обработчик события, который удаляет элемент после окончания анимации
        calculatorDiv.addEventListener('animationend', () => {
            body.removeChild(calculatorDiv); // Удаляем элемент из DOM
        });
    }

    function showElonMuskImage() {
        body.innerHTML = `
            <div class="elon-musk-image">
                <img src="../src/em-calc/elon-musk-image.jpg" alt="Elon Musk" style="width: 100vw; height: 100vh;">
            </div>
        `;
    }

    function changeBackgroundToMuskImage() {
        body.style.backgroundImage = 'url(../src/em-calc/musk-background.jpg)';
        body.style.backgroundSize = 'cover';
    }

    function showMovingTesla() {
        const teslaImage = document.createElement('img');
        teslaImage.src = '../src/em-calc/tesla.png';
        teslaImage.classList.add('moving-tesla');
        body.appendChild(teslaImage);
    
        // Добавляем обработчик события, который удаляет элемент после окончания анимации
        teslaImage.addEventListener('animationend', () => {
            body.removeChild(teslaImage); // Удаляем элемент из DOM
        });
    }

    function flipUpsideDown() {
        calculatorDiv.style.transformOrigin = 'center center'
        calculatorDiv.style.transform = 'rotateX(180deg)';
    }
    
    function flipBackToNormal() {
        calculatorDiv.style.transform = 'translate(-50%, -50%)';
    }

    button.addEventListener('click', applyEasterEgg);

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            applyEasterEgg();
        }
    });

    button.addEventListener('click', () => {
        const inputValue = input.value.trim();

        if (inputValue === '') {
            alert('Please enter an equation.');
            return;
        }

        const loadingTime = inputValue.replace(/\s+/g, '').length * 2000;
        progress.max = loadingTime;
        progress.value = 0;
        quoteSpan.textContent = '';

        const interval = setInterval(() => {
            progress.value += 100;

            if (progress.value >= loadingTime) {
                clearInterval(interval);
                clearInterval(quoteInterval);
                const fakeResult = fakeCalculate(inputValue);
                input.value = fakeResult;
            }
        }, 100);

        const quoteInterval = setInterval(setRandomQuote, 3000);

        function fakeCalculate(input) {
            return input.replace(/[^0-9]/g, '');
        }
    });
});
