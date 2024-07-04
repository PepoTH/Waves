//Animacion de Nube
function subir(e)
{
if(e.type=="mouseover"){
        nube.style.bottom = '-15%';
        nube2.style.bottom = '-15%';
    }
    else{
        nube.style.bottom = '-40%';
        nube2.style.bottom = '-40%';
    }
}

var nube = document.getElementsByClassName('nube-main')[0]
var nube2 = document.getElementsByClassName('nube-main2')[0]
let head_title = document.getElementById('main-title');
head_title.addEventListener('mouseover', subir);
head_title.addEventListener('mouseout', subir);


//INICIO DEL PROGRAMA

//Cambio View

//Botones e Inputs
reserv = document.getElementsByClassName('reserv')[0]
marca = document.getElementById('header-title')
reserv_cancel = document.getElementById('reserv-cancel')
reserv_principal = document.getElementById('main-btn-reserve')
pago_btn = document.getElementById('pago-confirm')
btn_correo = document.getElementById('correo-confirm')
btn_boleto = document.getElementById('boleto-btn')
reserv_confirm = document.getElementById('reserv-confirm')


//Views
principal = document.getElementsByClassName('principal')[0]
reservar = document.getElementsByClassName('reservar')[0]
pago = document.getElementsByClassName('pago')[0]
boleto = document.getElementsByClassName('boleto')[0]

//SemiView
pago_datos = document.getElementsByClassName('pago-cuadro')[0]
pago_confirmado = document.getElementsByClassName('pago-cuadro-confirm')[0]


//Flex a cada uno para verlo
pago_confirmado.style.display = 'none'
principal.style.display = 'flex'
reservar.style.display = 'none'
pago.style.display = 'none'
pago_datos.style.display = 'none'
boleto.style.display = 'none'

//Principal Boton de Navbar => Reserva
reserv.onclick = function alerta(event) {
    pago_confirmado.style.display = 'none'
    principal.style.display = 'none'
    reservar.style.display = 'flex'
    pago.style.display = 'none'
    pago_datos.style.display = 'none'
    boleto.style.display = 'none'
}

//Principal Boton de Frase => Reserva
reserv_principal.onclick = function alerta(event) {
    pago_confirmado.style.display = 'none'
    principal.style.display = 'none'
    reservar.style.display = 'flex'
    pago.style.display = 'none'
    pago_datos.style.display = 'none'
    boleto.style.display = 'none'
}

//Logo => Principal
marca.onclick = function alerta(event) {
    principal.style.display = 'flex'
    reservar.style.display = 'none'
    pago.style.display = 'none'    
    pago_confirmado.style.display = 'none'
    pago_datos.style.display = 'none'
    boleto.style.display = 'none'
}

//Reservacion Cancelada
reserv_cancel.onclick = function alerta(event) {
    principal.style.display = 'flex'
    reservar.style.display = 'none'
    pago.style.display = 'none'
}

//Pago => Correo
pago_btn.onclick = function alerta(event) {
    pago_datos.style.display = 'none'
    pago_confirmado.style.display = 'flex'
}

//Correo => Boleto
btn_correo.onclick = function alerta(event) {
    pago.style.display = 'none'
    boleto.style.display = 'flex'
    const ocupar = [];
    const seats = document.querySelectorAll('.butaca');
    console.log(seats)
  
    seats.forEach(seat => {
      if (seat.classList.contains('ocupado')) {
        seat.classList.add('comprado');
        seat.style.backgroundColor = '#ffffff50'
      }
    });
}


//Boleto => Principal 
btn_boleto.onclick = function alerta(event) {
    pago.style.display = 'none'
    principal.style.display = 'flex'
    reservar.style.display = 'none'
    boleto.style.display = 'none'
}




//ARREGLAR BUTACAS
function crearCuadrículaButacas(filas, columnas) {
    const contenedorButacas = document.getElementById('contenedor-asientos');

    for (let i = 0; i < filas; i++) {
        const fila = document.createElement('div');
        fila.classList.add('fila-asientos');

        for (let j = 0; j < columnas; j++) {
            const numeroButaca = `${String.fromCharCode(65 + j)}${i + 1}`; // Calcular el nombre de la butaca (ej: 1A, 2B, etc.)
            const butaca = crearButaca(numeroButaca);
            fila.appendChild(butaca);
            //Implementar
            if(j == 1 || j == 6){
                butaca.style.marginRight = '20px'
                
                
            }
            butaca.style.width = '30px'
            butaca.style.height = '30px'
            butaca.style.marginTop = '-5px'
            butaca.style.fontSize = '0.8rem'
        }

        contenedorButacas.appendChild(fila);
    }
}


function crearButaca(numeroButaca) {
    const butaca = document.createElement('div');
    butaca.classList.add('butaca');
    butaca.textContent = numeroButaca; // Mostrar el número de butaca

    butaca.addEventListener('click', function() {
        if(this.classList.contains('comprado')){
            alert('Asiento Comprado')
        }
        else{
            this.classList.toggle('ocupado');
            let lista = listaseleccionados()
            console.log(lista)
            
        }

    });

    return butaca;
}


window.onload = function() {
    crearCuadrículaButacas(12, 9); // Crear una cuadrícula de 5 filas x 3 columnas
};



function listaseleccionados() {
    const selectedSeats = [];
    const seats = document.querySelectorAll('.butaca');
    console.log(seats)
  
    seats.forEach(seat => {
      if (seat.classList.contains('ocupado')) {
        selectedSeats.push(seat);
      }
    });
    return selectedSeats;
}
function borrandolista() {
    const selectedSeats = [];
    const seats = document.querySelectorAll('.butaca');
    console.log(seats)
  
    seats.forEach(seat => {
      if (seat.classList.contains('ocupado')) {
        seat.classList.remove('ocupado')
      }
    });
}




//Datos
nombre = document.getElementsByClassName('name')[0]
apellido = document.getElementsByClassName('apellido')[0]
cedula = document.getElementsByClassName('cedula')[0]
maletas = document.getElementsByClassName('maletas')[0]
peso = document.getElementsByClassName('peso')[0]
correo = document.getElementsByClassName('correo')[0]
mano = document.getElementsByClassName('mano')[0]

//Campos Validados
reserv_confirm.onclick = function ocupar(event) {
    if(!(nombre.value.length == 0 || apellido.value.length == 0 || cedula.value.length == 0 || maletas.value.length == 0 || peso.value.length == 0 || correo.value.length == 0)){
        pago_confirmado.style.display = 'none'
        principal.style.display = 'none'
        reservar.style.display = 'none'
        pago.style.display = 'flex'
        pago_datos.style.display = 'flex'
        boleto.style.display = 'none'
    }
}

function valid(e){
    //Funcion isNaN verifica si es numero, si es numero retornara False
    if (isNaN(e.key)){
        if (e.key != 'Backspace'){
            e.preventDefault()
        }
    }
}

cedula.addEventListener('keydown',event => valid(event))
peso.addEventListener('keydown',event => valid(event))
maletas.addEventListener('keydown',event => valid(event))


//PAGO

nombre_pago = document.getElementsByClassName('nom-cuenta')[0]
apellido_pago = document.getElementsByClassName('pago-ape')[0]
numero_cuenta = document.getElementsByClassName('num-cuenta')[0]
cedula_cuenta = document.getElementsByClassName('ced-cuenta')[0]
telefono_cuenta = document.getElementsByClassName('tel-cuenta')[0]
nombre_banco = document.getElementsByClassName('nom-banco')[0]
btn_confir_pago = document.getElementById('pago-confirm')

//BOLETO

nombre_boleto = document.getElementById('nombre-boleto')
apellido_boleto = document.getElementById('ape-boleto')
correo_boleto = document.getElementById('correo-boleto')
cedula_boleto = document.getElementById('cedula-boleto')
fecha_compra = document.getElementById('fecha-com')
fecha_vuelo = document.getElementById('fecha-vuelo')
hora_vuelo = document.getElementById('hora-vuelo')
puerta = document.getElementById('puerta-boleto')
factura = document.getElementById('factura-boleto')
monto_boleto = document.getElementById('monto-boleto')
let btnVolver = document.getElementById('boleto-btn')

btnVolver.addEventListener('click',() =>{
    let borrar = borrandolista()
})