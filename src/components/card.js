import { api } from './Api.js';

export class Card {
  constructor(cardData, templateSelector) {
    this._cardData = cardData;
    this._templateSelector = templateSelector;
    this._getCardElement();
  }

  _isUserLike() {
    let myid = localStorage.getItem('userId');
    this._cardData.likes.some(function (elem) {
      if (elem._id === myid)
        return true;
      else return false;
    })
  }

  _getCardElement() {
    this._card = this._templateSelector.cloneNode(true);

    let myid = localStorage.getItem('userId');

    this._cardImage = this._card.querySelector('.card__image');
    this._cardText = this._card.querySelector('.card__title');
    this._cardLike = this._card.querySelector('.card__like-button');
    this._cardRecycle = this._card.querySelector('.card__recycle-button');
    this._counter = this._card.querySelector('.card__like-counter');

    this._cardText.innerText = this._cardData.name;
    this._cardImage.src = this._cardData.link;
    this._cardImage.alt = this._cardData.name;
    this._counter.innerText = this._cardData.likes.length;

    if (this._isUserLike()) {
      this._cardLike.classList.add("card__like-button_active");
    }

    if (this._cardData.owner._id !== myid) {
      this._cardRecycle.style.display = "none";
    }

    this._setEventListners();
    return this._card;

  }

  _setEventListners() {

    this._cardRecycle.addEventListener("click", () => {
      api.deleteCard(this._cardData).then((res) => {
        this._cardRecycle.closest('.card').remove();
      })
    });


    this._cardImage.addEventListener("click", () => {
      const imagePopup = document.querySelector(".popup-image");
      const imagePopupImg = document.querySelector(".popup__image");
      const imagePopupTitle = document.querySelector(".popup__title-image");
      imagePopupImg.src = this._cardData.link;
      imagePopupImg.alt = this._cardData.name;
      imagePopupTitle.innerText = this._cardData.name;
      modals.showPopup(imagePopup);
    });

    this._cardLike.addEventListener("click", () => {
      if (this._cardLike.classList.contains("card__like-button_active")) {
        api.unlike(this._cardData).then((res) => {
          this._cardLike.classList.remove("card__like-button_active");
          if (this._counter.innerText > 0)
            this._counter.innerText--;
        })
      }
      else {
        api.like(this._cardData).then((res) => {
          this._cardLike.classList.add("card__like-button_active");
          this._counter.innerText++;
        })
      }
    });
  }
}

