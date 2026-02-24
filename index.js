
const dictionnaire = {
    "bonjour" : "Mbôh",

"bonsoir" : "Mbôh ndzié",

"salut" : "Alo",

"je vais bien" : "Ndzi mbôh",

"merci" : "Mési",

"merci beaucoup" : "Mési mbôh",

"s’il te plaît" : "Tô ndzi",
"excuse-moi" : "Pardon",

"désolé" : "Pardon ndzi",

"bienvenue" : "Yôh",

"au revoir" : "Ndap",

"a bientôt" : "Ndap mbôh",

"bonne nuit" : "Mbôh ndzié",
"bonne journée" : "Mbôh tsap",

"paix" : "Ndzem",   

"amour" : "Ndem",

"unité" : "Kep",

"respect" : "Ntsôh",
"fraternité" : "Ndzôh",

"solidarité" : "Tchop",

"pardonnes-moi" : "Pardon ndzi mbôh",

"que Dieu te bénisse" : "Si nda wé",

"prends soin de toi" : "Ké ndzi wé",
"soyons unis" : "Kep wé",

"ordinateur" : "Ordinateur",

"clavier" : "Klabie",

"souris" : "Suris",

"ecran" : "Ékran",
"internet" : "Inténet",

"réseau" : "Réseau",

"mot de passe" : "Mot paase",

"utilisateur" : "Utilisateu",

"fichier" : "Fichie",
"dossier" : "Dosie",

"application" : "Application",

"logiciel" : "Logiciel",

"programme" : "Programme",

"base de données" : "Base de données",
"serveur" : "Serveur",

"site web" : "Site web",

"lien" : "Lien",

"télécharger" : "Télécharger",
"téléverser" : "Téléverser",
"connexion" : "Connexion",

"déconnexion" : "Déconnexion",

"imprimer" : "Imprimer",

"scanner" : "Scanner",

"batterie" : "Batterie",
"système" : "Système",

"code" : "Code",

"développeur" : "Développeur",

"base" : "Base",   

"données" : "Données",
"numérique" : "Numérique",
};

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