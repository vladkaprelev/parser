import {refLayout} from "./ref.js";
import {filter} from "../../utils/filter.js";
import {inputLayout} from "./input/input.js";

export const referenceComponent = (data) => {
    if (data) {
        const input = filter(data, true, 'input')[0]
        const ref = filter(data, false, 'input')

        const textWithoutRef = ref.map(text => {
            return text['text without ref']
        }).join('')

        const resultRef = ref.map(ref => {
            return refLayout(ref)
        }).join('')
        let resultInput = ''
        if (input) {
            resultInput = inputLayout(input.input, textWithoutRef)
        }
        return resultRef+resultInput

    }
    return ''
}

