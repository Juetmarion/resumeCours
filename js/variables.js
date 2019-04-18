/* Les types de letiables */

/* Les nombres */
let a = 2
let b = 3.4123
let c = -509
let d = 1/3

/* Les chaines de caractère */
let a = "Salut les gens"
let b = 'Re-Salut les gens'
let a = "Ceci n'est pas poblématique" // double + pratique!
let b = 'Ceci n\'est pas problématique'

/* Les booléens */
let vrai = true
let je_suis_faux = false

/* Les tableaux */
let eleves = ['Jean', 'Marc', 'Marion']
let demo = [true, 10, 'Marc']
eleves[0] // Jean
eleves[2] // Marion
demo[1] // 10
demo[18] // undefined

/* Les objets */
let eleve = {
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
let eleve = {
    notes: {
        math: 18,
        francais: 14   
    }   
}
// Pour récupérer la note de math de l'élève on peut alors faire
eleve.notes.math // 18
eleves.nom // undefined

/* Typage faible */
let a = '1' 
let b = 1
// a + b = '11'
// b est convertit en chaine de caractère implicitement
// a * b = 1 
// a est convertit en nombre de manière implicite 
"Salut" * 3 // NaN, Not a number
// Attention aux opérations qui n'ont pas de sens :)
"43" > 1000 // false, 1000 est convertit en chaine implicitement et il compare l'ordre alphabétique