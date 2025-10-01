const textInput = document.getElementById("input");
const wordCountDisplay = document.getElementById("count");
const fontSelect = document.getElementById("font-select");
const fontSizeSelect = document.getElementById("fontSize-select");

function wordCounts(text){
    const trimmed = text.trim();
    if(trimmed === "") return 0;
    return trimmed.split(/\s+/).length;
}

textInput.addEventListener("input", () =>{
    const count = wordCounts(textInput.value);
    
    wordCountDisplay.textContent = count;
});

fontSelect.addEventListener("change", () =>{
    textInput.style.fontFamily = fontSelect.value;
});
fontSizeSelect.addEventListener("change", () => {
    textInput.style.fontSize = fontSizeSelect.value;
})