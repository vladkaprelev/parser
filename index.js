import {readFile} from "./js/readFile.js";

const inputElement = document.getElementById("file");
inputElement.addEventListener("change", handleFiles, false);

function handleFiles() {
    const fileList = this.files; /* now you can work with the file list */
    const blob = new Blob(fileList, {type: 'text/javascript'})
    const link = URL.createObjectURL(blob)
    readFile(link, function(text){
        var data = JSON.parse(text);
        console.log(data);
    });

}