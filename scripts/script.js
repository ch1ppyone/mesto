let editPopup = document.querySelector(".popup");
let editPopupButton = document.querySelector(".profile__edit-button");
let colosePopupButton = document.querySelector(".popup__close-button");
let savePopupButton = document.querySelector('.popup__save-button');
let nameProfile = document.querySelector('.profile__name');
let descriptionProfile = document.querySelector('.profile__description');
let nameInput = document.querySelector('.popup__input_value-name');
let descriptionInput = document.querySelector('.popup__input_value-description');


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

