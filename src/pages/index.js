import * as modals from '../components/modal.js';
import * as validate from '../components/validate.js';
import { api } from '../components/api.js';
import { Card } from '../components/card.js';
import * as user from  '../components/utils.js';
import '../pages/index.css';


const editPopup = document.querySelector(".popup-edit-profile");
const profileForm = document.querySelector(".popup__form_type-profile");
const profileNameInput = document.querySelector('.popup__input_type-profile-name');
const profileDescriptionInput = document.querySelector('.popup__input_type-profile-description');
const profileSaveButton = document.querySelector('.popup__save-button_type-profle');
const nameProfile = document.querySelector('.profile__name');
const descriptionProfile = document.querySelector('.profile__description');
const avatarImg = document.querySelector('.profile__avatar');

const avatarPopup = document.querySelector(".popup-edit-avatar");
const avatarForm = document.querySelector(".popup__form_type-avatar");
const avatarSaveButton = document.querySelector('.popup__save-button_type-avatar');
const avatarUrlInput = document.querySelector('.popup__input_type-avatar-url');

const cardPopup = document.querySelector(".popup-add-card");
const cardForm = document.querySelector(".popup__form_type-card");
const cardNameInput = document.querySelector('.popup__input_type-card-name');
const cardUrlInput = document.querySelector('.popup__input_type-card-url');
const cardSaveButton = document.querySelector('.popup__save-button_type-card');

const editPopupButton = document.querySelector(".profile__edit-button");
const cardPopupButton = document.querySelector(".profile__add-button");
const avatarPopupButton = document.querySelector(".profile__avatar-button");

const cardTemplate = document.querySelector('.card-template').content;
const cards = document.querySelector(".cards");



Promise.all([api.getCards(), api.getUser()])
    .then(([cardsData, userData]) => {
        cardsData.reverse();
        cardsData.forEach((cardData) => {
            user.userData = userData;
            updateProfile(userData.name, userData.about, userData.avatar);
            const card = new Card(cardData, cardTemplate);
            card.renderCard(cards);
           
        })
    })
    .catch((err) => {
        console.log(err)
    })

cardForm.addEventListener('submit',
    function (e) {
        e.preventDefault();
        cardSaveButton.textContent = "Создание...";
        api.uploadCard({ 'name': cardNameInput.value, 'link': cardUrlInput.value }).then((res) => {
            cards.renderCard(cards.getCardElement(res, user.userData));
            modals.closePopup(e.target.closest('.popup'));
            cardForm.reset();
            validate.resetValidation(cardForm);
        })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                cardSaveButton.textContent = "Создать";
            })
    }

);

profileForm.addEventListener('submit',
    function (e) {
        e.preventDefault();
        profileSaveButton.textContent = "Сохранение...";
        api.editProfile(profileNameInput.value, profileDescriptionInput.value).then((res) => {
            updateProfile(res.name, res.about, res.avatar);
            modals.closePopup(e.target.closest('.popup'));
            profileForm.reset();
        })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                profileSaveButton.textContent = "Сохранить";
            })
    }
);

editPopupButton.addEventListener('click', () => {
    profileNameInput.value = nameProfile.textContent;
    profileDescriptionInput.value = descriptionProfile.textContent;
    modals.showPopup(editPopup);
});


avatarPopupButton.addEventListener('click', () => {
    modals.showPopup(avatarPopup);
});


avatarForm.addEventListener('submit',
    function (e) {
        e.preventDefault();
        avatarSaveButton.textContent = "Сохранение...";
        api.updateAvatar(avatarUrlInput.value).then((res) => {
            avatarImg.src = res.avatar;
            modals.closePopup(e.target.closest('.popup'));
            avatarForm.reset();
        })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                avatarSaveButton.textContent = "Сохранить";
            })
    }
);

cardPopupButton.addEventListener('click', () => modals.showPopup(cardPopup));

function updateProfile(name, description, avatar) {
    nameProfile.textContent = name;
    descriptionProfile.textContent = description;
    avatarImg.src = avatar;
}

validate.enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type-error',
    errorClass: 'popup__error_visible'
});





