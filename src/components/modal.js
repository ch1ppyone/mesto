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
    popup.addEventListener('keydown', closeEsc(popup));
    popup.classList.add("popup_active");
}

function closePopup(popup) {
    popup.removeEventListener('keydown', closeEsc(popup));
    popup.classList.remove("popup_active");
}


function closeEsc(popup)
{
    document.addEventListener('keydown', function (e) {
        if (e.key === "Escape")
            closePopup(popup);
    });
}



export {showPopup, closePopup}
