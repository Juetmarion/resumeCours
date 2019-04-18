

// L'opération de création d'une fonction s'appelle la déclaration. Voici sa syntaxe. 
/* Déclaration d'une fonction nommée maFonction */
function maFonction() {
    console.log("console.log de maFonction");  // Instructions de la fonction
  }
console.log("Début du programme");
maFonction();  //Appel d'une fonction
console.log("Fin du programme");   
 

// Déclaration d'une fonction nommée maFunction
function myFunction() {
// Calcul de la valeur de retour
// return myFunction;  *
    /* Si on essaie de récupérer la valeur de retour 
d'une fonction qui n'inclut pas d'instruction return, on obtient undefined */
// return "Function : myFunction !";
const message = "Function : myFunction !";
return message;
}

// Récupération de la valeur de retour de maFonction
let value = myFunction();
console.log(value); 
console.log(myFunction()); // "Function myFunction !Bonjour !"
//console.log(message); // Erreur : la variable message n'existe pas ici



/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
                                    /* PASSAGE DE PARAMETRES */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


// Déclaration de la fonction maFonction
function maFonction(param1, param2, ...) {
// Instructions pouvant utiliser param1, param2, ...
}
// Appel de la fonction maFonction
// param1 reçoit la valeur de arg1, param2 la valeur de arg2, ...
maFonction(arg1, arg2, ...); 


function direBonjour(prenom) {
// Ici, prenom est le paramètre de la fonction
const message = `Bonjour, ${prenom} !`;
return message;
}

// Ici, prenom est une variable utilisée comme argument
let prenom = "Baptiste";
console.log(direBonjour(prenom)); // "Bonjour, Baptiste !"
prenom = "Thomas";
console.log(direBonjour(prenom)); // "Bonjour, Thomas!"


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
                 /* Affectation d'une fonction anonyme à la variable maVariable */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const maVariable = function(param1, param2, ...) {
    // Instructions pouvant utiliser param1, param2, ...
}
// Appel de la fonction anonyme
// param1 reçoit la valeur de arg1, param2 la valeur de arg2, ...
maVariable(arg1, arg2, ...);


// Affectation d'une fonction anonyme à la variable maVariable
constmaVariable=(param1,param2,...)=>{
    // Instructions pouvant utiliser param1, param2, ...
}
maVariable(arg1,arg2,...);     
                          

