const email = document.getElementById("email1");
const mdp1 = document.getElementById("mdp1");
const myBtn = document.getElementById("boutonValid");

myBtn.addEventListener("click", clickBouton);

function clickBouton() {
    //appel de l'api ici
    if (email.value == 'admin@test.com' && mdp1.value == "123") {

        const token = "je suis un token!!!";
        setToken(token);
        //placer token en cookie

        setCookie(roleCoockie, "admin", 7);
        window.location.replace("/");
    }
    else {
        email.classList.add("is-invalid");
        mdp1.classList.add("is-invalid");
    }

    if (email.value == 'employe@test.fr' && mdp1.value == "123") {

        const token = "je suis un token!!!";
        setToken(token);
        //placer token en cookie

        setCookie(roleCoockie, "employe", 7);
        window.location.replace("/");
    }
    else {
        email.classList.add("is-invalid");
        mdp1.classList.add("is-invalid");
    }
}




/*code à garder
email.addEventListener("keyup", validateForm);
mdp1.addEventListener("keyup", validateForm);


//Function permettant de valider tout le formulaire
function validateForm(){
    const mailOk = validateMail(email);
    const passwordOk = validatePassword(mdp1);

    //pour que le bouton soit accessible une fois le form valide
    if(mailOk && passwordOk){
        myBtn.disabled = false;
    }
    else{
        myBtn.disabled = true;
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
*/
