const telMask = (el) => {
    el.addEventListener('input', function (event) {
        let x = event.target.value.replace(/\D/g, '').match(/(\d?)(\d{0,3})(\d{0,2})(\d{0,2})(\d{0,3})/)
        return event.target.value = !x[2] ? x[1] : `+${x[1]} (${x[2]}) ${x[3]}-${x[4]}-${x[5]}`
    })
}

const passportMask = (el) => {
    el.addEventListener('input', function (event) {

        let x = event.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})(\d{0,6})/)
        return event.target.value = !x[2] ? x[1] : `${x[1]}-${x[2]} ${x[3]}`
    })
}

const codeMask = (el) => {
    el.addEventListener('input', function (event) {

        let x = event.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})/)
        return event.target.value = !x[2] ? x[1] : `${x[1]}-${x[2]}`
    })
}

export const mask = () => {

    document.querySelectorAll('[data-mask]').forEach(item => {
        switch (item.id) {
            case 'tel':
                telMask(item)
                break
            case 'passport':
                passportMask(item)
                break
            case 'code':
                codeMask(item)
                break
        }
    })
}