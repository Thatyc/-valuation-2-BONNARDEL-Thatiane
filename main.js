
// DECLARATION DES VARIABLES
let scores;
let currentScore;
let activePlayer;
let playing;

// SELECTEURS DU DOM
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// DEBUT DES CONDITIONS
const init = function () {
  // TOUS LES POINTS SERONT SUR 0
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  // ENLEVE LE GAGNANT DE LA PARTIE ANTERIEUR
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  // ACTIVE UN JOUEUR 
  player0El.classList.add('player--active');
  // DESACTIVE UN JOUEUR
  player1El.classList.remove('player--active');
};
init();

// APPEL LISTERNER BOUTON NEW GAME
btnNew.addEventListener('click', function () {
  init();
});
// APPEL LISTERNER BOUTON LANCER
btnRoll.addEventListener('click', function () {
    if (playing) {
      // GENERATEUR D'UN NOMBRE ALEATOIRE ENTRE 1 ET 6
      const dice = Math.trunc(Math.random() * 6) + 1;
      // MONTRE LE NOMBRE DU DE
      diceEl.classList.remove('hidden');
      diceEl.src = "img/" + "dice-" + dice + ".png";
      // SI LE DÉ TOMBE NE TOMBE PAS SUR 1
      if (dice !== 1) {
        // AJOUT DANS LES POINTS COURANTS
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
      } else {
        // SINON CHANGE DE JOUEUR
        switchPlayer();
      }
    }
  });

// FONCTION POUR CHANGER DE JOUEUR
const switchPlayer = function () {
document.getElementById(`current--${activePlayer}`).textContent = 0;
currentScore = 0;
activePlayer = activePlayer === 0 ? 1 : 0;
player0El.classList.toggle('player--active');
player1El.classList.toggle('player--active');
};

// APPEL LISTERNER BOUTON AJOUT DANS LE GLOBAL
btnHold.addEventListener('click', function () {
    if (playing) {
      // AJOUTE LES POINTS COURRENTS A GLOBAL DU JOUEUR ACTIF
      scores[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
      // VERIFIE SI UN JOUEUR AS PLUS DE 100 POINTS
      if (scores[activePlayer] >= 100) {
        // FIN DE JEUX
        playing = false;
        // ACTIVE LA COULEUR DU JOUEUR GAGNANT 
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        // ENLEVE LA COULEUR DU JOUEUR ACTIF
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      } else {
        // CHANGE DE JOUEUR
        switchPlayer();
      }
    }
  });
  




