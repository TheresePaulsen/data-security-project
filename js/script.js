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
if (e.target.id !== 'restartButton') {
 choices.push(e.target.id);
 } else {
// ved restart nulstilles choices ikke, men vi markerer restart
 choices.push('restart');
 }
// gem valg i localstorage
 localStorage.setItem('theme_choices', JSON.stringify(choices));

// opdækning - bruger id'et på det element som er blevet klikket på til at finde ud af hvad der skal vises
switch(e.target.id) {
case 'startButton':
 document.querySelector('#phishingMessageScene').classList.remove('hidden');
break;
case 'sendMoneyButton':
 document.querySelector('#immediatePaymentScene').classList.remove('hidden');
break;
case 'askQuestionButton':
 document.querySelector('#followupQuestionScene').classList.remove('hidden');
break;
case 'callToVerifyButton':
 document.querySelector('#callVerificationScene').classList.remove('hidden');
break;
case 'verifyAfterFollowupButton':
 document.querySelector('#verificationSuccessScene').classList.remove('hidden');
break;
case 'sendMoneyAfterFollowupButton':
 document.querySelector('#delayedFraudScene').classList.remove('hidden');
break;
case 'restartButton':
 document.querySelector('#introScene').classList.remove('hidden');
break;
 }
 };

// tilføjelse af event listener til alle elementer i buttons arrayet
 btns.forEach(btn => {
 btn.addEventListener('click', checkAnswer);
 });
});