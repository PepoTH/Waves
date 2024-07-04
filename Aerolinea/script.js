//Logica del programa

//Datos de los id y las clases
//Botones e inputs
let listaaisentosGolbal = [];
let reserv = document.getElementsByClassName('reserv')[0];
let marca = document.getElementById('header-title');
let reserva_confirmada = document.getElementById('reserv-confirm');
let reserva_cancelar = document.getElementById('reserv-cancel');
let reserva_principal = document.getElementById('main-btn-reserve');
let pago_btn = document.getElementById('pago-confirm');
let pago_cancelar = document.getElementById('pago-cancel');
let btn_correo = document.getElementById('correo-confirm');
let btn_boleto = document.getElementById('boleto-btn')

//Views 
let principal = document.getElementsByClassName('principal')[0];
let reservar = document.getElementsByClassName('reservar')[0];
let pago = document.getElementsByClassName('pago')[0];
let boleto = document.getElementsByClassName('boleto')[0];

//semiViews
let pago_datos = document.getElementsByClassName('pago-cuadro')[0];
let pago_confirmado = document.getElementsByClassName('pago-cuadro-confirm')[0];

//Datos de la informacion del vuelo
let nombre_persona = document.getElementsByClassName('name')[0];
let apellido_persona = document.getElementsByClassName('apellido')[0];
let cedula = document.getElementsByClassName('cedula')[0];
let correo = document.getElementsByClassName('correo')[0];
let maletas = document.getElementsByClassName('maletas')[0];
let peso = document.getElementsByClassName('peso')[0];
let listaclase = document.getElementsByClassName('clase reserv-input')[0];
let listaEquipa = document.getElementsByClassName('mano reserv-input')[0];

//Datos del pago del vuelo
let nombre_resp = document.getElementsByClassName('nom-cuenta')[0];
let ape_resp = document.getElementsByClassName('pago-ape')[0];
let cedula_resp = document.getElementsByClassName('ced-cuenta')[0];
let numero_Cuenta = document.getElementsByClassName('num-cuenta')[0];
let tlf_resp = document.getElementsByClassName('tel-cuenta')[0];
let banco = document.getElementsByClassName('nom-banco')[0];

//Datos del boleto de confirmación
let nombre_boleto = document.getElementById('nombre-boleto');
let apellido_boleto = document.getElementById('ape-boleto');
let correo_boleto = document.getElementById('correo-boleto');
let cedula_boleto = document.getElementById('cedula-boleto');
let fecha_compra = document.getElementById('fecha-com');
let fecha_vuelo = document.getElementById('fecha-vuelo');
let hora_vuelo = document.getElementById('hora-vuelo');
let puerta = document.getElementById('puerta-boleto');
let asientoB = document.getElementById('asientos-boleto');
let factura = document.getElementById('factura-boleto');
let monto_boleto = document.getElementById('monto-boleto');
let btn_volver = document.getElementById('boleto-btn');

// Vistas a cada uno de los views
pago_confirmado.style.display = 'none'
principal.style.display = 'flex'
reservar.style.display = 'none'
pago.style.display = 'none'
pago_datos.style.display = 'none'
boleto.style.display = 'none'
// Eventos que realiza el cambio de pagina

// Principal Boton de navbar => Reserva
reserv.onclick = function alerta(event) {
    pago_confirmado.style.display = 'none'
    principal.style.display = 'none'
    reservar.style.display = 'flex'
    pago.style.display = 'none'
    pago_datos.style.display = 'none'
    boleto.style.display = 'none'
}
// Principal Boton de Frase => Reserva
reserva_principal.onclick = function alerta(event) {
    pago_confirmado.style.display = 'none'
    principal.style.display = 'none'
    reservar.style.display = 'flex'
    pago.style.display = 'none'
    pago_datos.style.display = 'none'
    boleto.style.display = 'none'
}
// Logo => Principal
marca.onclick = function alerta(event) {
    principal.style.display = 'flex'
    reservar.style.display = 'none'
}
// reserva_datos => pago
reserva_confirmada.onclick = function alerta(event) {
    reservar.style.display = 'none'
    pago.style.display = 'flex'
    pago_datos.style.display = 'flex'
}
// Cancelar Reservacion
reserva_cancelar.onclick = function alerta(event) {
    principal.style.display = 'flex'
    reservar.style.display = 'none'
    pago.style.display = 'none'
} 

// Pago => Correo
pago_btn.onclick = function alerta(event) {
    pago_datos.style.display = 'none'
    pago_confirmado.style.display = 'flex'
}
// Cancelar Pago
pago_cancelar.onclick = function alerta(event){
    pago.style.display = 'none'
    reservar.style.display = 'flex'
}

// Correo => Boleto
btn_correo.onclick = function alerta(event) {
    pago.style.display = 'none'
    boleto.style.display = 'flex'
    const seats = document.querySelectorAll('.butaca');
    console.log(seats)
  
    seats.forEach(seat => {
      if (seat.classList.contains('ocupado')) {
        seat.classList.add('comprado');
      }
    });
}
// Boletos => Principal
btn_boleto.onclick = function alerta(event) {
    pago.style.display = 'none'
    principal.style.display = 'flex'
    reservar.style.display = 'none'
    boleto.style.display = 'none'
}
// Evento para las listas desplegables

// Funciones

// Funcion que crea la Cuadricula de la Butacas
function crearCuadriculaButacas(fila,columnas){

    const contenedorButacas = document.getElementById('contenedor-asientos');
    for (let i = 0; i < fila; i++) {
        const fila = document.createElement('div');
        fila.classList.add('fila-asientos');

        for (let j = 0; j < columnas; j++) {
            const numeroButaca = `${String.fromCharCode(65 + j)}${i + 1}`; // Calcular el nombre de la butaca (ej: 1A, 2B, etc.)
            const butaca = crearButa(numeroButaca);
            fila.appendChild(butaca);

            //Impletamos la forma de los asientos en un avion
            if(j == 1 || j == 6){
                butaca.style.marginRight = '20px';
            }
            butaca.style.width = '30px';
            butaca.style.height = '30px';
            butaca.style.marginTop = '-5px';
            butaca.style.fontSize = '0.8rem';
            
        }
        contenedorButacas.appendChild(fila);
    }
}
// Funcion que crear la butaca
function crearButa(numeroButaca){
    const crearButaca = document.createElement('div');
    crearButaca.classList.add('butaca');
    crearButaca.textContent = numeroButaca; // Muestre el numero de la butaca

    crearButaca.addEventListener('click',function() {
        if(this.classList.contains('comprado')){
            alert('Asiento Comprado');
            borrarLista()

        }else{
            this.classList.toggle('ocupado');
            listaaisentosGolbal = listaseleccionados();
            console.log(listaaisentosGolbal)
        }
    });
    return crearButaca
}

// pone los asientos creados en la pagina
window.onload = function(){
    crearCuadriculaButacas(12,9) // crear una cuadricula de 12 filas x 9 columnas
}

//Fucion que hace una lista de losdivs que esta seleccionados para representara los asientos ocupados
function listaseleccionados(){
    const asientosocupados = [];
    const butas = document.querySelectorAll('.butaca')
    
    butas.forEach(buta =>{
        if(buta.classList.contains('ocupado')){
            asientosocupados.push(buta);
        }
    });
    return asientosocupados;
}
//Funcion que borra la lista en la otra vuelta que haga el programa
function borrarLista(){
    const butas = document.querySelectorAll('.butaca')
    butas.forEach(buta =>{
        buta.classList.remove('ocupado')
    });
}

// Funciones que ayudara para la informacion del boleto


// Funcion que toma la fecha de hoy para la fecha de compra
function fechaCompra(){
    let fecha = new Date();
    return fecha.toLocaleDateString();
}
// Funcion que toma un dia random del mes de julio para la fecha del vuelo
function fechaVuelo(){
    let start = new Date(2024,7,5)
    let end = new Date()
    return new Date(start.getTime() + Math.random()*(end.getTime() - start.getTime()));
}
// Funcion que calcula el monto total del boleto
function Calculo_monto(listaclase,listaEquipa,listaasientos){
    const cantMal = document.getElementsByClassName('maletas')[0].value;
    let pesoMal = parseInt(document.getElementsByClassName('peso')[0].value);
    if(listaclase.value == 'Economica' && 
        listaEquipa.value == 'Si'){
        return parseInt((listaasientos.length*405) + (cantMal*pesoMal*0.9));

    }else if(listaclase.value == 'Economica' && 
        listaEquipa.value == 'No'){
        return parseInt(listaasientos.length*405)

    }else{
        if(listaclase.value == 'Empresarial' && 
            listaEquipa.value == 'Si'){
            return parseInt((listaasientos.length*650) + (cantMal*pesoMal*0.9));

        }else if(listaclase.value == 'Empresarial' && 
            listaEquipa.value == 'No'){
            return parseInt(listaasientos.length*650)
        }
    }
}
// Funcion que muestra la hora de vuelo
function HoraVuelo(hora){
    if(hora.getHours() <= 11){
        return hora.getHours() + "am";
    }else{
        return hora.getHours() + "pm";
    }
}
// Funcion que genera la factura


// Funciones que muestra la puerta de embarque
//Funcion que devuelve la letra de la puerta 
function crearLetra(length){
    let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const tamString = letras.length;
    let letra = '';
    let cont = 0;
    while(cont < length){
        letra += letras.charAt(Math.floor(Math.random() * tamString));
        cont += 1
    }
    return letra
}
function PuertaEmbargue(letra){
    return letra + (Math.floor(Math.random()*30) + 1).toString()
}
function asientos(lista){
    let resultado = []
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index].textContent
        resultado.push(element)
    }
    return resultado
}



// Agregando todos los inputs a los campos del boleto
btn_correo.addEventListener('click',() =>{
    letra = crearLetra(1)
    fechaV = fechaVuelo()
    var result = Calculo_monto(listaclase,listaEquipa,listaaisentosGolbal)
    var asien = asientos(listaaisentosGolbal)
    nombre_boleto.innerHTML += nombre_persona.value;
    apellido_boleto.innerHTML += apellido_persona.value;
    correo_boleto.innerHTML += correo.value;
    cedula_boleto.innerHTML += cedula.value;
    fecha_compra.innerHTML += fechaCompra();
    fecha_vuelo.innerHTML += fechaV.toLocaleDateString();
    hora_vuelo.innerHTML += HoraVuelo(fechaV);
    puerta.innerHTML += PuertaEmbargue(letra)
    factura.innerHTML += (Math.floor(Math.random()*999999));
    monto_boleto.innerHTML += result + '$'
    asientoB.innerHTML += asien.join("-")

})

// Limpiar todos los campos
btn_volver.addEventListener('click',() =>{
    nombre_persona.value = ''
    apellido_persona.value = ''
    cedula.value = ''
    maletas.value = ''
    peso.value = ''
    correo.value = ''
    nombre_resp.value = ''
    ape_resp.value = ''
    cedula_resp.value = ''
    numero_Cuenta.value = ''
    tlf_resp.value = '';
    banco.value = ''
    nombre_boleto.innerHTML = 'Nombre:'
    apellido_boleto.innerHTML = 'Apellido:'
    correo_boleto.innerHTML = 'Correo:'
    cedula_boleto.innerHTML = 'Cedula:'
    fecha_compra.innerHTML = 'Fecha de Compra:'
    fecha_vuelo.innerHTML = 'Fecha de Vuelo:'
    hora_vuelo.innerHTML = 'Hora de Vuelo:'
    puerta.innerHTML = 'Puerta de Embargue:'
    factura.innerHTML = 'Factura:'
    monto_boleto.innerHTML = 'Monto:'
    asientoB.innerHTML = 'Asiento/s:'
    borrarLista()
    
})
// Validaciones de programa
reserva_confirmada.onclick = function ocupar(event){
    if(nombre_persona.value.length == 0 || apellido_persona.value.length == 0 || cedula.value.length == 0 || maletas.value.length == 0 
        || peso.value.length == 0 || correo.value.length == 0){
            alert("No han llenado los campos de texto")
        }else{
            pago_confirmado.style.display = 'none'
            principal.style.display = 'none'
            reservar.style.display = 'none'
            pago.style.display = 'flex'
            pago_datos.style.display = 'flex'
            boleto.style.display = 'none'
        }
}
pago_btn.onclick = function ocupar(event){
    if(nombre_resp.value.length == 0 || ape_resp.value.length == 0 || cedula_resp.value.length == 0 || numero_Cuenta.value.length == 0
        || tlf_resp.value.length == 0 || banco.value.length == 0){
            alert("No han llenado los campos de texto")
        }else{
            pago_confirmado.style.display = 'flex'
            principal.style.display = 'none'
            reservar.style.display = 'none'
            pago.style.display = 'flex'
            pago_datos.style.display = 'none'
            boleto.style.display = 'none'
        } 
}
// validacion para entrada de numeros
function valid(e){
    //Funcion isNaN verifica si es numero, si es numero retornara False
    if (isNaN(e.key)){
        if (e.key != 'Backspace'){
            e.preventDefault()
        }
    }
}
cedula.addEventListener('keydown',event => valid(event))
maletas.addEventListener('keydown',event => valid(event))
peso.addEventListener('keydown',event => valid(event))
numero_Cuenta.addEventListener('keydown',event => valid(event))
cedula_resp.addEventListener('keydown',event => valid(event))

//valdiacion para la entrada de palabras
function validLetra(e){
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
}




