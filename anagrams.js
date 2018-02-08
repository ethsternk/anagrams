function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

const button = document.getElementById("findButton")

button.onclick = function() {

    document.getElementById("results").innerHTML = "";

    let typedText = document.getElementById("input").value;
    let typedTextA = alphabetize(typedText);

    for (i = 0; i < words.length; i++) {

        let wordsA = alphabetize(words[i]);

        if (typedTextA == wordsA && typedText != words[i]) {

            let result = words[i];
            let newP = document.createElement("p");
            let newText = document.createTextNode(result);
            let destination = document.getElementById("results");

            newP.appendChild(newText);
            destination.appendChild(newP);
        }
    }
}