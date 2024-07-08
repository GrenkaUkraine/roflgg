const buttonContents = [
    "Try",
    "Click Me!",
    "Hey, what are you doing?",
    "Go away!",
    "Ouch",
    "Back off",
    "Help me!!!",
    "I'm a button :)",
    "It won't work out!",
    "What's happened?",
    "I'll win!",
    "LOSER!",
    "Not so fast!",
    "Catch me if you can!",
    "Missed again!",
    "Getting closer!",
    "Almost there!",
    "You can't catch me!",
    "Keep trying!",
    "Better luck next time!",
    "Haha, missed!",
    "You wish!",
    "Can't touch this!",
    "Try harder!",
    "Outsmarted you!",
    "You call that a click?",
    "Nope, not here!",
    "Nice try!",
    "Too slow!",
    "Wrong button!",
    "I'm over here!",
    "Still missed!",
    "Epic fail!",
    "I'm invincible!",
    "Come on, really?",
    "Nice reflexes!",
    "Too bad!",
    "You blinked!",
    "Guess again!",
    "Whoops!",
    "You lost!",
    "Click faster!",
    "You can do it!",
    "Getting tired?",
    "Keep going!",
    "Don't give up!",
];

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');
    const title = document.getElementById('title');
    const background = document.getElementById('background');

    function getRandomPosition(element) {
        const x = Math.floor(Math.random() * (window.innerWidth - element.clientWidth));
        const y = Math.floor(Math.random() * (window.innerHeight - element.clientHeight));
        return { x, y };
    }

    button.addEventListener('mouseover', () => {
        const { x, y } = getRandomPosition(button);
        const newButtonContent = buttonContents[Math.floor(Math.random() * buttonContents.length)];

        button.textContent = newButtonContent;
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    });

    button.addEventListener('click', () => {
        title.textContent = 'Congratulations! You clicked the button!';
    });

    background.addEventListener('click', () => {
        document.body.classList.toggle("black");
    });
});