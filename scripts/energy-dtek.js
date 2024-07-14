document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('#energy-cell');
    let intervalId;

    function randomizeClassForCells() {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        cells.forEach(cell => {
            cell.classList.remove('scheduled', 'scheduled-maybe', 'no-scheduled');

            const randomNumber = getRandomInt(1, 3);
            switch (randomNumber) {
                case 1:
                    cell.classList.add('scheduled');
                    break;
                case 2:
                    cell.classList.add('scheduled-maybe');
                    break;
                case 3:
                    cell.classList.add('no-scheduled');
                    break;
                default:
                    break;
            }
        });
    }

    function startInterval() {
        randomizeClassForCells();
        intervalId = setInterval(randomizeClassForCells, 100);
    }

    function stopInterval() {
        clearInterval(intervalId);

        const rows = document.querySelectorAll('tbody tr');
        rows.forEach(row => {
            let consecutiveScheduled = 0;
            let consecutiveScheduledMaybe = 0;
            const cellsConsecutiveScheduled = [];
            const cellsConsecutiveScheduledMaybe = [];

            const cellsInRow = row.querySelectorAll('#energy-cell');
            cellsInRow.forEach(cell => {
                if (cell.classList.contains('scheduled')) {
                    consecutiveScheduled++;
                    consecutiveScheduledMaybe = 0;
                    cellsConsecutiveScheduled.push(cell);
                    cellsConsecutiveScheduledMaybe.length = 0;
                } else if (cell.classList.contains('scheduled-maybe')) {
                    consecutiveScheduledMaybe++;
                    consecutiveScheduled = 0;
                    cellsConsecutiveScheduledMaybe.push(cell);
                    cellsConsecutiveScheduled.length = 0;
                } else {
                    consecutiveScheduled = 0;
                    consecutiveScheduledMaybe = 0;
                    cellsConsecutiveScheduled.length = 0;
                    cellsConsecutiveScheduledMaybe.length = 0;
                }

                if (consecutiveScheduled === 5) {
                    cellsConsecutiveScheduled.forEach(cell => {
                        if (cell.classList.contains('scheduled')) {
                            cell.classList.remove('scheduled');
                            cell.classList.add('scheduled-to-maybe');
                            setTimeout(() => {
                                cell.classList.remove('scheduled-to-maybe');
                                cell.classList.add('scheduled-maybe');
                            }, 3000);
                        }
                    });
                    
                    cellsConsecutiveScheduled.length = 0;
                }
                if (consecutiveScheduledMaybe === 5) {
                    cellsConsecutiveScheduledMaybe.forEach(cell => {
                        if (cell.classList.contains('scheduled-maybe')) {
                            cell.classList.remove('scheduled-maybe');
                            cell.classList.add('scheduled-maybe-to-no');
                            setTimeout(() => {
                                cell.classList.remove('scheduled-maybe-to-no');
                                cell.classList.add('no-scheduled');
                            }, 3000);
                        }
                    });
                    
                    cellsConsecutiveScheduledMaybe.length = 0;
                }
            });
        });
    }

    document.getElementById('stop-button').addEventListener('click', stopInterval);

    startInterval();
});
