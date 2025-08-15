import movies from "./movies.js";
console.log(movies);
const card = document.getElementById("card");
const input = document.getElementById("input");
const select = document.getElementById("select")
const ota = document.getElementById("ota")


function kopqil(malumot) {
    ota.innerHTML = "";
    malumot.map((p) => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
         <img src="./kino.jpg"   alt="logo">
    <h2>${p.title}  <br>
       ${p.director}</h2>
        <p>${p.score} </p>
        <p>${p.year}</p>
        <p>${p.duration}</p>
        <p>${p.genre}</p>
        <button id="btn">More info</button>
        `
        ota.appendChild(div);
    });
}
kopqil(movies);

input.addEventListener("input", () => {
    const a = movies.filter((p) =>
        p.director.toLowerCase().includes(input.value.toLowerCase())
    );
    kopqil(a);
});
select.addEventListener("change", () => {
    if (select.value == "All") {
        kopqil(movies);
    } else {
        const a = movies.filter((p) => p.genre.includes(select.value));
        kopqil(a);
    };
});
const sort = document.getElementById("sort");
sort.addEventListener("change", () => {
    if (sort.value == "A-Z") {
        let a = movies.sort((p1, p2) => p1.title.localeCompare(p2.title));
        kopqil(a);

    } else {
        let a = movies.sort((p1, p2) => p2.title.localeCompare(p1.title));
        kopqil(a);
    };
});