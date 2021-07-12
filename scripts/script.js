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

const cards = document.querySelector(".cards");

const popup = document.querySelectorAll(".popup");

const editPopup = document.querySelector(".popup-edit-profile");
const cardPopup = document.querySelector(".popup-add-card");
const imagePopup = document.querySelector(".popup-image");


const editPopupButton = document.querySelector(".profile__edit-button");
const cardPopupButton = document.querySelector(".profile__add-button");

const profileNameInput = document.querySelector('.popup__input_type-profile-name');
const profileDescriptionInput = document.querySelector('.popup__input_type-profile-description');
const profileSaveButton = document.querySelector('.popup__save-button_type-profle');

const cardNameInput = document.querySelector('.popup__input_type-card-name');
const cardUrlInput = document.querySelector('.popup__input_type-card-url');
const cardSaveButton = document.querySelector('.popup__save-button_type-card');

const nameProfile = document.querySelector('.profile__name');
const descriptionProfile = document.querySelector('.profile__description');
const imagePopupImg = document.querySelector(".popup__image");
const imagePopupTitle = document.querySelector(".popup__title-image");

document.querySelectorAll(".popup__close-button").forEach(button =>
  button.addEventListener("click", () => {
    closePopup();
  }));

editPopupButton.addEventListener('click', () => showPopup(editPopup));
editPopupButton.addEventListener('click', () => {
  profileNameInput.value = nameProfile.textContent;
  profileDescriptionInput.value = descriptionProfile.textContent;
});
profileSaveButton.addEventListener('click',
  function (e) {
    e.preventDefault();
    nameProfile.textContent = profileNameInput.value;
    descriptionProfile.textContent = profileDescriptionInput.value;
    closePopup();
  }
);

cardPopupButton.addEventListener('click', () => showPopup(cardPopup));
cardSaveButton.addEventListener('click',
  function (e) {
    e.preventDefault();
    if (cardNameInput.value != "" && cardUrlInput.value != "")
      addCard(cardNameInput.value, cardUrlInput.value);
    closePopup();
    cardNameInput.value = "";
    cardUrlInput.value = "";

  }
);


document.addEventListener("DOMContentLoaded", function (event) {
  initialCards.forEach((card) => {
    addCard(card.name, card.link);
  })
});

function addCard(title, url) {
  let template = '<article class="card"> <button class="card__recycle-button"  type="button"></button>  <img src="' + url + '" alt="' + title + '" class="card__image" /> <div class="card__info-container"> <h2 class="card__title">' + title + '</h2> <button class="card__like-button" type="button"></button>  </div</article>';
  cards.insertAdjacentHTML('beforeend', template);

  document.querySelectorAll(".card__recycle-button").forEach(recycle =>
    recycle.addEventListener("click", () => {
      recycle.closest('.card').remove();
    }));

  document.querySelectorAll(".card__like-button").forEach(like =>
    like.addEventListener("click", () => {
      like.classList.toggle('card__like-button_active');
    }));

  document.querySelectorAll(".card__image").forEach(img =>
    img.addEventListener("click", () => {
      imagePopupImg.src = img.getAttribute('src');
      imagePopupTitle.innerText = img.closest('.card').querySelector('.card__title').textContent;
      showPopup(imagePopup);
    }));
}

function showPopup(popup) {
  popup.classList.add("popup_active");
}

function closePopup() {
  popup.forEach((el) =>
    el.classList.remove("popup_active"));
}