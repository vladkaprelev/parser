import {fieldsLayout} from "./fields.js";

export const fieldsComponent = (data) => {
    if (data) {
        const fields = data.map( input => {
            return fieldsLayout(input)
        })
        return fields.join('')
    }
    return ''
}

