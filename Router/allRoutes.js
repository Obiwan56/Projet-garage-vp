import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/presentation", "Présentation", "/pages/presentation.html"),
    new Route("/prestation", "Prestation", "/pages/prestation.html"),
    new Route("/connexion", "Connexion", "/pages/connexion/connexion.html"),



];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Garage V. Parrot";
