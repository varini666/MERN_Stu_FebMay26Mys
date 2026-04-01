// Feature 9: Typing Animation

function initTypingEffect() {

    const textElement = document.getElementById("typing-text");

    if (!textElement) return;

    const words = ["Developer", "MERN Stack", "Programmer"];

    let wordIndex = 0;
    let charIndex = 0;

    function type() {

        const currentWord = words[wordIndex];

        textElement.textContent = currentWord.slice(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {
            wordIndex = (wordIndex + 1) % words.length;
            charIndex = 0;
        }

        setTimeout(type, 150);
    }

    type();
}