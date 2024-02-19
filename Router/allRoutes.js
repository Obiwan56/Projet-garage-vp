import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/presentation", "Présentation", "/pages/presentation.html", []),
    new Route("/prestation", "Prestation", "/pages/prestation.html", []),
    new Route("/connexion", "Connexion", "/pages/connexion/connexion.html", [], "/js/connexion/connexion.js"),
    new Route("/contact", "Contact", "/pages/contact.html", [], "/js/contact/contact.js"),
    new Route("/commentaire", "Commentaire", "/pages/commentaire.html", [], "/js/commentaire.js"),
    new Route("/occasion", "Nos occasions", "/pages/gestion/occasion.html" , [], "/js/gestion/occasion.js"),
    new Route("/mdpOubli1", "Mot de passe oublié", "/pages/connexion/mdpOubli1.html", ["admin", "employe"], "/js/connexion/mdpOubli1.js"),
    new Route("/mdpOubli2", "Entrer nouveau mot de passe", "/pages/connexion/mdpOubli2.html", ["admin", "employe"], "/js/connexion/mdpOubli2.js"),
    new Route("/monCompte", "Modifier mon mot de passe", "/pages/gestion/monCompte.html", ["admin", "employe"], "/js/connexion/monCompte.js"),
    new Route("/gestionAnnonce", "Gestion des Annonces", "/pages/gestion/gestionAnnonce.html", ["admin", "employe"]),
    new Route("/ajoutAnnonce", "Ajouter une Annonces", "/pages/gestion/ajoutAnnonce.html", ["admin", "employe"], "/js/gestion/ajoutAnnonce.js"),
    new Route("/modifAnnonce", "Modifier une Annonces", "/pages/gestion/modifAnnonce.html", ["admin", "employe"], "/js/gestion/modifAnnonce.js"),
    new Route("/gestionEmploye", "Gestion du presonnel", "/pages/gestion/gestionEmploye.html", ["admin"]),
    new Route("/ajoutEmploye", "Ajouter du presonnel", "/pages/gestion/ajoutEmploye.html", ["admin"], "/js/gestion/ajoutEmploye.js"),
    new Route("/modifEmploye", "Modifier du presonnel", "/pages/gestion/modifEmploye.html", ["admin"], "/js/gestion/modifEmploye.js"),    
    new Route("/gestionCommentaire", "gérer les commentaire", "/pages/gestion/gestionCommentaire.html", ["admin", "employe"]),
    new Route("/allCommentaires", "Tous les commentaires", "/pages/allCommentaires.html", []),
    new Route("/detailAnnonce1", "Clio 5 Hdi", "/pages/annonces/detailAnnonce1.html", []),
    new Route("/detailAnnonce2", "Peugeot 5008", "/pages/annonces/detailAnnonce2.html", []),
    new Route("/detailAnnonce3", "Porsche Cayenne Turbo", "/pages/annonces/detailAnnonce3.html", []),
    new Route("/detailAnnonce4", "GLE HDI", "/pages/annonces/detailAnnonce4.html", []),
    new Route("/detailAnnonce5", "DS7 Hybrid", "/pages/annonces/detailAnnonce5.html", []),
    new Route("/gestionMessage", "gérer les messages", "/pages/gestion/gestionMessage.html", ["admin", "employe"]),

];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Garage V. Parrot";
