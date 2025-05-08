'use strict'; //sikrer strenghed, kodesikkerhed og fejlfinding
// burgermenu
document.addEventListener('DOMContentLoaded', () => {
const menuButton = document.querySelector("#bars");
const toggleNav = () => {
const nav = document.querySelector("#main-nav");
 nav.classList.toggle("show"); // Toggler burger ikon og X
const icon = document.querySelector("#bars i");
 icon.classList.toggle("fa-bars");
 icon.classList.toggle("fa-xmark");
 };
 menuButton.addEventListener("click", toggleNav);
});

// scenarios
document.addEventListener('DOMContentLoaded', () => {
const btns = document.querySelectorAll('.scenes button'); // nodeList / array af alle buttons
const divs = document.querySelectorAll('.scenes div'); //nodelist / array af alle div'er
// hent evt. gemte valg fra localstorage
let choices = [];
const savedChoices = localStorage.getItem('theme_choices');
if (savedChoices) {
  choices = JSON.parse(savedChoices);
}

const checkAnswer = (e) => { // funktion kaldet checkanswer
// oprydning - sætter display none på alle elementer i divs arrayet
 divs.forEach(div => {
 div.classList.add('hidden');
 });
 
 // gem valget i array
 if (e.target.id !== 'restart') {
   choices.push(e.target.id);
 } else {
   // ved restart nulstilles choices ikke, men vi markerer restart
   choices.push('restart');
 }
 
 // gem valg i localstorage
 localStorage.setItem('theme_choices', JSON.stringify(choices));
 
 console.log('Gemte valg:', choices); // Viser gemte valg i konsollen
 
 // opdækning - bruger id'et på det element som er blevet klikket på til at finde ud af hvad der skal vises
switch(e.target.id) {
case 'c0':
 document.querySelector('#box1').classList.remove('hidden');
break;
case 'c1':
 document.querySelector('#box2-1').classList.remove('hidden');
break;
case 'c2':
 document.querySelector('#box2-2').classList.remove('hidden');
break;
case 'c3':
 document.querySelector('#box2-3').classList.remove('hidden');
break;
case 'c4':
 document.querySelector('#box3-1').classList.remove('hidden');
break;
case 'c5':
 document.querySelector('#box3-2').classList.remove('hidden');
break;
case 'restart':
 document.querySelector('#box0').classList.remove('hidden');
break;
 }
 };

// tilføjelse af event listener til alle elementer i buttons arrayet
 btns.forEach(btn => {
 btn.addEventListener('click', checkAnswer);
 });
});