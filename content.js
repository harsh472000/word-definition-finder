window.addEventListener('mouseup', wordSelected);

function wordSelected() {
    let selectedText = window.getSelection().toString().trim();
    console.log(selectedText);

    if (selectedText.length > 0) {

        if (typeof chrome.app.isInstalled !== 'undefined') {
            chrome.runtime.sendMessage({
                text: selectedText
            });
        }

    }
}