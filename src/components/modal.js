const popups = document.querySelectorAll(".popup");

const editPopupButton = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector(".popup-edit-profile");
const profileForm = document.querySelector(".popup__form_type-profile");
const profileNameInput = document.querySelector('.popup__input_type-profile-name');
const profileDescriptionInput = document.querySelector('.popup__input_type-profile-description');
const profileSaveButton = document.querySelector('.popup__save-button_type-profle');
const nameProfile = document.querySelector('.profile__name');
const descriptionProfile = document.querySelector('.profile__description');

const cardPopupButton = document.querySelector(".profile__add-button");
const cardPopup = document.querySelector(".popup-add-card");
const cardForm = document.querySelector(".popup__form_type-card");
const cardNameInput = document.querySelector('.popup__input_type-card-name');
const cardUrlInput = document.querySelector('.popup__input_type-card-url');
const cardSaveButton = document.querySelector('.popup__save-button_type-card');

const imagePopup = document.querySelector(".popup-image");
const imagePopupImg = document.querySelector(".popup__image");
const imagePopupTitle = document.querySelector(".popup__title-image");





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


editPopupButton.addEventListener('click', () => {
    profileNameInput.value = nameProfile.textContent;
    profileDescriptionInput.value = descriptionProfile.textContent;
});


cardForm.addEventListener('submit',
    function (e) {
        e.preventDefault();
        renderCard(getCardElement(cardNameInput.value, cardUrlInput.value), cards);
        closePopup(e.target.closest('.popup'));
        cardForm.reset();
    }
);

profileForm.addEventListener('submit',
    function (e) {
        e.preventDefault();
        nameProfile.textContent = profileNameInput.value;
        descriptionProfile.textContent = profileDescriptionInput.value;
        closePopup(e.target.closest('.popup'));
        profileForm.reset();
    }
);

function showPopup(popup) {
    popup.classList.add("popup_active");
}

function closePopup(popup) {
    popup.classList.remove("popup_active");
}