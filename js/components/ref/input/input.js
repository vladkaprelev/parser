export const inputLayout = (data, text) => {

    const isChecked = data.checked === 'false' ? '' : 'checked'

    return ` <label> ${text}
                <input type=${data.type} required=${data.required} ${isChecked}>
             </label>`
}
