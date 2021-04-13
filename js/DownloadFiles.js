import {sendRequest} from "./sendRequest.js";

export class DownloadFiles {
    constructor($el) {
        this.$el = document.getElementById($el)
        this.files = {}
        this._addListener()
    }

    _addListener() {
        this.$el.addEventListener("change", this._handleDownloadFiles)
    }

    _handleDownloadFiles() {
        const fileList = [...this.files]
        fileList.forEach(file => {
            let dt = new DataTransfer();
            dt.items.add(file);
            let fileList = dt.files
            const blob= new Blob(fileList, {type: 'text/javascript'})
            const link = URL.createObjectURL(blob)
            sendRequest(link).then(data => {
                getData(data)
            })

        })
    }
}

function getData(data) {
    console.log(data.name)
    console.log(data.fields)
    console.log(data.references)
    console.log(data.buttons)
}
