import * as modals from '../components/modal.js';
import * as api from '../components/api.js';

const cards = document.querySelector(".cards");
const cardTemplate = document.querySelector('.card-template').content;


function getCardElement(cardData, userData) {
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const cardText = card.querySelector('.card__title');
  const cardLike = card.querySelector('.card__like-button');
  const cardRecycle = card.querySelector('.card__recycle-button');
  const counter = card.querySelector('.card__like-counter');

  cardText.innerText = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;


  const isUserLike = cardData.likes.some(function (elem) {
    if (elem._id === userData._id) {
      return true;
    }
  });

  counter.innerText = cardData.likes.length;

  if (isUserLike) {
    cardLike.classList.add("card__like-button_active");
  }

  if (cardData.owner._id !== userData._id) {
    cardRecycle.style.display = "none";
  }

  cardImage.addEventListener("click", () => {
    const imagePopup = document.querySelector(".popup-image");
    const imagePopupImg = document.querySelector(".popup__image");
    const imagePopupTitle = document.querySelector(".popup__title-image");
    imagePopupImg.src = cardData.link;
    imagePopupImg.alt = cardData.name;
    imagePopupTitle.innerText = cardData.name;
    modals.showPopup(imagePopup);
  });

  cardRecycle.addEventListener("click", () => {
    api.deleteCard(cardData).then((res) => {
      cardRecycle.closest('.card').remove();
    })
  });

  cardLike.addEventListener("click", () => {

    if (cardLike.classList.contains("card__like-button_active")) {
      api.unlike(cardData).then((res) => {
        cardLike.classList.remove("card__like-button_active");
        if (counter.innerText > 0)
          counter.innerText--;
      })
    }
    else {
      api.like(cardData).then((res) => {
        cardLike.classList.add("card__like-button_active");
        counter.innerText++;
      })
    }
  });

  return card;
}
function renderCard(card) {
  cards.prepend(card);
}


export { renderCard, getCardElement }