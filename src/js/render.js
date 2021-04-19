import {getEl} from "./utils/getEl.js"
import {fieldsComponent} from "./components/fields/fieldsComponent.js"
import {referenceComponent} from "./components/ref/refComponent.js"
import {buttonComponent} from "./components/button/buttonComponent.js"
import {ResetButton} from "./utils/reset.js"

export function render(data) {

    getEl('.app').innerHTML = `<h2 class=app__title>${data.name}</h2> 
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
    new ResetButton(".reset")


}