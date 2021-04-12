export function readFile(file, callback) {
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("text/javascript")
    rawFile.open("GET", file, true)
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}