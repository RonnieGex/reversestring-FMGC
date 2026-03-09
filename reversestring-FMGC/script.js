const textInput = document.getElementById("textInput");
const reverseButton = document.getElementById("reverseButton");
const copyButton = document.getElementById("copyButton");
const resultText = document.getElementById("resultText");
const statusMessage = document.getElementById("statusMessage");

function reverseString(value) {
    let reversed = "";

    for (let index = value.length - 1; index >= 0; index -= 1) {
        reversed += value[index];
    }

    return reversed;
}

function setStatus(message) {
    statusMessage.textContent = message;
}

function renderResult() {
    const inputValue = textInput.value;
    const reversedValue = reverseString(inputValue);

    if (inputValue.length === 0) {
        resultText.innerHTML = '<span class="placeholder">Your reversed text will appear here.</span>';
        setStatus("");
    } else {
        resultText.textContent = reversedValue;
    }

    reverseButton.classList.toggle("button-hidden", inputValue.length <= 3);
}

async function copyResult() {
    const inputValue = textInput.value;
    const reversedValue = reverseString(inputValue);

    if (!inputValue.length) {
        setStatus("Nothing to copy yet.");
        return;
    }

    try {
        await navigator.clipboard.writeText(reversedValue);
        setStatus("Copied to clipboard.");
    } catch (error) {
        setStatus("Copy failed. Please try again.");
        console.error("Clipboard copy failed:", error);
    }
}

textInput.addEventListener("input", () => {
    setStatus("");
    renderResult();
});

textInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        renderResult();
    }
});

reverseButton.addEventListener("click", () => {
    setStatus("");
    renderResult();
});

copyButton.addEventListener("click", copyResult);

renderResult();