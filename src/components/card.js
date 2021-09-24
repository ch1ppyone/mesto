

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

initialCards.forEach((card) => {
  renderCard(getCardElement(card.name, card.link), cards);
})
