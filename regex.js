/*
2. Sacar mensajes error (javi)
4. Cajas texto provincia (adri) check
5. IBAN (marcos) check
6. Seleccion botones (diana)check
7. CCAA (adri)check
8. Finalizacion
*/
window.onload = inicio;

function inicio() {

    document.formulario.onsubmit = empezar;
}

function empezar() {
    document.formulario.errornombre.value = "";
    document.formulario.errornif.value = "";
    document.formulario.errorcodempresa.value = "";
    document.formulario.errordireccion.value = "";
    document.formulario.errortel.value = "";
    document.formulario.errorpostal.value = "";
    document.formulario.errorlocalidad.value = "";
    document.formulario.errorcodbanco.value = "";
    document.formulario.errorcodoficina.value = "";
    document.formulario.errorcodcontrol.value = "";
    document.formulario.errornumcuenta.value = "";
    document.formulario.erroriban.value = "";
    document.formulario.errorfecha.value = "";
    document.formulario.errornumtrabajadores.value = "";
    document.formulario.errornumfabricas.value = "";
    document.formulario.errorpersona.value = "";
    document.formulario.errortipoempresa.value = "";
    document.formulario.errorsectores.value = "";
    document.formulario.errorprovincias.value = "";
    let envio = true;

    if (!validarNombre(document.formulario.nombre.value)) {
        document.formulario.errornombre.value = "Nombre no válido";
        envio = false;
    }

    if (!validarCodEmpresa(document.formulario.codempresa.value)) {
        document.formulario.errorcodempresa.value = "Codigo de empresa no válido";
        envio = false;
    }

    if (!validarDireccion(document.formulario.direccion.value)) {
        document.formulario.errordireccion.value = "Direccion no válida";
        envio = false;
    }

    if (!validarTelefono(document.formulario.telefono.value)) {
        document.formulario.errortel.value = "Error telefono no valido";
        envio = false;
    }

    if (!validarLocalidad(document.formulario.localidad.value)) {
        document.formulario.errorlocalidad.value = "Localidad no valida";
        envio = false;
    }

    if (!validarCodPostal(document.formulario.codpostal.value)) {
        document.formulario.errorpostal.value = "Codigo Postal no valido";
        envio = false;
    }

    if (!validarCodigo(document.formulario.codbanco.value)) {
        document.formulario.errorcodbanco.value = "Codigo del banco erroneo";
        envio = false;
    }

    if (!validarCodigo(document.formulario.codoficina.value)) {
        document.formulario.errorcodoficina.value = "Codigo de la oficina erroneo";
        envio = false;
    }

    if (!validarCodigo(document.formulario.codcontrol.value)) {
        document.formulario.errorcodcontrol.value = "Codigo de control erroneo";
        envio = false;
    }

    if (!validarNumCuenta(document.formulario.numcuenta.value)) {
        document.formulario.errornumcuenta.value = "Numero de cuenta erroneo";
        envio = false;
    }

    if (!validarIBAN(document.formulario.iban.value)) {
        document.formulario.erroriban.value = "IBAN erroneo";
        envio = false;
    }

    if (!validarFecha(document.formulario.fecha.value)) {
        document.formulario.errorfecha.value = "Fecha erronea";
        envio = false;
    }

    if (!validarNumEmpleados(document.formulario.numtrabajadores.value)) {
        document.formulario.errornumtrabajadores.value = "Numero erroneo de trabajadores";
        envio = false;
    }

    if (!validarNumFabricas(document.formulario.numfabricas.value)) {
        document.formulario.errornumfabricas.value = "Numero erroneo de fabricas";
        envio = false;
    }

    if (!validarNIFCIF(document.formulario.cifnif.value)) {
        document.formulario.errornif.value = "CIF/NIF erroneo";
        envio = false;
    }

    if (!validarDigitos()) {
        envio = false;
    }

    if (!botonSelect()) {
        envio = false;
    }

    if (!validarCCAA()) {
        envio = false;
    }

    return envio;
}

function validarCCAA() {//check
    let comp = true;
    let contador = 0;
    let comunidades = document.formulario.comunidades.options;

    for (let i = 0; i < comunidades.length; i++) {
        if (comunidades[i].selected) {
            contador++;
        }
    }
    if (contador < 2) {
        comp = false;
        document.formulario.errorprovincias.value = "Error, debe seleccionar al menos dos comunidades";
    }
    return comp;
}

function botonSelect() {//check
    /*let tipoPersona = document.formulario.persona.value;
    if (tipoPersona == "") {
        document.formulario.errortipoPersona.value = "Debe haber una opción seleccionada";
    }

    let tipoempresa = document.formulario.tipoempresa.value;
    if (tipoempresa == "") {
        document.formulario.errortipoempresa.value = "Debe haber una opción seleccionada";
    }

    let sectores = document.formulario.sectores.value;
    if (sectores == "sector1" || sectores == "sector2"|| sectores == "sector3" || sectores == "sector4"|| sectores == "sector5" || sectores == "sector6"
    || sectores == "sector7"|| sectores == "sector8"|| sectores == "sector9"|| sectores == "sector10"|| sectores == "sector11"|| sectores == "sector12"){
        document.formulario.errorsectores.value = "Debe haber una opción seleccionada";
    }*/
    /*
        let comp = true;
        let radio = document.formulario.tipopersona.checked;
        let sector = document.formulario.sector.checked;
        let tipo = document.formulario.tipo.checked;
        if (!radio) {
            document.formulario.errorpersona.value = "Es obligatorio elegir una opción en personal";
            comp = false;
        }
        if (!sector) {
            document.formulario.errorsectores.value = "Es obligatorio elegir una opción de sector económico";
            comp = false;
        }
        if (!tipo) {
            document.formulario.errortipoempresa.value = "Es obligatorio elegir una opción de tipo de empresa";
            comp = false;
        }
        return comp;*/
    let comp = true;
    let tipoPersona = document.formulario.tipopersona.value;
    if (tipoPersona == "") {
        comp = false;
        document.formulario.errorpersona.value = "Debe haber una opción seleccionada";
    }

    let tipoempresa = document.formulario.tipoempresa.value;
    if (tipoempresa == "") {
        comp = false;
        document.formulario.errortipoempresa.value = "Debe haber una opción seleccionada";
    }

    let sectores = document.formulario.sectores.value;
    if (sectores == "sector1" || sectores == "sector2" || sectores == "sector3" || sectores == "sector4" || sectores == "sector5" || sectores == "sector6"
        || sectores == "sector7" || sectores == "sector8" || sectores == "sector9" || sectores == "sector10" || sectores == "sector11" || sectores == "sector12") {
        console.log("entra");
        comp = false;
        document.formulario.errorsectores.value = "Debe haber una opción seleccionada";
    }

    let comunidades = document.formulario.comunidades;
    let numerocomunidades = 0;
    for (let i = 0; i < comunidades.length; i++) {
        if (comunidades[i].selected) {
            numerocomunidades += 1;
        }
    }
    if (numerocomunidades < 2) {
        comp = false;
        document.formulario.errorprovincias.value = "Debe haber al menos dos comunidades seleccionadas";
    }
    return comp;
}

function esDigito(texto) {//check

    let expregDigitos = /^([0-9])*$/;

    if (!expregDigitos.test(texto)) {
        return false;
    }
    return true;
}

function validarDigitos() {//check
    let valido = true;
    let telefono = document.formulario.telefono.value;
    let codPostal = document.formulario.codpostal.value;
    let codBanco = document.formulario.codbanco.value;
    let codOficina = document.formulario.codoficina.value;
    let codControl = document.formulario.codcontrol.value;
    let numCuenta = document.formulario.numcuenta.value;
    let numTrabajadores = document.formulario.numtrabajadores.value;
    let numFabricas = document.formulario.numfabricas.value;

    if (!esDigito(telefono)) {
        alert("Se ha introducido un telefono no válido.");
        valido = false;
    }
    if (!esDigito(codPostal)) {
        alert("Se ha introducido un codigo postal no válido.");
        valido = false;
    }
    if (!esDigito(codBanco)) {
        alert("Se ha introducido un codigo de banco no válido.");
        valido = false;
    }
    if (!esDigito(codOficina)) {
        alert("Se ha introducido un codigo de oficina no válido.");
        valido = false;
    }
    if (!esDigito(codControl)) {
        alert("Se ha introducido un codigo de control no válido.");
        valido = false;
    }
    if (!esDigito(numCuenta)) {
        valido = false;
        alert("Se ha introducido un numero de cuenta no válido, solo se admiten digitos.");
    }
    if (!esDigito(numTrabajadores)) {
        valido = false;
        alert("Se ha introducido un numero de trabajadores no válido, solo se admiten digitos.");
    }
    if (!esDigito(numFabricas)) {
        valido = false;
        alert("Se ha introducido un numero de fabricas no válido, solo se admiten digitos.");
    }
    return valido;
}

function validarNIFCIF() {//check
    cad = /^[0-9]+[A-Z]{1}/;//dni
    cad2 = /^[XYZLKM]+[0-9]+[A-Z]{1}/;//dni2
    var1 = /^[^PQRSW0-9][0-9]{7}[0-9]/;//cif
    var2 = /^[PQRSW][0-9]{7}[A-Z]/;//cif2
    let valido = true;
    let nifcif = document.formulario.cifnif.value;
    nifcif = nifcif.toUpperCase();    
    if (cad.test(nifcif)) {
        if (esNif(nifcif) == true){
        valido = true;
        }
    } else {
        if (cad2.test(nifcif)) {
            if (esNif(nifcif) == true){
                valido = true;
            }
        } else {
            if (var1.test(nifcif)) {
                if (esCif(nifcif) == true){
                    valido = true;
                }
            } else {
                if (var2.test(nifcif)) {
                    if (esCif(nifcif) == true){
                        valido = true;
                    }
                } else {
                   valido = false;
                }
            }
        }
    }    
    return valido;    
    function esCif(cif){
        let cad = cif.toUpperCase();
        let valor = true;
        let carcontrol;        //caracter de control
        let sumaimpar = 0;
        let sumapar = 0;
        let sumatotal = 0;
        for(let i = 1; i < cad.length-1; i++){
        if(i % 2 != 0 && cad.charAt(i) * 2 > 9){
            sumaimpar += parseInt(cad.charAt(i));
        }
        else if(i % 2 != 0 && cad.charAt(i) * 2 <= 9){
            sumaimpar += parseInt(cad.charAt(i)*2);
        }
        else{
            sumapar += parseInt(cad.charAt(i));
        }        }
        sumatotal = sumaimpar + sumapar;
        let resto = sumatotal % 10;
        let digcontrol = 10 - resto;
        if(letras1.includes(cad.charAt(0))){
            carcontrol = digcontrol;
            if(cad.charAt(cad.length-1) != carcontrol){
            valor = false;
             }
        }else if(letras2.includes(cad.charAt(0))){
            carcontrol = digcontrol;
            let array = ["J", "A", "B", "C", "D", "E", "F", "G", "H", "I"];
            if(cad.charAt(cad.length-1) != array[carcontrol]) {
            valor = false;
            }
        }
        return valor; 
        }       
                
    function esNif(dni){
        dni=dni.toLowerCase();
        let compr=true;
        let i = 0;            
        if(validardig(dni)!=true){
            //alert('El dígito de control no es correcto');
            compr=false;
        }
        if(validarcar(dni)!=true){
            //alert('El conjunto de digitos no es correcto');
            compr=false;
        }            return compr;            // comprobamos el dígito de control
        function validardig(dni){
            let contr=0;
            let control = ["t","r","w","a","g","m","y","f","p","d","x","b","n","j","z","s","q","v","h","l","c","k","e"];
            if(dni.charAt(0)=="x" || dni.charAt(0)=="l" || dni.charAt(0)=="k" || dni.charAt(0)=="m"){
                contr=0;
            }else
                if (dni.charAt(0)=="y"){
                    contr=1;
                }else
                if (dni.charAt(0)=="z"){
                    contr=2;
                }else {
                    contr=parseInt(dni[0]);
                }                for (i=1;i <= dni.length-2; i++) {
                suma = parseInt(dni[i]);
                contr=contr+suma;
                suma=0;
            }
            contr=contr%23;
            if (control[contr] == dni[8]){
                comprobar=true;
            }else {
            comprobar=false;
            }                return comprobar;
        }            // comprobamos caracter
        function validarcar(dni){
                let contr=0;                if(dni.charAt(0)=="x" || dni.charAt(0)=="l" || dni.charAt(0)=="k" || dni.charAt(0)=="m"){
                contr=0;
            }else
                if (dni.charAt(0)=="y"){
                    contr=1;
                }else
                if (dni.charAt(0)=="z"){
                    contr=2;
                }else {
                    contr=dni.charAt(0);
                }                for (i=1;i <= dni.length-2; i++) {
                contr=contr+dni.charAt(i);
            }
            if (contr >= 100000){
                comprobar2=true;
            }else {
            comprobar2=false;
            }                return comprobar2;
        } 
    }
}

/*cad = /^[0-9]+[a-z]{1}/;//dni
cad2 = /^[xyzlkm]+[0-9]+[a-z]{1}/;//nie
var1 = /^[^PQRSW0-9][0-9]{7}[0-9]/;
var2 = /^[PQRSW][0-9]{7}[A-Z]/;
let valido = true;
dni = dni.toLowerCase();

if (cad.test(dni) || cad2.test(dni)) {
    valido = validarnif(dni);
} else {
    valido = validarcif(dni);
}


function validarnif(dni) {
    let compru;
    if (cad.test(dni)) {
        compru = true;
    } else {
        if (cad2.test(dni)) {
            compru = true;
        } else {
            compru = false;
        }
    }
    return compru;
}
function validarcif(cif) {
    let compru;
    if (var1.test(cif)) {
        compru = true;
    } else {
        if (var2.test(cif)) {
            compru = true;
        } else {
            compru = false;
        }
    }
    return compru;
}
return valido;*/

function esCodigoPostal(element1, elProvince) {//check
    let patern = /^\d{5}$/
    if (!patern.test(element1.value)) {
        element1.value = "No valido"
        elProvince.value = "";
        elProvince.readOnly = true;
    }

    //Si el valor introducido es valido
    let value = parseInt(element1.value);
    let provincias = ["Álava", "Albacete", "Alicante", "Almería", "Ávila", "Badajoz", "Illes Balears", "Barcelona", "Burgos", "Cáceres", "Cádiz", "Castellón", "Ciudad Real", "Córdoba", "Coruña", "Cuenca", "Girona", "Granada", "Guadalajara", "Gipuzkoa", "Huelva", "Huesca", "Jaén", "León", "Lleida", "La Rioja", "Lugo", "Madrid", "Málaga", "Murcia", "Navarra", "Ourense", "Asturias", "Palencia", "Las Palmas", "Pontevedra", "Salamanca", "S.C. Tenerife", "Cantabria", "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid", "Bizkaia", "Zamora", "Zaragoza", "Ceuta", "Melilla"];
    if (Number.isInteger(value) && value <= 52999 && value >= 1000) {
        if (value.toString().length == 4) {
            elProvince.readOnly = true;
            elProvince.value = provincias[parseInt(String(value).slice(0, 1)) - 1]
        } else if (value.toString().length == 5) {
            elProvince.readOnly = true;
            elProvince.value = provincias[parseInt(String(value).slice(0, 2)) - 1]
        } else {
            alert("Cod postal no valido");
        }
    }
}

function validarIBAN(cadena) {//check
    let exp = /^[a-z]{2}[0-9]{2}[a-z0-9]*/i;
    let validar = true;
    let codbanco = document.formulario.codbanco.value;
    let oficina = document.formulario.codoficina.value;
    let codcontrol = document.formulario.codcontrol.value;
    let numcuenta = document.formulario.numcuenta.value;
    if (exp.test(cadena)) {
        /* if(){
 
         }*/
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

function validarNombre(cadena) {//check
    let exp = /^[a-zñáéíóú][a-zñáéíóú\dºª\-\.]*[a-zñáéíóú\d\.]$/i;
    let validar = true;
    if (exp.test(cadena)) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

function validarCodEmpresa(cadena) {//check
    let exp = /[a-z0-9]{5,10}/i;
    let validar = true;
    if (exp.test(cadena)) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

function validarDireccion(cadena) {//check
    let exp = /^[a-z][a-z0-9ºª\s\-\/\.]+[a-z0-9]$/i;
    let validar = true;
    if (exp.test(cadena)) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

function validarLocalidad(cadena) {//check
    let exp = /^[a-zñáéíóú][a-zñáéíóú\s]+[a-zñáéíóú]$/i;
    let validar = true;
    if (exp.test(cadena)) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

function validarCodPostal(cadena) {//check
    let exp = /[0-5]?[1-9][0-9]{3}/i;
    let validar = true;
    if (exp.test(cadena)) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

function validarTelefono(cadena) {//check
    let exp = /^[9876][0-9]{8}$/;
    let valido = true;
    if (exp.test(cadena)) {
        valido = true;
    } else {
        valido = false;
    }
    return valido;
}

function validarFecha(cadena) {//check
    let exp = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2)\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/i;
    let valido = true;
    if (exp.test(cadena)) {
        valido = true;
    } else {
        valido = false;
    }
    return valido;
}

function validarCodigo(cadena) {//check
    let exp = /[0-9]{4}/i;
    let valido = true;
    if (exp.test(cadena)) {
        valido = true;
    } else {
        valido = false;
    }
    return valido;
}

function validarNumCuenta(cadena) {//check
    let exp = /[0-9]{10}/i;
    let valido = true;
    if (exp.test(cadena)) {
        valido = true;
    } else {
        valido = false;
    }
    return valido;
}

function validarNumEmpleados(cadena) {//check
    let exp = /^(4[5-9]|[5-9][0-9]|[1-8][0-9]{2}|9[0-8][0-9]|99[0-9]|[1-8][0-9]{3}|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9]|[1-8][0-9]{4}|9[0-8][0-9]{3}|99[0-8][0-9]{2}|999[0-8][0-9]|9999[0-9]|[1-8][0-9]{5}|9[0-8][0-9]{4}|99[0-8][0-9]{3}|999[0-8][0-9]{2}|9999[0-8][0-9]|99999[0-9])$/;
    let valido = true;
    if (exp.test(cadena)) {
        valido = true;
    } else {
        valido = false;
    }
    return valido;
}

function validarNumFabricas(cadena) {//check
    let exp = /^([1-9][0-9][0-9][0-9])$|^([1-9][0-9][0-9])$|^([1-9][0-9])|[2-9]$/;
    let valido = true;
    if (exp.test(cadena)) {
        valido = true;
    } else {
        valido = false;
    }
    return valido;
}
