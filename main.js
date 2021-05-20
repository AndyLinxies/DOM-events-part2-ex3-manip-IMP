//Ex1
let lis = document.querySelectorAll('li')

// function sayMyName(params) {
//     alert(params.innerText)
// }

// lis.forEach(element => {
//     element.addEventListener('click',function(e){sayMyName(e.target)})
// });

//Ex2
function modif(params, elem) {
    params = prompt('Entrez le texte et observez');
    elem.innerText = params
}
//Le premier param va servir à capter le texte,
//Le deuxième va servir à modifier la valeur de la chose sur laquelle on va cliquer par le texte qu'on vient de capter

lis.forEach(element => {
    element.addEventListener('click', function (e) {
        modif(e.target, e.target)
    })
});

// le function(e) sert à pouvoir utiliser le e.target

//Les deux e.target dans le parametre servent à dire que les paramètres de notre fonction font reference aux élements sur lesquels on va cliquer

//Ex3 FAUX


function name(params) {
    let input1 = document.getElementById('li-one');
    let input2 = document.getElementById('li-two');
    let btn3 = document.querySelectorAll('input')[2]

}
lis.forEach((element, i) => {

    if (input1.value == element.innerText && input2.value == element.innerText) {
        [input1.value, element.innerText[i]] = [element.innerText[i], input2.value]
    } else {
        console.log('pas bon');
    }

});