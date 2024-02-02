const email1 = document.getElementById("email1");
const btnValid = document.getElementById("btnOubli1");

email1.addEventListener("keyup", validateForm);


//Function permettant de valider tout le formulaire
function validateForm() {
    const mailOk = validateMail(email1);


    //pour que le bouton soit accessible une fois le form valide
    if (mailOk) {
        btnValid.disabled = false;
    }
    else {
        btnValid.disabled = true;
    }
}


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