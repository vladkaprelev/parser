import {sendRequest} from "./sendRequest.js"
import {getEl} from "./utils/getEl.js"
import {render} from "./render.js"
import {mask} from "./mask/mask.js"
import {customFile} from "./utils/custom-file-input.js"

export class App {
    constructor($el) {
        this.$el = getEl($el)
        this.files = {}
        this._addListener()
    }

    _addListener() {
        this.$el.addEventListener("change", this._handleDownloadFiles)
    }

    _handleDownloadFiles() {
        const fileList = [...this.files]
        const blob = new Blob(fileList, {type: 'text/javascript'})
        const link = URL.createObjectURL(blob)
        sendRequest(link).then(data => {
            render(data)
            mask()
        })
    }

}


customFile(document, window, 0)
