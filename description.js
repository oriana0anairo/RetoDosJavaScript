

const URLactual = window.location.href;

const array = URLactual.split("=");

const data = array[1];

var newcoments = [];

let url = "https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/hotels/" + data;
fetch(url)
    .then(Response => Response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error));

let URLcomments = "https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/hotels/" + data + "/reviews";
fetch(URLcomments)
    .then(Response => Response.json())
    .then(datacomments => mostrarDatacomments(datacomments))
    .catch(errorcomments => console.log(errorcomments));



const mostrarData = (data) => {


    const newSeption = document.getElementById("sectionDescription");

    const newImgdes = document.createElement("img");
    newImgdes.setAttribute("src", data.thumbnail);

    const contpadre = document.createElement("section")

    const newTitledes = document.createElement("h1");
    newTitledes.textContent = data.title;

    const newDescription = document.createElement("p");
    newDescription.textContent = data.description;

    const contImg = document.createElement("div");
    const stardiv = document.createElement("div");

    contImg.appendChild(newImgdes);
    newSeption.appendChild(contImg);

    contpadre.appendChild(newTitledes);

    const estrellas = crearStar(data.rating);
    estrellas.forEach(estrella => {
        stardiv.appendChild(estrella);
    });
    contpadre.appendChild(stardiv);
    contpadre.appendChild(newDescription);
    newSeption.appendChild(contpadre);

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

const mostrarDatacomments = (datacomments) => {

    newcoments = datacomments;
    newcoments.forEach(coment => {

        creandoComentarios (coment.title, coment.description, coment.rating);

    })
}    

function dejarcomentario(event) {



    event.preventDefault();


        const allbody = document.getElementById("allbody");
        allbody.style.display="block";

    const titulocomentario = document.getElementById('titlecoment').value;
    const clalificacioncomentario = document.getElementById('rating').value;
    const comentario = document.getElementById("comentarioCompleto").value;

    //_---------------- INVENTOOOOO--------------------------
    // Ejemplo implementando el metodo POST:
    async function postData(url = '', data = {}) {
        // Opciones por defecto estan marcadas con un *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }
    const body = {
        hotelId: data,
        title: titulocomentario,
        description: comentario,
        rating: clalificacioncomentario
    }

    postData('https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/reviews',body)
        .then(data => {
           // console.log(data) // JSON data parsed by `data.json()` call
           creandoComentarios (data.title, data.description, data.rating);
           allbody.style.display="none";
        });



}

function creandoComentarios (titulo, comentario, calificacion){
    const newcomments = document.getElementById("comments");
        const contPadreComent = document.createElement("div");
        const starcomtn = document.createElement("div");
        const titleComent = document.createElement("h2");
        titleComent.textContent = titulo;

        const commentDescription = document.createElement("p");
        commentDescription.textContent = comentario;

        const estrellasComent = crearStar(calificacion);

        contPadreComent.appendChild(titleComent);
        estrellasComent.forEach(estrella => {
            starcomtn.appendChild(estrella);
        });
        contPadreComent.appendChild(starcomtn);
        newcomments.appendChild(contPadreComent);
        newcomments.appendChild(commentDescription);   
}