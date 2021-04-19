import {buttonLayout} from "./button.js"

export const buttonComponent = (data) => {
    if (data) {
        const buttons = data.map(button => {
            if (button.text === 'Cancel') {
                let type = 'reset'
                return buttonLayout(button.text, type)
            }
            return buttonLayout(button.text)
        })

        return buttons.join('')
    }
    return ''
}