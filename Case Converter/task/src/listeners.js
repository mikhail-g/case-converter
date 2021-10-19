const getText = () => document.querySelector("textarea").value;

const setText = (newText) => document.querySelector("textarea").value = newText;

const upperCaseButtonListener = () => {
    const updatedText = getText().toUpperCase();
    setText(updatedText);
}

const lowerCaseButtonListener = () => {
    const updatedText = getText().toLowerCase();
    setText(updatedText);
}

const firstLetterToUpperAndRestToLowerCase = () => (_, first, rest) => first.toUpperCase() + rest.toLowerCase();

const properCaseButtonListener = () => {
    let updatedText = getText().replace(/(\w)([\w']*\W*)/g, firstLetterToUpperAndRestToLowerCase());
    setText(updatedText);
}

const sentencesCaseButtonListener = () => {
    let updatedText = getText().replace(/(\w)([^.]*\.?)/g, firstLetterToUpperAndRestToLowerCase());
    setText(updatedText);
}

const download = (fileName, text) => {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', fileName);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

const saveTextFileListener = () => {
    download("text.txt", getText())
}

document.querySelector("#upper-case").addEventListener("click", upperCaseButtonListener);
document.querySelector("#lower-case").addEventListener("click", lowerCaseButtonListener);
document.querySelector("#proper-case").addEventListener("click", properCaseButtonListener);
document.querySelector("#sentence-case").addEventListener("click", sentencesCaseButtonListener);
document.querySelector("#save-text-file").addEventListener("click", saveTextFileListener);
