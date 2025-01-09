//Posibles resultados de búsqueda
const SearchList = [
    "Noticia de un Secuestro",
    "El Olvido que Seremos",
    "Lo que no tiene nombre",
    "Hamlet",
    "Orgullo y Prejuicio",
];

const resultBox = document.querySelector(".results"); //Resultados de búsqueda
const inputBox = document.querySelector(".search-bar"); // Campo de entrada de texto
const bookText = document.getElementById("bookText");

//Texto que aparecerá de acuerdo al libro seleccionado
const bookTexts = {
    "Noticia de un Secuestro": "Writer: Gabriel Garcia Marquez - Description: News of a Kidnapping is a book by Gabriel García Márquez that chronicles the kidnapping of ten Colombians in 1990. The book is a work of non-fiction that describes the events of the kidnappings, the pressure on the government, and the impact on the families of the hostages.",
    "El Olvido que Seremos": "Writer: Hector Abad Facciolince - Description: Forgotten We'll Be is a book and film that tells the story of Héctor Abad Gómez, a doctor and human rights activist in 1970s Medellín, Colombia. The story is told by his son, Héctor Abad Faciolince.",
    "Lo que no tiene nombre" : "Writer: Piedad Bonnet - Description: It is a book that translates to That Which Has No Name in English. It is a narrative and poetic testimony of the author's experience of losing her sick child.",
    "Hamlet": "Writer: William Shakespeare - Description: In Hamlet, Prince Hamlet is a young man who is thoughtful, reflective, and melancholy. He is also cynical, bitter, and full of hatred for his uncle. Hamlet is often indecisive, but can also be rash and impulsive. ",
    "Orgullo y Prejuicio": "Writer: Jane Austen - Description: Pride and Prejudice is a romantic comedy novel by Jane Austen that was published in 1813. It is a story about the love story between Elizabeth Bennet and Fitzwilliam Darcy. The novel is considered a prototype of the romantic comedy genre.",
};

//Representa resultados de búsqueda
const displayResults = function (result) { 
    const resultHTML = result.map(function (bookText) {return `<li onclick=selectInput(this)>${bookText}</li onclick=selectInput>`;});
    resultBox.innerHTML = `<ul>${resultHTML}</ul>`;
};
// Detecta la pulsación sobre la barra de búsqueda
inputBox.onkeyup = function (e) {
    let result = [];
    const input = inputBox.value.toLowerCase();

    if (input.length === 0) {
        resultBox.innerHTML = "";
        return;
    }

    if (input.length) {
        result = SearchList.filter ((bookText) => {return bookText.toLowerCase().includes(input);});

        displayResults(result);
    }
};
//Cuando el usuario hace clic sobre el libro desplegará la información de acuerdo al libro
function selectInput(item) {
    const selected = item.innerText;
    inputBox.value = selected;
    resultBox.innerHTML = "";

    if (bookTexts[selected]) {
        bookText.textContent = `${bookTexts[selected]}`;
        bookText.style.display = "block";
    } else {
        bookText.style.display = "none";
    }
}