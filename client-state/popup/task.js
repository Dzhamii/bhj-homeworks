document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("subscribe-modal");
    const closeButton = modal.querySelector(".modal__close");
    
    const isModalClosed = getCookie("modalClosed");
    
    if (!isModalClosed) {
        modal.classList.add("modal_active");
    }
    
    closeButton.addEventListener("click", function() {
        modal.classList.remove("modal_active");
        setCookie("modalClosed", "true", 365);
    });
});

function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}

function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}
