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
        getEl('.app').innerHTML = ''
        const inputFile = getEl('.inputfile')
        inputFile.value = ''
        inputFile.nextElementSibling.querySelector('span').innerHTML = 'Choose a file&hellip;'
    }
}
