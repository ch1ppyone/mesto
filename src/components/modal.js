import * as validate from '../components/validate.js';
const popups = document.querySelectorAll(".popup");

document.querySelectorAll(".popup__close-button").forEach(button =>
    button.addEventListener("click", () => {
        closePopup(button.closest('.popup'));
    }));


popups.forEach(popup =>
    popup.addEventListener("click", (e) => {
        if (e.target.classList.contains('popup')) {
            closePopup(popup);
        }
    }),
);



function showPopup(popup) {
    popup.classList.add("popup_active");
    document.addEventListener('keydown', closeEsc);
}

function closePopup(popup) {
    popup.classList.remove("popup_active");
    document.removeEventListener('keydown', closeEsc);
}


function closeEsc(e) {
    if (e.key === "Escape") {
        const popup =  document.querySelector(".popup_active");
        closePopup(popup);
    }
}



export { showPopup, closePopup }
