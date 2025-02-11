const story = {
    start: {
        text: "You wake up in a mysterious forest. Two paths lie ahead.",
        choices: [
            { text: "Enter the dark cave", next: "cave" },
            { text: "Follow the enchanted river", next: "river" }
        ]
    },
    cave: {
        text: "You enter a dark cave and see a sleeping dragon.",
        choices: [
            { text: "Sneak past the dragon", next: "treasure" },
            { text: "Wake the dragon", next: "danger" }
        ]
    },
    river: {
        text: "You walk along the river and find a boat.",
        choices: [
            { text: "Row the boat", next: "village" },
            { text: "Follow the river on foot", next: "lost" }
        ]
    },
    treasure: {
        text: "You successfully sneak past the dragon and find a treasure chest! You win!",
        choices: []
    },
    danger: {
        text: "The dragon wakes up and roars! You barely escape with your life. Try again?",
        choices: [{ text: "Restart", next: "start" }]
    },
    village: {
        text: "The boat takes you to a hidden village where you find shelter and food. You win!",
        choices: []
    },
    lost: {
        text: "You wander along the river but get lost. Try again?",
        choices: [{ text: "Restart", next: "start" }]
    }
};

let currentState = "start";

function renderQuestion() {
    const questionContainer = document.getElementById("question");
    const answersContainer = document.getElementById("answers");

    questionContainer.textContent = story[currentState].text;
    answersContainer.innerHTML = "";

    story[currentState].choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => {
            currentState = choice.next;
            renderQuestion();
        };
        button.setAttribute("aria-label", `Option ${index + 1}: ${choice.text}`);
        button.setAttribute("tabindex", "0");
        answersContainer.appendChild(button);
    });
}


document.addEventListener("DOMContentLoaded", renderQuestion);
