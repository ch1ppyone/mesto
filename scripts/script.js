
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

const editPopup = document.querySelector(".popup");
const editPopupButton = document.querySelector(".profile__edit-button");
const colosePopupButton = document.querySelector(".popup__close-button");
const savePopupButton = document.querySelector('.popup__save-button');
const nameProfile = document.querySelector('.profile__name');
const descriptionProfile = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_type-name');
const descriptionInput = document.querySelector('.popup__input_type-description');


editPopupButton.addEventListener('click', showEditPopup);
colosePopupButton.addEventListener('click', closeEditPopup);


savePopupButton.addEventListener('click',
    function (e) {
        e.preventDefault();
        nameProfile.textContent = nameInput.value;
        descriptionProfile.textContent = descriptionInput.value;
        closeEditPopup();
    }
);

document.querySelectorAll(".card__like-button").forEach(like =>
    like.addEventListener("click", () => {
        if (!like.classList.contains("card__like-button_active"))
            like.classList.add("card__like-button_active")
        else like.classList.remove("card__like-button_active")
    }));

function closeEditPopup() {
    editPopup.classList.remove("popup_active");
}

function showEditPopup() {
    nameInput.value = nameProfile.textContent;
    descriptionInput.value = descriptionProfile.textContent;
    editPopup.classList.add("popup_active");
}

