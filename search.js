let ssilka1 = document.getElementById('ssilka1');
let ssilka2 = document.getElementById('ssilka2');
let ssilka3 = document.getElementById('ssilka3');
let ssilka4 = document.getElementById('ssilka4');
let ssilka5 = document.getElementById('ssilka5');
let ssilka6 = document.getElementById('ssilka6');
const mas = [ssilka1,ssilka2,ssilka3,ssilka4,ssilka5,ssilka6];
const mass2 = mas.filter(element => element.innerText + 'abv');
let text = '';
let input = document.getElementById('searchInput');
input.addEventListener("input", (event) => {

    let abc = event.target.value;
    console.log(abc);
    const mass2 = mas.filter(element => abc === element.innerText);
    console.log(mass2);

});
let spisok = document.getElementsByClassName('options');