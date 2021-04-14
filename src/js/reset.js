export class ResetButton {
    constructor(selector) {
        this.$el = document.querySelector(selector)
        this._addEventListener()
    }

    _addEventListener() {
        this.$el.addEventListener('click', this._handleButtonResetClick)
    }

    _handleButtonResetClick() {
        const app = document.querySelector('.app').innerHTML = ''
    }
}
