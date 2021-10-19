const getText = () => {
    return document.querySelector("textarea").value;
}
const setText = (newText) => {
    document.querySelector("textarea").value = newText;
}

const upperCaseButtonListener = () => {
    const updatedText = getText().toUpperCase();
    setText(updatedText);
}

const lowerCaseButtonListener = () => {
    const updatedText = getText().toLowerCase();
    setText(updatedText);
}

const properCaseButtonListener = () => {
    let sentences = getText().split('.')
    sentences.forEach((sentence, index, sentenceArr) => {
        let words = sentence.split(' ');
        words.forEach((word, index, wordArr) => {
            if (word.length > 0) wordArr[index] = word.toLowerCase()
                .replace(/\w/, x => x.toUpperCase());
        });
        sentenceArr[index] = words.join(' ');
    });
    const updatedText = sentences.join('.');
    setText(updatedText);
}

const sentencesCaseButtonListener = () => {
    let sentences = getText().split('.')
    sentences.forEach((item, index, arr) => {
        if (item.length > 0) {
            arr[index] = item.toLowerCase()
                .replace(/\w/,  x => x.toUpperCase());
        }
    });
    const updatedText = sentences.join('.');
    setText(updatedText);
}

document.querySelector("#upper-case").addEventListener("click", upperCaseButtonListener);
document.querySelector("#lower-case").addEventListener("click", lowerCaseButtonListener);
document.querySelector("#proper-case").addEventListener("click", properCaseButtonListener);
document.querySelector("#sentence-case").addEventListener("click", sentencesCaseButtonListener);
