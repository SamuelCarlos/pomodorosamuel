let verificador = 0
let timer
let permissor = 0
let verificaIntervalo = 0
let minutos
let segundos
let alarme = document.getElementById("alarme")

function incrementaTempo(){
    let tempo = document.getElementById("entradatempo")
    if(tempo.value < 60 && verificador == 0){
        tempo.value++
        modificaVisor(tempo.value)
    }
}

function decrementaTempo(){
    let tempo = document.getElementById("entradatempo")
    if(tempo.value > 1 && verificador == 0){
        tempo.value--
        modificaVisor(tempo.value)
    }
}

function incrementaIntervalo(){
    let intervalo = document.getElementById("entradaintervalo")
    if(intervalo.value < 60 && verificador == 0){
        intervalo.value++
    }
}

function decrementaIntervalo(){
    let intervalo = document.getElementById("entradaintervalo")
    if(intervalo.value > 1 && verificador == 0){
        intervalo.value--
    }
}

function modificaVisor(valor){
    let visor = document.getElementById("temporizador")
    visor.innerText = `${valor}:00`
}

function startCounting(){
    if (verificador == 0) {
        alarme.play()
        document.getElementById("temporizador").style.color = "green"

        verificador++
        verificaIntervalo = 0

        minutos = Number(document.getElementById("entradatempo").value) - 1
        segundos = 60

        timer = setInterval( function() {
            if(segundos == 0 && minutos == 0) {
                document.getElementById("temporizador").innerText = `${minutos}:0${segundos}`
                startIntervalo()
                clearInterval(timer);
            } else {
                if(segundos == 0){
                    minutos--
                    segundos = 59
                    document.getElementById("temporizador").innerText = `${minutos}:${segundos}`
                } else if(segundos > 10) {
                    segundos--
                    document.getElementById("temporizador").innerText = `${minutos}:${segundos}`
                } else {
                    segundos--
                    document.getElementById("temporizador").innerText = `${minutos}:0${segundos}`
                }
            }
            if(document.getElementById("pause").click == 1) {
                clearInterval(timer)
            }
            
        }, 1000);
    } else if(permissor == 1) {
        permissor = 0
        alarme.play()

        timer = setInterval( function() {
            if(segundos == 0 && minutos == 0) {
                document.getElementById("temporizador").innerText = `${minutos}:0${segundos}`
                if(verificaIntervalo == 0) {
                    startIntervalo()
                    clearInterval(timer);
                } else {
                    startCounting()
                    clearInterval(timer);
                }
                
            }else{
                if(segundos == 0) {
                    minutos--
                    segundos = 59
                    document.getElementById("temporizador").innerText = `${minutos}:${segundos}`
                } else if(segundos > 10) {
                    segundos--
                    document.getElementById("temporizador").innerText = `${minutos}:${segundos}`
                } else {
                    segundos--
                    document.getElementById("temporizador").innerText = `${minutos}:0${segundos}`
                }
            }
            if(document.getElementById("pause").click == 1) {
                clearInterval(timer)
            }
            
        }, 1000);
    }
}

function pauseCounting(){
    clearInterval(timer);
    permissor = 1
    alarme.play()
}

function resetCounting(){
    document.getElementById("temporizador").innerText = `${document.getElementById("entradatempo").value}:00`
    clearInterval(timer);
    verificador = 0
    document.getElementById("temporizador").style.color = "white"
}

function startIntervalo(){
    minutos = Number(document.getElementById("entradaintervalo").value) - 1
    segundos = 60
    verificaIntervalo = 1
    alarme.play()
    document.getElementById("temporizador").style.color = "red"

    timer = setInterval( function() {
        if(segundos == 0 && minutos == 0) {
            document.getElementById("temporizador").innerText = `${minutos}:0${segundos}`
            verificador = 0
            startCounting()
            clearInterval(timer);
        } else {
            if(segundos == 0){
                minutos--
                segundos = 59
                document.getElementById("temporizador").innerText = `${minutos}:${segundos}`
            } else if(segundos > 10) {
                segundos--
                document.getElementById("temporizador").innerText = `${minutos}:${segundos}`
            } else {
                segundos--
                document.getElementById("temporizador").innerText = `${minutos}:0${segundos}`
            }
        }

        if(document.getElementById("pause").click == 1){
            clearInterval(timer);
        }
        
    }, 1000);
}
