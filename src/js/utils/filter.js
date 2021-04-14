export function filter(data = [], isEqual = true, string = '') {
    return data.filter(ref => {
        if (isEqual) {
            return Object.keys(ref).join('') === string
        } else {
            return Object.keys(ref).join('') !== string
        }
    })
}