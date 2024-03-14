
document.addEventListener("DOMContentLoaded", function() {
    let rangeInputs = document.querySelectorAll("input[type='range']");
    let labels = document.querySelectorAll("label.form-label");

    function updateLabels() {
        rangeInputs.forEach(function(input, index) {
            let value = input.value;
            let maxValue = input.getAttribute('max');
            labels[index].textContent = labels[index].textContent.split(" :")[0] + " : " + value + " / " + maxValue;
        });
    }

    rangeInputs.forEach(function(input) {
        input.addEventListener("input", updateLabels);
    });

    updateLabels();
});



document.addEventListener("DOMContentLoaded", function() {
    let validerButton = document.getElementById('valider');

    function getValues() {
        let b = document.getElementById('buildRange').value;
        let o = document.getElementById('orgaRange').value;
        let t = document.getElementById('terraRange').value;
        let d = document.getElementById('devRange').value;
        let r = document.getElementById('packRange').value;
        let u = document.getElementById('urgenceRange').value;
        let haut = document.getElementById('hautRange').value;
        let size = document.getElementById('sizeNumber').value;

        let coef = Math.round(10000.0 + size / 2.0);
        
        let res = Math.round(((u*((5*b+5*o+10*d+5*t+5*r)/5) *(size - 0.1* size)*0.5*haut)/(coef))*100) / 100.00;
        res = Math.round(res / 5) * 5;
        if(res <= 0){res = -1 }
        if((res <= 10)&&(res > 0)){res = 10}

        console.log(res);

        let txt = document.getElementById("res");
        txt.textContent = "Prix estimé : " + res + " €";
    }

    validerButton.addEventListener("click", getValues);
});
