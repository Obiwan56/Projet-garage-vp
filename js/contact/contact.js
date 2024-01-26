const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

nom.addEventListener("keyup", validateForm); 
prenom.addEventListener("keyup", validateForm);
email.addEventListener("keyup", validateForm);
phone.addEventListener("keyup", validateForm);
message.addEventListener("keyup", validateForm);

//Function permettant de valider tout le formulaire
function validateForm(){
    validateRequired(nom);
    validateRequired(prenom);
    validateRequired(email);
    validateRequired(phone);
    validateRequired(message);

}

function validateRequired(input){
    if(input.value != ''){//form ok
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
    }
    else{//form pas ok
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
    }
}