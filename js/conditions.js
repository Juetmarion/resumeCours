a == b // a égale à b
a === b // a == b et a est de même "type" que b
a >= b // a supérieur OU égal à b
a > b   // a strictement supérieur à b
a <= b // a inférieur OU égal à b
a < b   // a strictement inférieur à b

// && ET
true && true // true
true && false // false
false && true // false
false && false // false

// || OU
true || true // true
true || false // true
false || true // true
false || false // false

// ! NON
// !true # false
// !false # true

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
                                          /* IF - ELSE */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const temperature = -50;
    if (temperature <= 0) {
        console.log("Il gèle");
    } else {
        console.log("Il ne fait pas si froid");
    }

const formule = "abracadabra";
if (formule === "abracadabra") {
  console.log("C'est la formule magique !");
}
else {
  console.log("Ce n'est pas la bonne formule...");
}


const nombre = Number(50);
if (nombre > 0) {
  console.log(nombre + " est positif");
} else if (nombre < 0) {
  console.log(nombre + " est négatif");
} else {
  console.log(nombre + " est nul");
}

if ((nombre >= 0) && (nombre <= 100)) {
  console.log(nombre + " est compris entre 0 et 100");
}

if ((nombre < 0) || (nombre > 100)) {
    console.log(nombre + " est en dehors de l'intervalle [0, 100]");
}

if (!(nombre >= 100)) {
    console.log(nombre + " est inférieur ou égal à 100");
  }

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
                                            /* SWITCH */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

switch (expression) {
  case valeur1:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur1
    instructions1
    break
  case valeur2:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
    break
  default:
    // Instructions à exécuter lorsqu'aucune des valeurs
    // ne correspond 
    break
}

  const meteo = ("soleil");
  switch (meteo) {
    case "soleil":
      console.log("Sortez en t-shirt.");
      break;
    case "vent":
      console.log("Sortez en pull.");
      break;
    case "pluie":
      console.log("Sortez en blouson.");
      break;
    case "neige":
      console.log("Restez au chaud à la maison.");
      break;
    default:
      console.log("Je n'ai pas compris !");
  }
  
/* EXEMPLES : */
function plusPetit(x, y){
  if (x < y) {
    return x; 
  } return y;
};

console.log(plusPetit(4.5, 5)); // 4.5
console.log(plusPetit(19, 9));  // 9
console.log(plusPetit(1, 1));   // 1


// Calculatrice

// Effectue les 4 opérations arithmétiques de base
function calculer(nbGauche, operation, nbDroite) {
  let resultat;
  switch (operation) {
    case "+":
      resultat = nbGauche + nbDroite;
      break;
    case "-":
      resultat = nbGauche - nbDroite;
      break;
    case "*":
      resultat = nbGauche * nbDroite;
      break;
    case "/":
      resultat = nbGauche / nbDroite;
      break;
  }
  return resultat;
}

console.log(calculer(4, "+", 6)); // 10
console.log(calculer(4, "-", 6)); // -2
console.log(calculer(2, "*", 0)); // 0
console.log(calculer(12, "/", 0)); // Infinity