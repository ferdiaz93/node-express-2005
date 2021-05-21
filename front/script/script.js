const btnShow = document.getElementById("btnShow");
const h1Title = document.getElementById("title");
const h3Date = document.getElementById("date");
const pExplanation = document.getElementById("explanation");
const imgPicture = document.getElementById("image");
const divUsuarios = document.getElementById("contenedor-usuarios");

btnShow.addEventListener("click", function () {
  // Enviar un request GET a https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
  // y recibir la respuesta

  const inpDate = document.getElementById("inputDate").value;
  console.log(inpDate);
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", function () {
    let usuarios = JSON.parse(xhr.responseText);
    console.log(usuarios);
    divUsuarios.innerHTML = "";
    usuarios.forEach(element => {
      divUsuarios.innerHTML += 
      `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">${element.email}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      `
    });


  });

  xhr.open("GET", "/users");
  xhr.send();
});
