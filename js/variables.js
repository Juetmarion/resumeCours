/* Les types de variables */

/* Les nombres */
var a = 2
var b = 3.4123
var c = -509
var d = 1/3

/* Les chaines de caractère */
var a = "Salut les gens"
var b = 'Re-Salut les gens'
var a = "Ceci n'est pas poblématique" // double + pratique!
var b = 'Ceci n\'est pas problématique'

/* Les booléens */
var vrai = true
var je_suis_faux = false

/* Les tableaux */
var eleves = ['Jean', 'Marc', 'Marion']
var demo = [true, 10, 'Marc']
eleves[0] // Jean
eleves[2] // Marion
demo[1] // 10
demo[18] // undefined

/* Les objets */
var eleve = {
    clef: 'valeur',
    nom: 'Jean',
    age: 18,
    notes: [10, 4, 18] 
}

eleve.nom // Jean
eleve.notes // [10, 4, 18]
eleve.notes[1] // 4
// On peut aussi utiliser une notation proche de celle des tableaux
eleve['notes'] // [10, 4, 18]

// De la même manière, les objets peuvent contenir des objets en valeur.
var eleve = {
    notes: {
        math: 18,
        francais: 14   
    }   
}
// Pour récupérer la note de math de l'élève on peut alors faire
eleve.notes.math // 18
eleves.nom // undefined

/* Typage faible */
var a = '1' 
var b = 1
// a + b = '11'
// b est convertit en chaine de caractère implicitement
// a * b = 1 
// a est convertit en nombre de manière implicite 
"Salut" * 3 // NaN, Not a number
// Attention aux opérations qui n'ont pas de sens :)
"43" > 1000 // false, 1000 est convertit en chaine implicitement et il compare l'ordre alphabétique