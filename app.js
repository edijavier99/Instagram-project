
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username.toLowerCase() === "brigitte" && password.toLowerCase()=== "07031999") {
      window.location.href = "index.html";
    } else {
      alert("usuario o contraseña incorrecto. Intentalo de nuevo");
      return;
    }
  }

function ramdonPoems(){
  let poems = ["Ven a dormir conmigo. No haremos el amor, el amor nos hará.",
    "Para el mundo no soy nadie, pero para mí tu eres el mundo.",
    "Cada mañana cuando despierto, tú eres la razón por la que sonrío; tú eres la razón por la que amo.",
    "Por más momentos juntos.",
    "Por mas viajes juntos."];

    let opcion = poems[Math.floor(Math.random()*poems.length)] ;
    return opcion
}

function changePoems(){
  document.getElementById("poema").innerHTML = ramdonPoems()
}
const pages = [  "index.html", "page3.html", "page4.html"]
let actualPage = 0;

function changeNextPage (){
  if (actualPage < pages.length - 1) {
    actualPage++;
    window.location.href = pages[actualPage];
  } else {
    alert('Ya estás en la última página');
  }
};

let lastPage = () =>{
  window.location.href = "page4.html"
}

let changePreviusPage = () =>{
  window.location.href = "index.html";
}

const temaOscuro = () =>{
  document.querySelector("body").setAttribute("data-bs-theme", "dark");
  document.querySelector("#dl-icon").setAttribute("class", "fa-solid fa-moon")
}

const temaClaro = () =>{
  document.querySelector("body").setAttribute("data-bs-theme", "light");
  document.querySelector("#dl-icon").setAttribute("class", "fa-solid fa-sun")
}

const changeTheme = () =>{
  document.querySelector("body").getAttribute("data-bs-theme") === "light" ?
  temaOscuro() : temaClaro();
}

  let likesBoard = document.querySelector("#likesboard")
  let display = document.createElement("p")
  display.id = "likesDisplay"
  let startCount = document.createTextNode(" ")
  display.appendChild(startCount)
  likesBoard.append(display);
  let count = 0;

let addLikes = () =>{
  count ++
  return display.innerHTML = count

}

