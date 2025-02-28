


const form = document.getElementById("cd-form");
const list = document.getElementById("cd-list");
const template = document.getElementById ("cd-template");


form.addEventListener("submit", (event) => {
    event.preventDefault();


    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value;

    const newRow = template.content.cloneNode(true);
    newRow.querySelector (".cd-author").textContent = author;
    newRow.querySelector (".cd-title"). textContent = title;
    newRow.querySelector (".cd-year").textContent = year;


    newRow.querySelector(".delete-cd").addEventListener ("click", (e)=> {
        e.target.closest  ("tr").remove();
    })

    list.appendChild(newRow);
    form.reset();
})


