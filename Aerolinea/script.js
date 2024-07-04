//Logica del programa

//Datos de los id y las clases
//Botones e inputs
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
let maletas = document.getElementsByClassName('maletas')[0];
let peso = document.getElementsByClassName('peso')[0];
let listaclase = document.getElementsByClassName('clase-reserv-input')[0];
let listaEquipa = document.getElementsByClassName('mano reserv-input')[0];

//Datos del pago del vuelo
let nombre_resp = document.getElementsByClassName('nom-cuenta')[0];
let ape_resp = document.getElementsByClassName('pago-ape')[0];
let cedula_resp = document.getElementsByClassName('ced-cuenta')[0];
let numero_Cuenta = document.getElementsByClassName('num-cuenta')[0];
let tlf_resp = document.getElementsByClassName('tel-cuenta')[0];
let banco = document.getElementsByClassName('nom-banco')[0];

//Datos del boleto de confirmación
nombre_boleto = document.getElementById('nombre-boleto');
apellido_boleto = document.getElementById('ape-boleto');
correo_boleto = document.getElementById('correo-boleto');
cedula_boleto = document.getElementById('cedula-boleto');
fecha_compra = document.getElementById('fecha-com');
fecha_vuelo = document.getElementById('fecha-vuelo');
hora_vuelo = document.getElementById('hora-vuelo');
puerta = document.getElementById('puerta-boleto');
factura = document.getElementById('factura-boleto');
monto_boleto = document.getElementById('monto-boleto');
btn_volver = document.getElementById('boleto-btn');

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

    crearButaca.addEventListener('click',() =>{
        if(this.classList.contains('comprado')){
            alert('Asiento Comprado');

        }else{
            this.classList.toggle('ocupado');
            listaseleccionados();
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
        if(buta.classList.contains('ocupado')){
            buta.classList.remove('ocupados')
        }
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
function Calculo_monto(listaclase,listaEquipa){
    let listaasientos = listaseleccionados();
    let cantMal = parseInt(maletas.value);
    let pesoMal = parseInt(peso.value);
    if(listaclase.value === 'Economica' && listaEquipa.value === 'Si'){
        return (listaasientos.length*405) + (cantMal*pesoMal*0.9);

    }else if(listaclase.value === 'Economica' && listaEquipa.value === 'No'){
        return (listaasientos.length*405)

    }else{
        if(listaclase.value === 'Empresarial' && listaEquipa.value === 'Si'){
            return (listaasientos.length*650) + (cantMal*pesoMal*0.9);

        }else if(listaclase.value === 'Empresarial' && listaEquipa.value === 'No'){
            return (listaasientos.length*650)
        }
    }
}
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
// Agregando todos los inputs a los campos del boleto
btn_correo


