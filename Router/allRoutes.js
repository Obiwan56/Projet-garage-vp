import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/presentation", "Présentation", "/pages/presentation.html"),
    new Route("/prestation", "Prestation", "/pages/prestation.html"),
    new Route("/connexion", "Connexion", "/pages/connexion/connexion.html"),
    new Route("/contact", "Contact", "/pages/contact.html"),
    new Route("/gestion", "Gestion", "/pages/connexion/gestion.html"),
    new Route("/ajoutAnnonce", "Ajouter une annonce", "/pages/connexion/gestion/ajoutAnnonce.html"),
    new Route("/commentaire", "Commentaire", "/pages/commentaire.html"),
    new Route("/occasion", "Nos occasions", "/pages/connexion/gestion/occasion.html"),
    new Route("/mdpOubli1", "Mot de passe oublié", "/pages/connexion/mdpOubli1.html"),
    new Route("/mdpOubli2", "Entrer nouveau mot de passe", "/pages/connexion/mdpOubli2.html"),



];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Garage V. Parrot";
