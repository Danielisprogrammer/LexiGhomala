
//  Sélection des éléments HTML (selon la structure dans index.html)
const input = document.querySelector('.recherche-mot input');
const translateBtn = document.getElementById('btn-rechercher');
const output = document.getElementById('traduction-resultat');

//  Fonction de traduction
function translate() {
    if (!input || !output) return;

    // normaliser la saisie : trim, minuscules et remplacer apostrophes typographiques
    const raw = input.value.trim();
    const word = raw.replace(/’/g, "'").toLowerCase();
    const translation = dictionnaire[word];
    
    if (translation) {
        output.textContent = `Traduction : ${translation}`;
    } else {
        output.textContent = "Mot non trouvé dans le dictionnaire.";
    }
}

//  Événement de clic sur le bouton de traduction
translateBtn.addEventListener('click', translate);

// Permettre la traduction en appuyant sur la touche "Entrée"
if (input) {
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            translate();
        }
    });
}