const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const email = document.getElementById("email");
const pswEmpolye = document.getElementById("pswEmpolye");
const role = document.getElementById("role");
const ajoutEmployeBtn = document.getElementById("ajoutEmployeBtn");

// Appeler validateForm lorsque des événements pertinents se produisent dans le formulaire
nom.addEventListener("keyup", validateForm);
prenom.addEventListener("keyup", validateForm);
email.addEventListener("keyup", validateForm);
pswEmpolye.addEventListener("keyup", validateForm);
role.addEventListener("change", validateForm);
ajoutEmployeBtn.addEventListener("click", validateForm);


// Fonction de validation du formulaire
function validateForm() {
    const pswOk = validatePassword(pswEmpolye);
    const mailOk = validateMail(email);

    // Activer ou désactiver le bouton d'ajout d'employé en fonction de la validité du formulaire
    if (pswOk && mailOk) {
        ajoutEmployeBtn.disabled = false;
    } else {
        ajoutEmployeBtn.disabled = true;
    }
}

// Fonction de validation de l'e-mail
function validateMail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if (mailUser.match(emailRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

// Fonction de validation du mot de passe
function validatePassword(input) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if (passwordUser.match(passwordRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

// Envoyer les données du formulaire au serveur via une requête AJAX POST
$(document).ready(function() {
    $('#ajoutEmployeBtn').click(function(e) {
        e.preventDefault(); // Empêche le formulaire de se soumettre normalement

        // Capturer les données du formulaire
        let nomValue = nom.value;
        let prenomValue = prenom.value;
        let emailValue = email.value;
        let passwordValue = pswEmpolye.value;
        let roleValue = role.value;

        // Créer un objet contenant les données
        let data = {
            nom: nomValue,
            prenom: prenomValue,
            email: emailValue,
            password: passwordValue,
            role: roleValue
        };

        // Envoyer les données au serveur via une requête AJAX POST
        $.ajax({
            url: 'http://localhost:8000/api/user',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function(response) {
                // Gérer la réponse du serveur si nécessaire
                document.location.href="/gestionEmploye";
                console.log(response);
            },
            error: function(xhr, status, error) {
                // Gérer les erreurs si la requête échoue
                if (xhr.status === 409) {
                    alert("Un utilisateur avec cet email existe déjà. Veuillez utiliser une autre adresse email.");
                } else {
                    alert("Erreur lors de la création de l'employé(e).");
                    console.error(error);
                }
            }
        });
    });
});


const togglePasswordBtn = document.getElementById("togglePassword");
const passwordInput = document.getElementById("pswEmpolye");

togglePasswordBtn.addEventListener("click", function() {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
});
