//boton
const btnConvertir=document.getElementById("btnConvertir");
//campo de llenado
const txtCelcius=document.getElementById("txtCelcius");
//campos donde va la conversion
const putCelcius=document.getElementById("putCelcius");
const putFahrenheit=document.getElementById("putFahrenheit");
const putKelvin=document.getElementById("putKelvin");


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

function conversionFaren(celcius){
return ((celcius*1.8)+32);
}//conversionFaren

function conversionKelvin(celcius){
return (celcius+273.5);
}//conversionKelvin


btnConvertir.addEventListener("click",function(event){
    event.preventDefault();
    //bandera
    let isValid=true;

     if (!validarCantidad(txtCelcius.value)) {
        txtCelcius.style.border = "solid thin red";
        alertValidacionesTexto.innerHTML +=
            "<strong>La cantidad no es correcta</strong><br/>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }

    if(isValid){
        let celcius=Number(txtCelcius.value);
        console.log(celcius);
        putCelcius.innerText=celcius;
        putFahrenheit.innerText=conversionFaren(celcius);
        putKelvin=conversionKelvin(celcius);
    }





});//btnConvertir