function processText(inputElement, outputId) {
    var text = inputElement.value;
    var id = inputElement.id;
    var outputTextarea = document.getElementById(outputId);

    if (id == 'text1') {
        outputTextarea.value = encrypt(text);
    } else {
        outputTextarea.value = decrypt(text);
    }
}

function encrypt(text) {
    stepOld = text;
    for (var i = 0; i < stepOld.length; i++) {
        step = '';
        for (var j = 0; j < stepOld.length; j++) {
            var charCode = stepOld.charCodeAt(j);
            step += String.fromCharCode(charCode + 1);
        }
        stepOld = step;
    }
    return stepOld;
}

function decrypt(text) {
    stepOld = text;
    for (var i = 0; i < stepOld.length; i++) {
        step = '';
        for (var j = 0; j < stepOld.length; j++) {
            var charCode = stepOld.charCodeAt(j);
            step += String.fromCharCode(charCode - 1);
        }
        stepOld = step;
    }
    return stepOld;
}