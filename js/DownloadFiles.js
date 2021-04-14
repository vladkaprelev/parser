import {sendRequest} from "./sendRequest.js";
import {referenceComponent} from "./components/ref/refComponent.js";
import {buttonComponent} from "./components/button/buttonComponent.js";
import {fieldsComponent} from "./components/fields/fieldsComponent.js";
import {ResetButton} from "./reset.js";

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
        const blob = new Blob(fileList, {type: 'text/javascript'})
        const link = URL.createObjectURL(blob)
        sendRequest(link).then(data => {
            getData(data)
        })

    }

}

function getData(data) {

    const app = document.querySelector('.app').innerHTML = `<div> ${data.name} </div> 
    ${fieldsComponent(data.fields)}
${referenceComponent(data.references)}
${buttonComponent(data.buttons)}`

}

new ResetButton(".reset")
