export class Api {

    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _getResponse = (res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getCards = () => {
        return fetch(`${this._url}/cards`, {
            headers: this._headers
        }).then(this._getResponse)
    }

    getUser = () => {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers
        }).then(this._getResponse)
    }

    uploadCard = (card) => {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: card.name,
                link: card.link
            })
        }).then(this._getResponse)
    }

    editProfile = (name, about) => {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        }).then(this._getResponse)
    }

    updateAvatar = (url) => {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: url
            })
        }).then(this._getResponse)
    }

    like = (card) => {
        return fetch(`${this._url}/cards/likes/` + card._id, {
            method: 'PUT',
            headers: this._headers,
        }).then(this._getResponse)
    }

    unlike = (card) => {
        return fetch(`${this._url}/cards/likes/` + card._id, {
            method: 'DELETE',
            headers: this._headers,
        }).then(this._getResponse)
    }

    deleteCard = (card) => {
        return fetch(`${this._url}/cards/` + card._id, {
            method: 'DELETE',
            headers: this._headers,
        }).then(this._getResponse)
    }

}

export const api = new Api  ({
    url: 'https://nomoreparties.co/v1/plus-cohort-1',
    headers: {
        authorization: '6f352adb-fe9c-4435-918f-15caedc4402a',
        'Content-Type': 'application/json'
    }
});










