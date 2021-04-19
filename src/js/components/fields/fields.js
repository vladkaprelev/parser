import {inputNumber} from "./inputNumber/inputNumber.js"

export const fieldsLayout = (data) => {
    const isRequired = data.input.required ? 'required' : ''
    const isMultiple = data.input.multiple ? 'multiple' : ''
    const isPlaceholder = data.input.placeholder ? `placeholder="${data.input.placeholder}"` : ''
    const isLabel = data.label ? data.label : ''
    const number = data.input.type === 'number'
    const technology = data.input.type === 'technology'
    const textarea = data.input.type === 'textarea'
    const file = data.input.type === 'file'
    const color = data.input.type === 'color'
    const checkbox = data.input.type === 'checkbox'

    if (number && data.input.mask) {
        return inputNumber(data.input.mask, isRequired, isLabel)
    }

    if (technology) {
        const technologies = data.input.technologies.map(text => {
            return `<option value="${text}">${text}</option>`
        }).join('')
        return `<label class="form-label"> 
            ${isLabel}
            <select class="form-select" ${isMultiple} size="3" name="technologies">${technologies}</select>
            </label>`
    }

    if (textarea) {
        return `
<div class="form-floating">
  <textarea class="form-control" placeholder=${data.input.placeholder} 
  style="height: 100px" name=${data.input.type}  ${isRequired} data-input=${data.input.type}></textarea>
  <label class="label" for="floatingTextarea2">${isLabel}</label>
</div>`
    }

    if (file && data.input.filetype) {
        const fileList = data.input.filetype.map(file => {
            return `image/${file}`
        }).join()
        return `<label class="form-label"> 
            ${isLabel}
            <input class="form-control" type=${data.input.type} ${isRequired} ${isPlaceholder} accept=${fileList}
                                           data-input=${data.input.type} ${isMultiple}></label>`
    }

    if (color) {
        const colorsList = data.input.colors.map(color => {
            return `<option value="${color}">${color}</option>`
        }).join('')
        return `<div class="color-form"><label class="form-label"> 
            ${isLabel}</label>
            <input type=${data.input.type} ${isRequired} value="#3366ff"
                                           ${isPlaceholder} list="presetColors"
                                           data-input=${data.input.type} ${isMultiple}>
            <datalist id="presetColors">${colorsList}</datalist>                                    
            </div>`
    }

    if (checkbox) {
        return `<label class="form-check-label">
            ${isLabel}
            <input class="form-check-input" type=${data.input.type} ${isRequired} ${isPlaceholder}
            data-input=${data.input.type} ${isMultiple}></label>`
    }


    return `<label class="form-label"> 
            ${isLabel}
            <input class="form-control" type=${data.input.type} ${isRequired}  ${isPlaceholder}
                                           data-input=${data.input.type}></label>`
}