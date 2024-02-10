const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const email = document.getElementById("email");
const ajoutEmployeBtn = document.getElementById("ajoutEmployeBtn");


email.addEventListener("keyup", validateMail);
ajoutEmployeBtn.addEventListener("click",);





function validateMail(input) {
    //Définir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if (mailUser.match(emailRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}