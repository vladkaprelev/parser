export const inputLayout = (data, text) => {

    const isChecked = data.checked === 'false' ? '' : 'checked'

    return ` <label class="form-check-label col-6 ref-label"> ${text}
                <input class="form-check-input" type=${data.type} required=${data.required} ${isChecked}>
             </label>`
}
