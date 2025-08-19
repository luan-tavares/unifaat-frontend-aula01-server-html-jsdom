

//document.addEventListener("DOMContentLoaded", async () => {
const names = [
    "Ana Martins",
    "Carlos Souza",
    "Fernanda Lima",
    "João Oliveira",
    "Mariana Costa",
    "Pedro Almeida",
    "Camila Rocha",
    "Lucas Fernandes",
    "Beatriz Gomes"
];


// Obter os elementos 
const sectionListElement = document.getElementById("list-container");
const inputListAddElement = document.getElementById("list-add");
const buttonListAddElement = document.getElementsByClassName("btn")[0];

console.log(sectionListElement, inputListAddElement, buttonListAddElement)


// Criar um ELEMENTO ul - elemento que engloba uma lista 
const ulElement = document.createElement("ul");
// Adicionar uma classe - JEITO NÃO RECOMENDADO
ulElement.setAttribute("class", "list-names");
// AQUI O ELEMENTO JÁ EXISTE, JÁ ESTÁ REFERENCIADO EM UMA CONSTANTE.
// PORÉM NÃO FOI INSERIDO NA ÁVORE DOM
console.log(ulElement);


/** iNSERIR ENO NÓ DO CONTAINER PRINCIPAL DA ÁRVORE DOM */
sectionListElement.append(ulElement);

/*
names.forEach((name) => {
    // Criar o elemento li, item de uma lista
    const liElement = document.createElement("li");

    // Adicionar um conteúdo texto no elemento li
    liElement.innerText = name;

    console.log(liElement);

    // Criar o botao excluir
    const buttonDeleteElement = document.createElement("button");
    buttonDeleteElement.innerHTML = "<strong>Excluir</strong>";
    buttonDeleteElement.addEventListener("click", (event) => {
        onDelete(event);
    });

    console.log(buttonDeleteElement);

    liElement.append("   ", buttonDeleteElement);

    // Adicionar na árvore DOM, no nosso ul principal
    ulElement.append(liElement);
});



buttonListAddElement.addEventListener("click", (event) => {
    event.preventDefault();

    const inputValue = inputListAddElement.value;

    if (inputValue === "") {
        return;
    }

    // Criar o elemento li, item de uma lista
    const liElement = document.createElement("li");

    const buttonDeleteElement = document.createElement("button");

    buttonDeleteElement.addEventListener("click", (event) => {
        onDelete(event);
    });


    buttonDeleteElement.innerHTML = "<strong>Excluir</strong>";

    // Adicionar um conteúdo texto no elemento li
    liElement.append(inputValue, buttonDeleteElement);

    // Adicionar na árvore DOM, no nosso ul principal
    ulElement.append(liElement);

    inputListAddElement.value = "";

});

function onDelete(event) {
   //CODAR
}
*/


//});