import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/presentation", "Présentation", "/pages/presentation.html", []),
    new Route("/prestation", "Prestation", "/pages/prestation.html", []),
    new Route("/connexion", "Connexion", "/pages/connexion/connexion.html", [], "/js/connexion/connexion.js"),
    new Route("/contact", "Contact", "/pages/contact.html", [], "/js/contact/contact.js"),
    new Route("/gestion", "Gestion", "/pages/connexion/gestion.html", ["admin", "employe"]),
    new Route("/ajoutAnnonce", "Ajouter une annonce", "/pages/connexion/gestion/ajoutAnnonce.html", ["admin", "employe"]),
    new Route("/commentaire", "Commentaire", "/pages/commentaire.html", []),
    new Route("/occasion", "Nos occasions", "/pages/connexion/gestion/occasion.html" , []),
    new Route("/mdpOubli1", "Mot de passe oublié", "/pages/connexion/mdpOubli1.html", ["admin", "employe"], "/js/connexion/mdpOubli1.js"),
    new Route("/mdpOubli2", "Entrer nouveau mot de passe", "/pages/connexion/mdpOubli2.html", ["admin", "employe"], "/js/connexion/mdpOubli2.js"),
    new Route("/modifSupprAnnonce", "Modifier ou supprimer une annonce", "/pages/connexion/gestion/modifSupprAnnonce.html", ["admin", "employe"]),
    new Route("/ajoutEmploye", "Ajouter un ou une employé(e)", "/pages/connexion/gestion/ajoutEmploye.html", ["admin"]),
    new Route("/modifSupprEmploye", "Modifier ou supprimer un ou une employé(e)", "/pages/connexion/gestion/modifSupprEmploye.html", ["admin"]),
    new Route("/monCompte", "Modifier mon mot de passe", "/pages/connexion/gestion/monCompte.html", ["admin", "employe"], "/js/connexion/monCompte.js"),


];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Garage V. Parrot";
