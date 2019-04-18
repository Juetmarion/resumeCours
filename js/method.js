/* Avec ECMAScript 2015 (ES6), il est possible d'utiliser une notation plus courte pour
* définir des méthodes au sein des littéraux objets. 
* On peut ainsi définir plus rapidement une fonction qui sera utilisée comme méthode. */

// Avant
var obj = {
    toto: function() {
      /* du code */
    },
    truc: function() {
      /* du code */
    }
  };

// Raccourci 
var obj = {
    toto() {
      /* du code */
    },
    truc() {
      /* du code */
    }
  };

/* Les méthodes génératrices peuvent également être asynchrones (cf. async)  */

// On utilise une propriété nommée
var obj3 = {
    f: async function () {
        await une_promesse;
    }
};

// Ici, on obtient le même résultat
// avec la notation raccourcie
var obj3 = {
    async f() {
        await une_promesse;
    }
};