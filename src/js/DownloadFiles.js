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

    const app = document.querySelector('.app').innerHTML = `<h2 class=app__title>${data.name}</h2> 
    <form class="form container-fluid">
        <div class="row">
            ${fieldsComponent(data.fields)}
        </div>
        <div class="row ref-list">
            ${referenceComponent(data.references)}
        </div>
        <div class="row button-list mx-auto">
            ${buttonComponent(data.buttons)}
        </div>
    </form>`
}

new ResetButton(".reset")
