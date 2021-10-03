const config = {
    url: 'https://nomoreparties.co/v1/plus-cohort-1',
    headers: {
        authorization: '6f352adb-fe9c-4435-918f-15caedc4402a',
        'Content-Type': 'application/json'
    }
}

const getResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`ERR ${res.status}`);
}

const getCards = () => {
    return fetch(`${config.url}/cards`, {
        headers: config.headers
    }).then(getResponse)
}

const getUser = () => {
    return fetch(`${config.url}/users/me`, {
        headers: config.headers
    }).then(getResponse)
}

const uploadCard = (card) => {
    return fetch(`${config.url}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: card.name,
            link: card.link
        })
    }).then(getResponse)
}


const editProfile = (name, about) => {
    return fetch(`${config.url}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            about: about
        })
    }).then(getResponse)
}


const updateAvatar = (url) => {
    return fetch(`${config.url}/users/me/avatar`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify({
        avatar: url
      })
    }).then(getResponse)
  }


const like = (card) => {
    return fetch(`${config.url}/cards/likes/` + card._id, {
        method: 'PUT',
        headers: config.headers,
    }).then(getResponse)
}

const unlike = (card) => {
    return fetch(`${config.url}/cards/likes/` + card._id, {
        method: 'DELETE',
        headers: config.headers,
    }).then(getResponse)
}

const deleteCard = (card) => {
    return fetch(`${config.url}/cards/` + card._id, {
        method: 'DELETE',
        headers: config.headers,
    }).then(getResponse)
}

export { getCards, getUser, uploadCard, deleteCard, like, unlike, editProfile, updateAvatar }
