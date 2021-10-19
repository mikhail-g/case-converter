const click = "click";

const getText = () => document.querySelector("textarea").value;

const setText = (newText) => document.querySelector("textarea").value = newText;

document.querySelector("#upper-case").addEventListener(click,
    () => setText(getText().toUpperCase()));

document.querySelector("#lower-case").addEventListener(click,
    () => setText(getText().toLowerCase()));

const firstLetterToUpperAndRestToLowerCase = () => (_, first, rest) => first.toUpperCase() + rest.toLowerCase();

document.querySelector("#proper-case").addEventListener(click,
    () => setText(getText().replace(/(\w)([\w']*\W*)/g, firstLetterToUpperAndRestToLowerCase())));

document.querySelector("#sentence-case").addEventListener(click,
    () => setText(getText().replace(/(\w)([^.]*\.?)/g, firstLetterToUpperAndRestToLowerCase())));

const download = (fileName, text) => {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', fileName);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.querySelector("#save-text-file").addEventListener(click,
    () => download("text.txt", getText()));
