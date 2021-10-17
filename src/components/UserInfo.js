export class UserInfo {

    constructor(selectors) {
        this._name = document.querySelector(selectors.name);
        this._about = document.querySelector(selectors.about);
        this._avatar = document.querySelector(selectors.avatar);
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._about.textContent,
            avatar: this._avatar
        };
    }

    
    setUserInfo({ name, about, avatar }) {
        if (name)
            this._name.textContent = name;
        if (about)
            this._about.textContent = about;
        if (avatar)
            this._avatar.src = avatar;
    }
}