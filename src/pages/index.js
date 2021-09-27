import * as modals from '../components/modal.js';
import * as validate from '../components/validate.js';
import * as cards from '../components/card.js';
import * as profile from '../components/utils.js';
import '../pages/index.css';


const editPopup = document.querySelector(".popup-edit-profile");
const profileForm = document.querySelector(".popup__form_type-profile");
const profileNameInput = document.querySelector('.popup__input_type-profile-name');
const profileDescriptionInput = document.querySelector('.popup__input_type-profile-description');
const profileSaveButton = document.querySelector('.popup__save-button_type-profle');
const nameProfile = document.querySelector('.profile__name');
const descriptionProfile = document.querySelector('.profile__description');


const cardPopup = document.querySelector(".popup-add-card");
const cardForm = document.querySelector(".popup__form_type-card");
const cardNameInput = document.querySelector('.popup__input_type-card-name');
const cardUrlInput = document.querySelector('.popup__input_type-card-url');
const cardSaveButton = document.querySelector('.popup__save-button_type-card');

const editPopupButton = document.querySelector(".profile__edit-button");
const cardPopupButton = document.querySelector(".profile__add-button");



cardForm.addEventListener('submit',
    function (e) {
        e.preventDefault();
        cards.renderCard(cards.getCardElement(cardNameInput.value, cardUrlInput.value), cards.cards);
        modals.closePopup(e.target.closest('.popup'));
        cardForm.reset();
        validate.resetValidation(cardForm);
    }
);

profileForm.addEventListener('submit',
    function (e) {
        e.preventDefault();
        nameProfile.textContent = profileNameInput.value;
        descriptionProfile.textContent = profileDescriptionInput.value;
        modals.closePopup(e.target.closest('.popup'));
        profileForm.reset();
    }
);

editPopupButton.addEventListener('click', () => {
    profileNameInput.value = nameProfile.textContent;
    profileDescriptionInput.value = descriptionProfile.textContent;
    modals.showPopup(editPopup);
});

cardPopupButton.addEventListener('click', () => modals.showPopup(cardPopup));

validate.enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type-error',
    errorClass: 'popup__error_visible'
});





