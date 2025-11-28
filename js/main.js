//boton
const btnConvertir = document.getElementById("btnConvertir");
//campo de llenado
const txtCelcius = document.getElementById("txtCelcius");
//campos donde va la conversion
const putCelcius = document.getElementById("putCelcius");
const putFahrenheit = document.getElementById("putFahrenheit");
const putKelvin = document.getElementById("putKelvin");


//funciones
function validarCantidad(cantidad) {
    if (cantidad.length == 0) {
        return false;
    }
    if (isNaN(cantidad)) {
        return false;
    }
    if (Number(cantidad) <= 0) {
        return false;
    }

    return true;
} //validarCantidad

function conversionFaren(celcius) {
    return ((celcius * 1.8) + 32);
}//conversionFaren

function conversionKelvin(celcius) {
    return (celcius + 273.5);
}//conversionKelvin


btnConvertir.addEventListener("click", function (event) {
    event.preventDefault();
    //bandera
    let isValid = true;

    if (!validarCantidad(txtCelcius.value)) {
        txtCelcius.style.border = "solid thin red";
        alertValidacionesTexto.innerHTML +=
            "<strong>La temperatura no es correcta, verifique</strong><br/>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }

    if (isValid) {

        txtCelcius.style.border = "";
        alertValidacionesTexto.innerHTML = "";
        alertValidaciones.style.display = "none";
        let celcius = Number(txtCelcius.value);
        console.log(celcius);
        //putCelcius.value =celcius;
        putFahrenheit.value = conversionFaren(celcius);
        putKelvin.value = conversionKelvin(celcius);
    }





});//btnConvertir