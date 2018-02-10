class Button {
    constructor() {
        this.html = document.createElement("button");
        this.html.addEventListener("mousedown", this.onClick.bind(this));
    }

    onClick() {}
}