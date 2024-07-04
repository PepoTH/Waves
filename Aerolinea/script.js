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

//Views 
let principal = document.getElementsByClassName('principal')[0];
let reservar = document.getElementsByClassName('reservar')[0];
let pago = document.getElementsByClassName('pago')[0];
let boleto = documente.getElementsByClassName('boleto')[0];

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
let tlf_resp = docuemnt.getElementsByClassName('tel-cuenta')[0];
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
    const buta = document.querySelectorAll('.butaca')
    
}