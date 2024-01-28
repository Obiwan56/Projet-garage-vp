const mdp1 = document.getElementById("PasswordInput");
const mdpConfirm = document.getElementById("ValidatePasswordInput");
const btn = document.getElementById("btnOubli2")

mdp1.addEventListener("keyup", validateForm);
mdpConfirm.addEventListener("keyup", validateForm);


//Function permettant de valider tout le formulaire
function validateForm(){
    const pswOk = validatePassword(mdp1);
    const pswConfirmOk = validatePassword(mdpConfirm);

    //pour que le bouton soit accessible une fois le form valide
    if(pswOk && pswConfirmOk){
        btn.disabled = false;
    }
    else{
        btn.disabled = true;
    }
}


function validatePassword(input){
    //Définir mon regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
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