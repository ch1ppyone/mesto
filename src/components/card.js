import { api } from '../components/api.js';
import {userData} from '../components/utils.js';

export class Card {
  constructor(cardData, templateSelector) {
    this._cardData = cardData;
    this._templateSelector = templateSelector;
  }

  _getCardElement() {


    const card = this._templateSelector.cloneNode(true);
    const cardImage = card.querySelector('.card__image');
    const cardText = card.querySelector('.card__title');
    const cardLike = card.querySelector('.card__like-button');
    const cardRecycle = card.querySelector('.card__recycle-button');
    const counter = card.querySelector('.card__like-counter');
    cardText.innerText = this._cardData.name;
    cardImage.src = this._cardData.link;
    cardImage.alt = this._cardData.name;

    const isUserLike = this._cardData.likes.some(function (elem) {
      if (elem._id === userData._id) {
        return true;
      }
    });

    counter.innerText = this._cardData.likes.length;

    if (isUserLike) {
      cardLike.classList.add("card__like-button_active");
    }

    if (this._cardData.owner._id !== userData._id) {
      cardRecycle.style.display = "none";
    }

    cardImage.addEventListener("click", () => {
      const imagePopup = document.querySelector(".popup-image");
      const imagePopupImg = document.querySelector(".popup__image");
      const imagePopupTitle = document.querySelector(".popup__title-image");
      imagePopupImg.src = this._cardData.link;
      imagePopupImg.alt = this._cardData.name;
      imagePopupTitle.innerText = this._cardData.name;
      modals.showPopup(imagePopup);
    });

    cardRecycle.addEventListener("click", () => {
      api.deleteCard(this._cardData).then((res) => {
        cardRecycle.closest('.card').remove();
      })
    });

    cardLike.addEventListener("click", () => {

      if (cardLike.classList.contains("card__like-button_active")) {
        api.unlike(this._cardData).then((res) => {
          cardLike.classList.remove("card__like-button_active");
          if (counter.innerText > 0)
            counter.innerText--;
        })
      }
      else {
        api.like(this._cardData).then((res) => {
          cardLike.classList.add("card__like-button_active");
          counter.innerText++;
        })
      }
    });
    return card;
  }

  renderCard(container) {
    container.prepend(this._getCardElement());
  }

}


