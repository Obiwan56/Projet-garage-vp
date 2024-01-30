const tokenCookieName = "accesstoken";
const roleCoockie = "role";
const btnDeconnexion = document.getElementById("deconnexionBtn");

btnDeconnexion.addEventListener("click", deconnexion);

function getRole(){
    return getCookie(roleCoockie);
}

function deconnexion(){
    eraseCookie(tokenCookieName);
    eraseCookie(roleCoockie);
    window.location.reload();
}

function setToken(token){
    setCookie(tokenCookieName, token, 7);
}

function getToken(){
    return getCookie(tokenCookieName);
}


function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


function isConnected(){
    if(getToken() == null || getToken == undefined){
        return false;
    }
    else{
        return true;
    }
}


/*tous les rôles
deconnected
connected (admin ou employé)
    -admin
    -employe
*/
function elementEnFonctionDesRoles(){
    const userConnected = isConnected();
    const role = getRole();

    let allElementsToEdit = document.querySelectorAll('[data-voir]');

    allElementsToEdit.forEach(element =>{
        switch(element.dataset.voir){
            case 'deconnected':
                if(userConnected){
                    element.classList.add("d-none");
                }
                break;
            case 'connected':
                if(!userConnected){
                    element.classList.add("d-none");
                }
                break;
            case 'admin':
                if(!userConnected || role != "admin"){
                    element.classList.add("d-none");
                }
                break;
            case 'employe':
                if(!userConnected || role != "employe"){
                    element.classList.add("d-none");
                }
                break;
        }
    })
}
