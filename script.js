const textInput = document.getElementById("input");
const wordCountDisplay = document.getElementById("count");

function wordCounts(text){
    const trimmed = text.trim();
    if(trimmed === "") return 0;
    return trimmed.split(/\s+/).length;
}

textInput.addEventListener("input", () =>{
    const count = wordCounts(textInput.value);
    
    wordCountDisplay.textContent = count;
    
});