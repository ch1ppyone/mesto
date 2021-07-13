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
const cardTemplate = document.querySelector('.card-template').content;

const profileForm = document.querySelector(".popup__form_type-profile");
const cardForm = document.querySelector(".popup__form_type-card");

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
    closePopup(button.closest('.popup'));
  }));

editPopupButton.addEventListener('click', () => showPopup(editPopup));
editPopupButton.addEventListener('click', () => {
  profileNameInput.value = nameProfile.textContent;
  profileDescriptionInput.value = descriptionProfile.textContent;
});

profileForm.addEventListener('submit',
  function (e) {
    e.preventDefault();
    nameProfile.textContent = profileNameInput.value;
    descriptionProfile.textContent = profileDescriptionInput.value;
    closePopup(e.target.closest('.popup'));
    profileForm.reset();
  }
);

cardPopupButton.addEventListener('click', () => showPopup(cardPopup));
cardForm.addEventListener('submit',
  function (e) {
    e.preventDefault();
    renderCard(getCardElement(cardNameInput.value, cardUrlInput.value), cards);
    closePopup(e.target.closest('.popup'));
    cardForm.reset();
  }
);

document.addEventListener("DOMContentLoaded", function (event) {
  initialCards.forEach((card) => {
    renderCard(getCardElement(card.name, card.link), cards);
  })
});

function showPopup(popup) {
  popup.classList.add("popup_active");
}

function closePopup(popup) {
  popup.classList.remove("popup_active");
}


function getCardElement(name, link) {
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const cardText = card.querySelector('.card__title');
  const cardLike = card.querySelector('.card__like-button');
  const cardRecycle = card.querySelector('.card__recycle-button');

  cardText.innerText = name;
  cardImage.src = link;
  cardImage.alt = name;

  cardLike.addEventListener("click", () => {
    cardLike.classList.toggle('card__like-button_active');
  });

  cardImage.addEventListener("click", () => {
    imagePopupImg.src = link;
    imagePopupImg.alt = name;
    imagePopupTitle.innerText = name;
    showPopup(imagePopup);
  });

  cardRecycle.addEventListener("click", () => {
    cardRecycle.closest('.card').remove();
  });

  return card;
}

function renderCard(card, container) {
  container.prepend(card);
}