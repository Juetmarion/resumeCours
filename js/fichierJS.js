
/* 
function declenchementCheckAll(checkboxAllElement) {
    checkboxAllElement.addEventListener('click', function(){
        let vehicule1 = document.querySelectorAll('input[name=vehicle1]')
        let vehicule2 = document.querySelectorAll('input[name=vehicle2]')
        let checkboxAllStatus = checkboxAllElement.checked
        switch(checkboxAllStatus){
            case true : 
            vehicule1[0].checked = true;
            vehicule2[0].checked = true;
            break
            case false : 
            vehicule1[0].checked = false;
            vehicule2[0].checked = false;
        }
    })
}

declenchementCheckAll(document.querySelector('input[name=all]'));  */


/* let nombre = 0;
while(nombre < 100){
    nombre++; 
    if (nombre % 3 === 0 && nombre % 5 === 0){
        console.log("Fizz Buzz")
    } else if (nombre % 3 === 0){
        console.log("Fizz")
    } else if (nombre % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(nombre)
    }
  } */



function declenchementCheckAll(checkboxAllElement) {
    checkboxAllElement.addEventListener('click', function(){
        let allCheckbox = document.querySelectorAll('input[type=checkbox]');
        let allCheckboxTab = Array.from(allCheckbox)
        if (checkboxAllElement.checked === true){
            allCheckboxTab.forEach(elt =>{
                elt.checked = true 
            })
        } else {
            allCheckboxTab.forEach(elt =>{
                elt.checked = false 
            })
        }
    })
}   

declenchementCheckAll(document.querySelector('input[name=all]')); 