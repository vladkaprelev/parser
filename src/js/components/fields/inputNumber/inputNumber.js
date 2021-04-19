export const inputNumber = (mask, required, label) => {
    let type = 'text'
    const html = (id) => {
        return `<label class="form-label">
             ${label}
             <input id=${id} class="form-control" type=${type} data-input="number"
                     ${required} placeholder='${mask}' data-mask='${mask}'></label>`
    }


    switch (mask) {
        case '+7 (999) 99-99-999':
            return html('tel')
        case '99-99 999999':
            return html('passport')
        case '999-999':
            return html('code')
    }

}
