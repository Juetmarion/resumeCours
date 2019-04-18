/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
                                       /* Try Catch */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

try {
    var o = {}
    o.maMethode()
} catch (e) {
    // Le code ici ne s'éxécutera qu'en cas d'erreur
    console.log('Une erreur à eu lieu : ' + e); 
} finally {
     // Ici le code s'éxécutera qu'il y ai eu une erreur ou non
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
                 /* Affectation d'une fonction anonyme à la variable maVariable */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* L'instruction throw permet de lever une exception définie par l'utilisateur. 
L'exécution de la fonction courante sera stoppée (les instructions situées après l'instruction 
throw ne seront pas exécutées) et le contrôle sera passé au premier bloc catch de la pile d'appels. 
Si aucun bloc catch ne se trouve dans les fonctions de la pile d'appels, le programme sera terminé. */

function getRectArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
      throw "Parameter is not a number!";
    }
  }
  
  try {
    getRectArea('A', 3);
    console.log('dans le try')
  }
  catch(e) {
    console.log(e);
    // expected output: "Parameter is not a number!"
  }
  