
let backgroundPage = chrome.extension.getBackgroundPage();
let word = backgroundPage.word;

// console.log(word)

let url = `https://owlbot.info/api/v4/dictionary/${word}`;
console.log(url)
let params = {
    method: 'GET',
    headers: {
        'Authorization': 'Token ' + '4ba8d3a45ed0191f9e805f2ef4abcba500d49cf9'
    }
}

fetch(url, params)
    .then((res) => {
        return res.json();
    })
    .then((json) => {

        let setdef = document.getElementById('definition');
        let setword = document.getElementById('word');
        setdef.innerText = `" ${json.definitions[0].definition} "` 
        setword.innerText = json.word
    })
    .catch((err) => {
        let seterror = document.getElementById('word');
        seterror.innerText = "Definition Not Found"
    });
