const mdp = document.getElementById("ancienPasswordInput")
const mdp1 = document.getElementById("PasswordInput");
const mdpConfirm = document.getElementById("ValidatePasswordInput");
const btn = document.getElementById("btnOubli2")

mdp.addEventListener("keyup", validateForm);
mdp1.addEventListener("keyup", validateForm);
mdpConfirm.addEventListener("keyup", validateForm);


// Function pour vérifier si le nouveau mot de passe est différent de l'ancien
function isNewPasswordDifferent() {
    return mdp1.value !== mdp.value;
}

// Mettre à jour validateForm() pour inclure la vérification isNewPasswordDifferent()
function validateForm() {
    const ancienPsw = validatePassword(mdp);
    const pswOk = validatePassword(mdp1);
    const pswConfirmOk = validatePassword(mdpConfirm);

    // Vérification supplémentaire : le nouveau mot de passe doit être différent de l'ancien
    const newPasswordDifferent = isNewPasswordDifferent();

    if (ancienPsw && pswOk && pswConfirmOk && newPasswordDifferent) {
        btn.disabled = false;
    }
    else {
        btn.disabled = true;
    }
}


function validatePassword(input) {
    //Définir mon regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if (passwordUser.match(passwordRegex)) {
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

/*

*/