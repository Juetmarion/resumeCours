/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
                                /* La boucle While */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */                                
let i = 0 
while (i < 3) {
    "Je compte " + i
    if (i == 1) {
        break
    }
    i++
}

// Exemple :
console.log("Début du programme");
let nombre = 1;
while (nombre <= 5) {
  console.log(nombre);
  nombre++;
}
console.log("Fin du programme");


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
                                        /* FOR */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

for (initialisation; condition; étape) {
    // instructions exécutées tant que la condition est vérifiée
}

// Exemple : 
var i = 0 
for (var i = 0; i < 3; i++) {
    "Je compte " + i
}


/* COMPARAISON DES DEUX METHODES : WHILE - FOR */
// Exercice 01 : 

    // for
    const nbTours = 10; //constante > le nombre ne changera pas
    console.log("Le manège démarre");

    let nbToursBoucle = nbTours; // = 10
    for (nbToursBoucle = 1; nbToursBoucle <= 10; nbToursBoucle++){
      console.log("C'est le tour numéro " + nbToursBoucle); 
    }
    console.log("Le manège s'arrête"); // au bout de 10 tours de boucle

    // While
    const nbTours = 10;
    console.log("Le manège démarre");

    let turnNbTours = 1; // on démarre à 1
    while(turnNbTours <= 10){
      console.log("C'est le tour numéro " + turnNbTours);
      turnNbTours++; // +1 à chaque tour pour arriver à 10
    }

    console.log("Le manège s'arrête");


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
                                    /* forEach */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
    console.log(element);
});

// expected output: "a"
// expected output: "b"
// expected output: "c"


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
                                    /* for of */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

let tableauItérable = [1, 2, 3];

for (let valeur of tableauItérable) {
  console.log(valeur);
}
// 1
// 2
// 3




/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
                                    /* for await */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

async function* asyncGenerator() {
  var i = 0;
  while (i < 3) {
    yield i++;
  }
}

(async function() {
  for await (let num of asyncGenerator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
                                    /* for in */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var obj = {a:1, b:2, c:3};
    
for (var prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Affiche dans la console :
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"