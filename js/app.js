//Posibles resultados de búsqueda
let books = [
    "Noticia de un Secuestro",
    "El Olvido que Seremos",
    "Lo que no tiene nombre",
    "Hamlet",
    "Orgullo y Prejuicio",
];

const resultBox = document.querySelector(".results"); //Resultados de búsqueda
const inputBox = document.querySelector(".search-bar"); // Campo de entrada de texto
const bookText = document.getElementById("bookText");

const bookTexts = {
    "Noticia de un Secuestro": "Writer: Gabriel Garcia Marquez - Description: ppp",
    "El Olvido que Seremos": "Writer: Hector Abad Facciolince - Description: ppp",
    "Lo que no tiene nombre" : "Writer: Piedad Bonnet - Description: ppp",
    "Hamlet": "Writer: William Shakespeare - Description: pp",
    "Orgullo y Prejuicio": "Writer: Jane Austen - Description: ppp",
};

//Representa resultados de búsqueda
const displayResults = function (books) { 
    const resultHTML = results.map(item => `<li onclick="selectInput(this)">${item}</li>`).join("");
    resultBox.innerHTML = `<ul>${resultHTML}</ul>`;
};
// Detecta la pulsación sobre la barra de búsqueda
inputBox.onkeyup = function () {
    let books = [];
    const input = inputBox.books.toLowerCase();

    if (input.length === 0) {
        resultBox.innerHTML = "";
        return;
    }

    books.forEach(book => {
        if (book.toLowerCase().includes(input)) {
            results.push(book);
        }
    });

    displayResults(books);
};
//Cuando el usuario hace clic sobre el elemento de música
function selectInput(item) {
    const selected = item.innerText;
    inputBox.book = selected;
    resultBox.innerHTML = "";

    if (bookTexts[selected]) {
        bookText.src = `${bookTexts[selected]}`;
        bookText.style.display = "block";
    } else {
        bookText.style.display = "none";
    }
}