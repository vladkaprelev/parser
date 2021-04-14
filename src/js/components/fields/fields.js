export const fieldsLayout = (data) => {
    const isRequired = data.input.required ? 'required' : ''
    const isMultiple = data.input.multiple ? 'multiple' : ''
    const isPlaceholder = data.input.placeholder ? `placeholder="${data.input.placeholder}"` : ''
    const isLabel = data.label ? data.label : ''
    const isMask = data.input.mask ? `data-mask="${data.input.mask}" placeholder="${data.input.mask}"` : ''
    const number = data.input.type === 'number'
    const technology = data.input.type === 'technology'
    const textarea = data.input.type === 'textarea'
    const file = data.input.type === 'file'
    const color = data.input.type === 'color'

    if (number) {
        return `<label> 
            <h3>${isLabel}</h3>
            <input type='text' ${isRequired} ${isPlaceholder} ${isMask}></label>`
    }

    if (technology) {
        const technologies = data.input.technologies.map(text => {
            return `<option value="${text}">${text}</option>`
        }).join('')
        return `<label> 
            <h3>${isLabel}</h3>
            <select ${isMultiple} size="3" name="technologies">${technologies}</select>`
    }

    if (textarea) {
        return `<label> 
            <h3>${isLabel}</h3>
            <textarea name=${data.input.type} ${isRequired} data-input=${data.input.type}>
            ${isPlaceholder} </textarea></label>`
    }

    if (file && data.input.filetype) {
        const fileList = data.input.filetype.map(file => {
            return `image/${file}`
        }).join()
        console.log(fileList)

        return `<label> 
            <h3>${isLabel}</h3>
            <input type=${data.input.type} ${isRequired} ${isPlaceholder} accept=${fileList}
                                           data-input=${data.input.type} ${isMultiple}></label>`
    }

    if (color) {
        const colorsList = data.input.colors.map(color => {
            return `<option value="${color}">${color}</option>`
        }).join('')
        return `<label> 
            <h3>${isLabel}</h3>
            <input type=${data.input.type} ${isRequired} ${isPlaceholder} list="presetColors"
                                           data-input=${data.input.type} ${isMultiple}>
            <datalist id="presetColors">${colorsList}</datalist>                                    
            </label>`
    }

    return `<label> 
            <h3>${isLabel}</h3>
            <input type=${data.input.type} ${isRequired} ${isPlaceholder} 
                                           data-input=${data.input.type} ${isMultiple}></label>`
}
