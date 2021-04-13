import {refLayout} from "./ref.js";

export const referenceComponent = (data) => {
    if (data) {
        const input = data.filter(ref => {
            return Object.keys(ref).join('') === 'input'
        })

        const ref = data.filter(ref => {
            return Object.keys(ref).join('') !== 'input'
        })

        const textWithoutRef = ref.map(text => {
            return text['text without ref']
        })

        const result = ref.map(ref => {
            return refLayout(ref)
        })


        return result.join('')

    }
    return ''
}