document.addEventListener('DOMContentLoaded', () => {
    const tapCoin = document.getElementById('tap-coin');
    const balanceText = document.getElementById('balance');
    const energyText = document.getElementById('energy');
    const progress = document.getElementById('new-level');
    const profitPerTapText = document.getElementById('profit-per-tap');
    const profitPerHourText = document.getElementById('profit-per-hour');
    const currentLevelName = document.getElementById('current-level-name');
    const currentLevelProgress = document.getElementById('current-level-progress');
    const sharkImage = document.getElementById('shark-image');
    const nextLevelCostText = document.getElementById('next-level-cost');

    const levels = [
        { name: 'Baby', profitPerTap: 1, maxEnergy: 300, nextLevelCost: 1000, image: 'baby-shark.png' },
        { name: 'Teen', profitPerTap: 2, maxEnergy: 500, nextLevelCost: 10000, image: 'teen-shark.png' },
        { name: 'Worker', profitPerTap: 3, maxEnergy: 800, nextLevelCost: 100000, image: 'worker-shark.png' },
        { name: 'Rich', profitPerTap: 4, maxEnergy: 1000, nextLevelCost: 1000000, image: 'rich-shark.png' },
        { name: 'Billionaire', profitPerTap: 5, maxEnergy: 3000, nextLevelCost: Infinity, image: 'billionaire-shark.png' }
    ];

    const energyRestoreInterval = 1.5 * 1000; // Energy restoration interval in milliseconds (5 seconds)

    let balance = 0;
    let energy = 300;
    let maxEnergy = 300;
    let profitPerTap = 1;
    let profitPerHour = 0;
    let currentLevel = 0;
    let nextLevelCost = 1000;

    function saveGameState() {
        const gameState = {
            balance,
            energy,
            maxEnergy,
            profitPerTap,
            profitPerHour,
            currentLevel,
            nextLevelCost,
            lastSaved: Date.now()
        };
        localStorage.setItem('sharkKombatBotState', JSON.stringify(gameState));
    }

    function loadGameState() {
        const savedState = JSON.parse(localStorage.getItem('sharkKombatBotState'));
        if (savedState) {
            const timeDiff = (Date.now() - savedState.lastSaved) / 1000; // in seconds
            balance = savedState.balance;
            energy = Math.min(savedState.energy + Math.floor(timeDiff / (energyRestoreInterval / 1000)), savedState.maxEnergy);
            maxEnergy = savedState.maxEnergy;
            profitPerTap = savedState.profitPerTap;
            profitPerHour = savedState.profitPerHour;
            currentLevel = savedState.currentLevel;
            nextLevelCost = savedState.nextLevelCost;
            updateUI();
        }
    }

    function updateUI() {
        balanceText.textContent = balance;
        energyText.textContent = `${energy} / ${maxEnergy}`;
        profitPerTapText.textContent = `+${profitPerTap}`;
        profitPerHourText.textContent = `+${profitPerHour}`;
        currentLevelName.textContent = levels[currentLevel].name;
        currentLevelProgress.textContent = `${currentLevel + 1} / 5`;
        progress.max = levels[currentLevel].nextLevelCost;
        progress.value = balance;
        sharkImage.src = `../../src/shark-kombat-bot/${levels[currentLevel].image}`;
        nextLevelCostText.textContent = levels[currentLevel].nextLevelCost === Infinity ? 'Max' : levels[currentLevel].nextLevelCost.toLocaleString();
    }

    function checkLevelUp() {
        if (balance >= levels[currentLevel].nextLevelCost && currentLevel < levels.length - 1) {
            currentLevel++;
            balance = 0;
            maxEnergy = levels[currentLevel].maxEnergy;
            energy = maxEnergy;
            profitPerTap = levels[currentLevel].profitPerTap;
            nextLevelCost = levels[currentLevel].nextLevelCost;
            updateUI();
        }
    }

    tapCoin.addEventListener('click', () => {
        if (energy > 0) {
            balance += profitPerTap;
            energy--;
            balanceText.textContent = balance;
            energyText.textContent = `${energy} / ${maxEnergy}`;
            progress.value = balance;
            checkLevelUp();
            saveGameState();
        }
    });

    loadGameState();
    updateUI();

    setInterval(() => {
        if (energy < maxEnergy) {
            energy++;
            energyText.textContent = `${energy} / ${maxEnergy}`;
            saveGameState();
        }
    }, energyRestoreInterval);

    setInterval(() => {
        profitPerHour = balance / ((Date.now() - JSON.parse(localStorage.getItem('sharkKombatBotState')).lastSaved) / (1000 * 60 * 60));
        profitPerHourText.textContent = `+${profitPerHour.toFixed(2)}`;
        saveGameState();
    }, 60000);
});
