export const fieldsLayout = (data) => {
    const isRequired = data.input.required ? 'required' : ''
    const isPlaceholder = data.input.placeholder ? `placeholder="${data.input.placeholder}"` : ''
    const isLabel = data.label ? data.label : ''
    return `<label> ${isLabel}
                <input type=${data.input.type} ${isRequired} ${isPlaceholder}>
            </label>`
}
