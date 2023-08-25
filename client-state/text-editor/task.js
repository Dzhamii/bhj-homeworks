const editor = document.getElementById("editor");

const savedValue = localStorage.getItem("editorValue");
if (savedValue) {
    editor.value = savedValue;
}

editor.addEventListener("input", function () {
    localStorage.setItem("editorValue", editor.value);
});

const clearButton = document.createElement("button");
clearButton.textContent = "Очистить содержимое";

editor.parentNode.insertBefore(clearButton, editor.nextSibling);

clearButton.addEventListener("click", function () {
    editor.value = '';
    localStorage.removeItem("editorValue");
});
