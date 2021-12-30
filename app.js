"use strict";

const cases = Array.from(document.querySelectorAll(".case"));
const identifiant = document.querySelector("#identifiant");
const password = document.querySelector("#mot-de-passe");
const btnEffacer = document.querySelector("#effacer");
const btnValider = document.querySelector("#valider");
let form = document.querySelector("#form");
let messageConnexion = document.querySelector("#messageCo");

generationAlea();

// évènements au click sur "valider" et "effacer"

form.addEventListener("submit", dataForm);
btnEffacer.addEventListener("click", generationAlea);



// Fonction pour afficher les valeurs cliquées par l'utilisateur dans l'input password

cases.forEach((e) => {
  
  e.addEventListener("click",function(){
    
    if(this.dataset.target == undefined){
      
      return
      
    }
    
    password.value += this.dataset.target ;
    
  })
  
});

// fonction génération de nombres aléatoires

function generationAlea() {
  
  let nbAlea;
  let tabTest = [];
  let caseNb = 0
  
  nettoyage();
  
  
  while (tabTest.length < 10) {
    
    nbAlea = Math.floor(Math.random() * 16);
    
    if (tabTest.includes(nbAlea)) {
      
      nbAlea = Math.floor(Math.random() * 16);
      
    } else {
      
      document.querySelector("#case" + nbAlea).innerHTML = caseNb;
      document.querySelector("#case" + nbAlea).setAttribute("data-target", caseNb);
      document.querySelector("#case" + nbAlea).style.cursor = "pointer" ;
      document.querySelector("#case" + nbAlea).classList.add("case-active");
      
      tabTest.push(nbAlea);
      caseNb++;
      
    }
  }
}


//fonction pour purger les input + les cases + message info

function nettoyage() {

    for (let i = 0; i < 15; i++) {
    
    document.querySelector("#case" + i).innerHTML = "";
    document.querySelector("#case" + i).removeAttribute("data-target");
    document.querySelector("#case" + i).style.cursor = "not-allowed" ;
    document.querySelector("#case" + i).classList.remove("case-active");
    
  }
  messageConnexion.style.display = "none";
  identifiant.value = "";
  password.value = "";
}

/* récupération du formulaire et  réception des données de l'API à personnaliser selon votre besoin, un exemple ci-dessous */

function dataForm(e){
  
  e.preventDefault();
  // let formData = new FormData(e.target);
  
  // let url = "****************";
  // let request = new Request(url, {
  //   method : "POST",
  //   body : formData
  // });

  // fetch(request)
  //   .then((response) => response.json()
  //   .then((data) => {

  //     messageConnexion.style.display = "block";
  //     messageConnexion.innerHTML = data.message;
  //     console.log("Résultat de l'authentification :" + data.check);

  //   }))
  //   .catch((e) => console.log("Erreur : " + e));
}
