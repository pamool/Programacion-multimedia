document.addEventListener('DOMContentLoaded', () => {

    validarDatos();
    btnContinuar();
    btnAtras();

});
let page = 1;
const validarDatos = () => {
    const continuar = document.getElementById("continuar");
    const url = document.getElementById("callbackUrl");
    const nom = document.getElementById("nombre");
    const fecha = document.getElementById("fecha");
    const direccion = document.getElementById("direccion");
    const codPostal = document.getElementById("cod_postal");
    const selProvincia = document.getElementById("sel_provincia");
    const municipio = document.getElementById("municipio");
    const errorNombre = document.getElementById('errorNombre');
    const errorFecha = document.getElementById('errorFecha');
    const errorCodigo = document.getElementById('errorCodigo');
    const errorMunicipio = document.getElementById('errorMunicipio');
    const terminar = document.getElementById("terminar");
    // Pantalla 1
    url.addEventListener('input', () => {
        if (url.value !== '') {
            continuar.disabled = false;
        } else {
            continuar.disabled = true;
        }
    });
    // Pantalla 2
    nom.addEventListener('blur', () => {
        if (nom.value == '' || nom.value.length < 3) {
            nom.classList.add('errorInput');
            nom.classList.remove('validateInput');
            errorNombre.classList.remove('d-none');
        } else {
            nom.classList.remove('errorInput');
            nom.classList.add('validateInput');
            errorNombre.classList.add('d-none');
        }
    });
    fecha.addEventListener('blur', () => {
        if (fecha.value == '') {
            fecha.classList.add('errorInput');
            fecha.classList.remove('validateInput');
            errorFecha.classList.remove('d-none');
        } else {
            fecha.classList.remove('errorInput');
            fecha.classList.add('validateInput');
            errorFecha.classList.add('d-none');
        }
    });
    direccion.addEventListener('blur', () => {
        if (nom.value == '' || nom.value.length < 3) {
        } else {
        }
    });
    codPostal.addEventListener('blur', () => {
        if (codPostal.value == '') {
            codPostal.classList.add('errorInput');
            codPostal.classList.remove('validateInput');
            errorCodigo.classList.remove('d-none');
        } else {
            codPostal.classList.remove('errorInput');
            codPostal.classList.add('validateInput');
            errorCodigo.classList.add('d-none');
        }
    });
    municipio.addEventListener('blur', () => {
        if (municipio.value == '' || municipio.value.length < 3) {
            municipio.classList.add('errorInput');
            municipio.classList.remove('validateInput');
            errorMunicipio.classList.remove('d-none');
        } else {
            municipio.classList.remove('errorInput');
            municipio.classList.add('validateInput');
        }
    });
    // Pantalla 3


    // Pantalla 4
    terminar.addEventListener('click', () => {
        terminar.href = callbackUrl.value;
    });
}
const btnContinuar = () => {
    const continuar = document.getElementById("continuar");
    continuar.addEventListener('click', () => {      
            if (page == 1) {
                document.getElementById("sec1").classList.add("d-none");
                document.getElementById("sec2").classList.remove("d-none");
                page = 2;                
            }else if(page == 2){
                let data = [];
                document.getElementById('nombreConfirm').value = document.getElementById('nombre').value;
                data[1] = document.getElementById('fecha').value;
                data[2] = document.getElementById('direccion').value;
                data[3] = document.getElementById('cod_postal').value;
                data[4] = document.getElementById('provincia').value;
                data[5] = document.getElementById('municipio').value;
                document.getElementById("sec2").classList.add("d-none");
                document.getElementById("sec3").classList.remove("d-none");
                page = 3;                
            }else if(page == 3){
                document.getElementById("sec3").classList.add("d-none");
                document.getElementById("sec4").classList.remove("d-none");
                page = 4;
            }  
    });
}
const btnAtras = () => {
    const atras = document.getElementById("atras");
    atras.addEventListener('click', () => {
        if (page == 2) {
            document.getElementById("sec2").classList.add("d-none");
            document.getElementById("sec1").classList.remove("d-none");
            page = 1;
        }else if(page == 3){
            document.getElementById("sec3").classList.add("d-none");
            document.getElementById("sec2").classList.remove("d-none");
            page = 2;
        }
    });
}