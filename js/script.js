let userInput = document.getElementById('userInput')
let countdown = document.getElementById('countdown');
let result = document.getElementById('result');
let restart = document.getElementById('restart')


// El juego se iniciará automáticamente con una cuenta atrás de 5 segundos.
// Después de la cuenta atrás, el juego evaluará el número introducido.
// Se mostrará un mensaje indicando si has salvado el mundo o si la bomba ha estallado.

userInput.addEventListener('keyup', () => {
    let cuentaRegresiva = 5;
    countdown.innerHTML = `<p>Cuenta atrás de ${cuentaRegresiva} segundos</p>`;
    const cuentaAtras = new Promise ((resolve) => {
        const intervalo = setInterval(() => {
            cuentaRegresiva --;
            countdown.innerHTML = `<p>Cuenta atrás de ${cuentaRegresiva} segundos</p>`;
            if (cuentaRegresiva === 0) {
                clearInterval(intervalo);            
            resolve ('La cuenta atrás ha terminado');           
        }
        }, 1000)
    })
    cuentaAtras.then ((cuenta) => {
        countdown.innerHTML = `<p>${cuenta}</p>`;
    } 
    )
    .then (() => numeroMaquina())
    .then ((resultado) => {
        result.innerHTML = `<p>El número correcto de desactivación es: ${resultado}</p>`;
        if (userInput.value == resultado) {
            countdown.innerHTML = '<span>¡Has salvado el mundo!</span>'
            countdown.classList.add("green")
        }
        else {
            countdown.innerHTML = '<span>¡El mundo ha sido destruido!</span>'
            countdown.classList.add("red")
        }  
}
)

})
function random (min, max)  {
    return Math.floor(Math.random() * (max - min) + min)
}

function numeroMaquina() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let aleatorio = random (1,3);
            resolve(aleatorio);
        }, 1000);
    });
}

restart.addEventListener ('click', () => location.reload ())


