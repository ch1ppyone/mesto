import * as modals from './components/modal.js';
import * as validate from './components/validate.js';
import * as cards from './components/card.js';
import * as profile from './components/utils.js';
import './pages/index.css';


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
editPopupButton.addEventListener('click', () => modals.showPopup(editPopup));
const cardPopupButton = document.querySelector(".profile__add-button");
cardPopupButton.addEventListener('click', () =>  modals.showPopup(cardPopup));


cardForm.addEventListener('submit',
    function (e) {
        e.preventDefault();
        renderCard(getCardElement(cardNameInput.value, cardUrlInput.value), cards);
        modals.closePopup(e.target.closest('.popup'));
        cardForm.reset();
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
    validate.enableValidation();
});






