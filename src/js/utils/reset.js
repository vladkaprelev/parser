import {getEl} from "./getEl.js"

export class ResetButton {
    constructor(selector) {
        this.$el = getEl(selector)
        this._addEventListener()
    }

    _addEventListener() {
        this.$el.addEventListener('click', this._handleButtonResetClick)
    }

    _handleButtonResetClick() {
        const app = getEl('.app').innerHTML = ''
    }
}
