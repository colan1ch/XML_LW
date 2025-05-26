export class AddButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(listener) {
        document
            .getElementById("add-button")
            .addEventListener("click", listener)
    }

    getHTML() {
        return (
            `
                <button id="add-button" class="btn btn-primary" type="button">Добавить карточку</button>
            `
        )
    }

    render(listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener)
    }
}