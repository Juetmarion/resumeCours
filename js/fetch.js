/* 1ere syntaxe */
fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
}) 


/* 2eme syntaxe */
fetch("https://jsonplaceholder.typicode.com/users")
.then(response  => response.json()).then(console.log)

// on crée une fonction asynchrone 
let getUsers = async function(){
    try {
        // on veut qu'il attende de récupérer les données et les parser
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (response.ok){
            let data = await response.json()
            console.log(data)
        } else {
            console.log("Retour du serveur : ", response.status)
        }   
    } catch(e) {
        console.log(e)
    }
} 

const insertPost = async function(data){
    let request = new Request('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application.json'
        },
        body: JSON.stringify(data)
    })
    let response = await fetch(request)
    let responseData = await response.json()
    console.log(responseData)

}

insertPost({
    name:'Jean', 
    age: 29
})

getUsers() 


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
                                        /* cours de la doc */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var myImage = document.querySelector('img');

fetch('puce.png') // on fetch l'url puce.png présente dans le dossier
.then(function(response) { // si on a une url ok, on la recup dans response
    // .blob pour extraire le contenu de l'image de la réponse 
    //console.log(response.blob()) // Promise {<pending>}
    return response.blob(); // promise en attente
  
})
.then(function(myBlob) { // on recup la promise car ok pas d'erreur
// Un objet objectURL est ensuite créé à partir du Blob extrait, puis est inseré dans img
  var objectURL = URL.createObjectURL(myBlob); 
  myImage.src = objectURL;
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
                                /* Fournir des options à la requête */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* La méthode fetch() accepte un second paramètre, optionnel ; 
un objet init qui vous permet de contrôler un certain nombre de réglages : */

var myHeaders = new Headers();
var myImage = document.querySelector('img');

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

fetch('puce.png',myInit)
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
                         /* Vérifier que la récupération a réussi */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* Un bon test de la réussite de fetch() devrait inclure la vérification que la promesse
soit résolue, puis vérifier que la propriété Response.ok ait la valeur true.  */
var myImage = document.querySelector('img');

fetch('puce.png').then(function(response) {
    if(response.ok) {
      response.blob().then(function(myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        myImage.src = objectURL;
      });
    } else {
      console.log('Mauvaise réponse du réseau');
    }
  })
  .catch(function(error) {
    console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
  });



/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
                         /* Fournir votre propre objet requête */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* Plutôt que de transmettre le chemin de la ressource que vous souhaitez récupérer avec l'appel 
fetch(), vous pouvez créer un objet de requête en utilisant le constructeur Request(), et le 
transmettre à la méthode fetch() en tant qu’argument: */

var myHeaders = new Headers();
var myImage = document.querySelector('img');

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

var myRequest = new Request('puce.png',myInit);

fetch(myRequest,myInit)
.then(function(response) {
    console.log(response.blob())
  return response.blob();
})
.then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  console.log(objectURL)
  myImage.src = objectURL;
});