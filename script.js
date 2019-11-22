window.addEventListener("load", () => {
    document.getElementById("scramble").addEventListener("click", () => {
        let inputElement = document.getElementById("input");
        inputElement.value = scramble(inputElement.value);
    });
});

function scramble(text) {
    let words = text.match(/[A-za-z]{4,}/gm);
    words.forEach(word => text = text.replace(word, scrambleWord(word)));
    return text;
}

function scrambleWord(word) {
    return [word[0], ...shuffleArray(word.substr(1, word.length-2).split("")), word[word.length-1]].join("");
}

function shuffleArray(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    } return a;
}