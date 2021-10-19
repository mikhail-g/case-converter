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
const firstAlphaUpper = (item) => item.length > 0 ? item.toLowerCase().replace(/\w/, x => x.toUpperCase()) : item;

const properCaseButtonListener = () => {
    let updatedText = getText().split('.')
        .map(sentence => sentence.length > 0 ? sentence.split(' ').map(firstAlphaUpper).join(' ') : sentence)
        .join('.');
    setText(updatedText);
}

const sentencesCaseButtonListener = () => {
    let updatedText = getText().split('.').map(firstAlphaUpper).join('.');
    setText(updatedText);
}

document.querySelector("#upper-case").addEventListener("click", upperCaseButtonListener);
document.querySelector("#lower-case").addEventListener("click", lowerCaseButtonListener);
document.querySelector("#proper-case").addEventListener("click", properCaseButtonListener);
document.querySelector("#sentence-case").addEventListener("click", sentencesCaseButtonListener);
