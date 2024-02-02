import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/presentation", "Présentation", "/pages/presentation.html", []),
    new Route("/prestation", "Prestation", "/pages/prestation.html", []),
    new Route("/connexion", "Connexion", "/pages/connexion/connexion.html", [], "/js/connexion/connexion.js"),
    new Route("/contact", "Contact", "/pages/contact.html", [], "/js/contact/contact.js"),
    new Route("/commentaire", "Commentaire", "/pages/commentaire.html", [], "/js/commentaire.js"),
    new Route("/occasion", "Nos occasions", "/pages/connexion/gestion/occasion.html" , []),
    new Route("/mdpOubli1", "Mot de passe oublié", "/pages/connexion/mdpOubli1.html", ["admin", "employe"], "/js/connexion/mdpOubli1.js"),
    new Route("/mdpOubli2", "Entrer nouveau mot de passe", "/pages/connexion/mdpOubli2.html", ["admin", "employe"], "/js/connexion/mdpOubli2.js"),
    new Route("/monCompte", "Modifier mon mot de passe", "/pages/connexion/gestion/monCompte.html", ["admin", "employe"], "/js/connexion/monCompte.js"),
    new Route("/gestionAnnonce", "Gestion des Annonces", "/pages/connexion/gestion/gestionAnnonce.html", ["admin", "employe"]),
    new Route("/ajoutAnnonce", "Ajouter une Annonces", "/pages/connexion/gestion/ajoutAnnonce.html", ["admin", "employe"]),
    new Route("/gestionEmploye", "Gestion du presonnel", "/pages/connexion/gestion/gestionEmploye.html", ["admin"]),
    new Route("/ajoutEmploye", "aAjouter du presonnel", "/pages/connexion/gestion/ajoutEmploye.html", ["admin"]),
    new Route("/gestionCommentaire", "gérer les commentaire", "/pages/connexion/gestion/gestionCommentaire.html", ["admin", "employe"]),
    new Route("/allCommentaires", "Tous les commentaires", "/pages/allCommentaires.html", []),
    new Route("/detailAnnonce1", "Clio 5 Hdi", "/pages/annonces/detailAnnonce1.html", []),




];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Garage V. Parrot";
