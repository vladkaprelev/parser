import {buttonLayout} from "./button.js";

export const buttonComponent = (data) => {
    if (data) {
        const buttons = data.map(button => {
            return buttonLayout(button.text)
        })

        return buttons.join('')
    }
    return ''
}