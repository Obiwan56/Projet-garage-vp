const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const btn = document.getElementById("btnContact");

nom.addEventListener("keyup", validateForm);
prenom.addEventListener("keyup", validateForm);
email.addEventListener("keyup", validateMail);
phone.addEventListener("keyup", validateForm);
message.addEventListener("keyup", validateForm);

//Function permettant de valider tout le formulaire
function validateForm(){
    const nomOk = validateRequired(nom);
    const prenomOk = validateRequired(prenom);
    const emailOk = validateMail(email);
    const phoneOk = validatePhone(phone);
    const messageOk = validateRequired(message);

    //pour que le bouton soit accessible une fois le form valide
    if(nomOk && prenomOk && emailOk && phoneOk && messageOk){
        btn.disabled = false;
    }
    else{
        btn.disabled = true;
    }
}

function validateMail(input){
    //Définir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validatePhone(input){
    //Définir mon regex
    const phoneRegex = /^\+?\s*(\d+\s?){10,}$/;
    const phoneUser = input.value;
    if(phoneUser.match(phoneRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}