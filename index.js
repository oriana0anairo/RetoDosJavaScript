let url = "https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/hotels"
//var itemselec;
fetch(url)
    .then(Response => Response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error));



const mostrarData = (data) => {
    console.log(data)


    data.forEach(element => {

        const newimg = document.createElement("img");
        newimg.setAttribute("src", element.thumbnail);

        const seccionnew = document.getElementById("mainSection");

        const padrediv = document.createElement("div");
        padrediv.className = "padre";

        const padreimg = document.createElement("div");
        padreimg.className = "padreImag";

        const padreconte = document.createElement("div");
        padreconte.className = "padreConte";

        const padrehead = document.createElement("div");
        padrehead.className = "padrehead";

        const newa = document.createElement('a');
        newa.textContent = element.title;
        newa.className = "title";
        newa.href = `./description.html?hotel=${element.id}`;
       // newa.onclick = () => itemselec = element;

        const newStart = document.createElement('i');
        newStart.className = "fa-solid fa-star";


        const newp = document.createElement('p');
        newp.textContent = element.description;
        newp.className = "descripcion";

        padreimg.appendChild(newimg);
        padreconte.appendChild(padrehead);
        padrehead.appendChild(newa);
        
        const estrellas = crearStar(element.rating);
        estrellas.forEach(estrella => {
            padrehead.appendChild(estrella);
        });

        padreconte.appendChild(padrehead);
        padreconte.appendChild(newp);
        padrediv.appendChild(padreimg);
        padrediv.appendChild(padreconte);
        seccionnew.appendChild(padrediv);

    });

}

function crearStar(num) {

    const estrellas = [];

    for (let i = 0; i < num; i++) {
        const newStart = document.createElement('i');
        newStart.className = "fa-solid fa-star icon";
        estrellas.push(newStart);

    }

    return estrellas;

}

//console.log(itemselec,"laskjd");