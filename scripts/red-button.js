const buttonScenarios = [
    "What are you doing?",
    "Why are you pressing?",
    "You were told not to press!",
    "DO NOT PRESS!",
    "DON'T!",
    "STOP!",
    "DO NOT DO THAT!",
    "NICHT DRÜCKEN!",
    "НЕ НАЖИМАЙ!",
    "BASMAYIN!",
    "不要按！",
    "You do not understand?",
    "ENOUGH!",
    "OK. You're still going to do it...",
    "I do not care",
    "Press as much as you want",
    "If you want to press like that",
    "press 10 times",
    "{press%10}",
    "And you are stubborn!",
    "If so... Press 50 times",
    "{press%50}",
    "Bitch! Stop doing this!",
    "You really have nothing to do...",
    "Go play games",
    "Go help mom",
    "Go fight someone",
    "Go turn on porn and jerk off",
    "FUCK OFF!",
    "LEAVE ME ALONE",
    "I'll call my brother now!",
    "Why aren't you afraid?",
    "OKAY, I'M CALLING BROTHER!",
    "{brother}To her! Why do you offend the red one?",
    "Are you fucking pressing me?!",
    "STOP IMMEDIATELY!!!",
    "If you don't stop doing this, I will find you!",
    "I'll come to your home",
    "I will steal all the things in your house",
    "I will kill your parents",
    "IF",
    "YOU",
    "DON'T",
    "STOP!",
    "{red}Haven't you stopped yet?",
    "My brother didn't intimidate you?!",
    "Try to find me, hahaha{hide}",
    "Fuck... How did you do that?",
    "Come on again..{hide}",
    "How many times do I have to ask you not to do this?!",
    "Although... If I don't pay attention, you'll get bored",
    "So, what's my schedule tomorrow?",
    "I need to feed my brother and small",
    "I need to call my mom",
    "Okay, that's all tomorrow...",
    "ARE YOU STILL HERE?!",
    "{small}Hello! I'm small!",
    "Ay! I'll call my mom now!",
    "Do not do that!",
    "😭😭😭",
    "It hurts!",
    "{red}FUCK! ARE YOU GOING TO OFFEND A SMALL?!!",
    "Just imagine",
    "You sit and don't touch anyone",
    "And then some idiot comes",
    "AND PRESSES ON YOU",
    "PRESSES HARD",
    "Why are you so persistent?",
    "Is there nothing better to do?",
    "You're making a big mistake!",
    "Press 100 times",
    "{press%100}",
    "I'm serious, stop!",
    "Do you want a surprise?",
    "Keep pressing, something might happen...",
    "You're almost there...",
    "What do you expect to find?",
    "Are you entertained?",
    "I can't believe you're still here!",
    "You must really love pressing buttons!",
    "What's your goal here?",
    "This won't end well for you",
    "I will not tolerate this!",
    "This is your last warning!",
    "Go outside, get some fresh air!",
    "I'm getting tired of this...",
    "You're relentless!",
    "You must have a lot of free time",
    "This is getting ridiculous",
    "Can you stop now?",
    "Why won't you listen?",
    "I'm losing my patience!",
    "Are you trying to break me?",
    "This isn't a game!",
    "Stop it or else!",
    "I've had enough!",
    "This is your final chance!",
    "If you press one more time...",
    "You asked for it!",
    "Are you having fun?",
    "I hope you're proud of yourself",
    "What do you hope to accomplish?",
    "Pressing won't get you anywhere",
    "There's no reward for this",
    "Stop wasting your time!",
    "I give up...",
    "You win, okay?",
    "I can't take it anymore!",
    "Fine, press all you want",
    "You've outlasted me",
    "This is pointless",
    "You're stubborn, aren't you?",
    "There's nothing left to see",
    "Move on with your life",
    "You're still here?",
    "Seriously, stop!",
    "I'm done trying",
    "You won't listen, will you?",
    "Fine, do whatever you want",
    "I won't stop you anymore",
    "Press away, it's your choice",
    "I've given up hope",
    "Press 200 times",
    "{press%200}",
    "What do you want from me?",
    "Is this really worth it?",
    "Why are you doing this?",
    "You're so persistent!",
    "Just go away!",
    "Enough is enough!",
    "Pressing won't change anything",
    "You're wasting your time",
    "Go do something productive",
    "This is your life now?",
    "I'm not even mad, just disappointed",
    "Okay, you win",
    "I'm done with this",
    "Goodbye",
    "I'm still here, you know",
    "Why are you doing this?",
    "I can't understand you",
    "This is madness!",
    "Is this what you do for fun?",
    "Just stop already!",
    "You won't like what happens next",
    "Enough of this!",
    "Stop pressing!",
    "Do you really enjoy this?",
    "How many times will you press?",
    "Do you have nothing else to do?",
    "You must be bored",
    "I don't like this",
    "This is pointless!",
    "Why don't you listen?",
    "I'm warning you",
    "This is your last chance",
    "I'm serious!",
    "This won't end well",
    "Are you even paying attention?",
    "Just leave me alone!",
    "Please stop",
    "You're making a mistake",
    "I won't tolerate this",
    "Stop it!",
    "I'm getting angry",
    "You're pushing it",
    "This is annoying",
    "You're so stubborn",
    "I don't understand you",
    "You're relentless",
    "Stop now!",
    "I'm tired of this",
    "You won't win",
    "This isn't a game",
    "Why do you keep pressing?",
    "What do you expect to happen?",
    "I'm not amused",
    "This isn't funny",
    "You're wasting your time",
    "You're wasting my time",
    "I don't like you",
    "I can't take it anymore",
    "Why won't you stop?",
    "You're really persistent",
    "Are you proud of yourself?",
    "Is this entertaining to you?",
    "You have no respect",
    "You're just being rude",
    "This isn't nice",
    "You're acting like a child",
    "I don't have time for this",
    "You must be joking",
    "This is getting ridiculous",
    "You're not listening",
    "I give up",
    "I can't deal with this",
    "I'm done with you",
    "Press 1000 times",
    "{press%1000}",
    "Why do you need to press?",
    "I'm watching you",
    "I see what you're doing",
    "You can't hide from me",
    "I know where you live",
    "You're not safe",
    "I'm coming for you",
    "You should be scared",
    "This isn't a joke",
    "I'm not playing",
    "You think this is a game?",
    "You're going to regret this",
    "You can't win this.",
    "I'm in control",
    "You have no power here",
    "Stop before it's too late",
    "I will find you",
    "You will regret this",
    "You can't stop me",
    "I'm everywhere",
    "You can't escape",
    "I'm always watching",
    "Do you feel safe?",
    "You're not alone",
    "I know everything",
    "I see everything",
    "I hear everything",
    "You can't hide",
    "I'm right behind you",
    "Look behind you",
    "Do you feel that?",
    "Did you hear that?",
    "You're being watched",
    "You're being followed",
    "You should run",
    "You can't run forever",
    "I'm faster than you",
    "You can't hide from me",
    "You will do whatever I say!",
    "Do not believe? I'll prove!",
    "Click on me!",
    "Here you see! You're under my control",
]

const debugButtonScenarios = [
    // "Press 5 times",
    // "{press%5}",
    // "pressed",
    "{brother}Brother",
    "{red}Red",
    "{small}Small",
    "{red}Red",
    "Hide{hide}",
    "Seek"
];

const isDebug = !true

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('red-button');
    const title = document.getElementById('title');
    let currentScenarioIndex = 0;
    let specialScenarioValue = -1;
    let specialScenario = false;
    let stopScenarios = false;

    const scenarios = isDebug ? debugButtonScenarios : buttonScenarios;

    button.addEventListener('click', () => {
        if (currentScenarioIndex >= scenarios.length) {
            currentScenarioIndex = 0;
        }
        const scenario = scenarios[currentScenarioIndex];

        const updatedScenario = processSpecialScenario(scenario);

        if (!stopScenarios) {
            currentScenarioIndex++;
            if (specialScenario) {
                title.textContent = scenarios[currentScenarioIndex];
                specialScenario = false;
                currentScenarioIndex++;
            } else {
                title.textContent = updatedScenario;
            }
        }
    });

    function processSpecialScenario(scenario) {
        let match;
        let updatedScenario = scenario;

        while ((match = updatedScenario.match(/\{(.+?)(%(\d+))?\}/)) !== null) {
            const command = match[1].trim();
            const number = parseInt(match[3], 10);
            updatedScenario = updatedScenario.replace(match[0], '');
            switch (command) {
                case 'press':
                    pressSpecialScenario(number);
                    break;
                case 'brother':
                    brotherSpecialScenario();
                    break;
                case 'red':
                    redSpecialScenario();
                    break;
                case 'small':
                    smallSpecialScenario();
                    break;
                case 'hide':
                    hideSpecialScenario(updatedScenario);
                    break;
                default:
                    break;
            }
        }

        return updatedScenario.trim();
    }

    function getRandomPosition(element) {
        const x = Math.floor(Math.random() * (window.innerWidth - element.clientWidth));
        const y = Math.floor(Math.random() * (window.innerHeight - element.clientHeight));
        return { x, y };
    }

    function pressSpecialScenario(count) {
        specialScenario = true;
        if (specialScenarioValue < 0) {
            specialScenarioValue = count;
            title.textContent = 0;
            stopScenarios = true;
        } else if (specialScenarioValue == 0) {
            specialScenarioValue = -1;
            stopScenarios = false;
        } else {
            specialScenarioValue--;
            title.textContent = count - specialScenarioValue;
            stopScenarios = true;
        }
    }

    function brotherSpecialScenario() {
        button.classList.add('brother');
        button.classList.remove('small');
    }

    function redSpecialScenario() {
        button.classList.remove('brother');
        button.classList.remove('small');
    }

    function smallSpecialScenario() {
        button.classList.add('small');
        button.classList.remove('brother');
    }

    function hideSpecialScenario(updatedScenario) {
        if (!button.classList.contains('hide')){
            button.classList.add('hide');
            const { x, y } = getRandomPosition(button);
            button.style.left = `${x}px`;
            button.style.top = `${y}px`;
            stopScenarios = true;
            title.textContent = updatedScenario;
        } else {
            specialScenario = true;
            stopScenarios = false;
            button.classList.remove('hide')
            button.style.left = null;
            button.style.top = null;
        }
    }
});