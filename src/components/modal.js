



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

document.addEventListener('keydown', function (e) {
    const popup = document.querySelector(".popup_active");
    if (e.key === "Escape")
        closePopup(popup);
});

function showPopup(popup) {
    popup.classList.add("popup_active");
}

function closePopup(popup) {
    popup.classList.remove("popup_active");
}


export {showPopup, closePopup}