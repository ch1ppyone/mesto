export class Section {
    constructor(items, containerSelector) {
        this._items = items;
        this._containerSelector = containerSelector;
    }

    renderAll() {
        this._items.forEach((item) => {
            this._containerSelector.prepend(item);
        });
    }

    addItem(item) {
        this._containerSelector.prepend(item);
    }
}