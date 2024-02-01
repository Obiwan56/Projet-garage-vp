const prenom = document.getElementById("prenom");
const message = document.getElementById("message");
const btn = document.getElementById("btnContact");

prenom.addEventListener("keyup", validateForm);
message.addEventListener("keyup", validateForm);

//Function permettant de valider tout le formulaire
function validateForm(){
    const prenomOk = validateRequired(prenom);
    const messageOk = validateRequired(message);

    //pour que le bouton soit accessible une fois le form valide
    if(prenomOk && messageOk){
        btn.disabled = false;
    }
    else{
        btn.disabled = true;
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
