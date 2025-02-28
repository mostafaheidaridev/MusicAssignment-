const form = document.getElementById("cd-form");
const list = document.getElementById("cd-list");
const template = document.getElementById("cd-template");


document.addEventListener("DOMContentLoaded", () => {
    (JSON.parse(localStorage.getItem("cds")) || []).forEach(addCD);
});


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const cd = {
        author: document.getElementById("author").value,
        title: document.getElementById("title").value,
        year: document.getElementById("year").value,
    };

    if (cd.author && cd.title && cd.year) { 
        addCD(cd);
        saveCD(cd);
        form.reset();
    }
});


function addCD(cd) {
    const row = template.content.cloneNode(true);
    row.querySelector(".cd-author").textContent = cd.author;
    row.querySelector(".cd-title").textContent = cd.title;
    row.querySelector(".cd-year").textContent = cd.year;

    row.querySelector(".delete-cd").addEventListener("click", (e) => {
        removeCD(e, cd);
    });

    list.appendChild(row);
}


const saveCD = (cd) => {
    const cds = JSON.parse(localStorage.getItem("cds")) || [];
    localStorage.setItem("cds", JSON.stringify([...cds, cd]));
};

function removeCD(e, cd) {
    e.target.closest("tr").remove();
    const cds = JSON.parse(localStorage.getItem("cds")) || [];
    localStorage.setItem("cds", JSON.stringify(cds.filter(c => JSON.stringify(c) !== JSON.stringify(cd))));
}

