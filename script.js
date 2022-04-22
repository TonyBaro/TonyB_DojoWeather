console.log("page loaded")

var temps = [24,18,27,19,21,16,26,21]

var thermometer = 1

function drawtemps(){
    console.log("calculating")
    for (var i = 0; i<temps.length; i++){
    document.getElementById(`t${i+1}`).innerHTML = (temps[i]+"&#176")
    }
}
drawtemps()

function changeTemp(){
    if (thermometer == 1){
        for (var i=0; i<temps.length ; i++){
        temps[i] = Math.round((temps[i]-32)*0.5556)
        }
        thermometer = 0
        drawtemps()
        console.log (thermometer)
    }
    else {
        for (var i=0; i<temps.length ; i++){
            
            temps[i] = Math.round((temps[i]*1.8)+32)
        }
        thermometer = 1
        drawtemps()
    }
}

function remove(element){
    console.log("poof")
    element.parentElement.remove()
}

function runalert(){
    alert("Loading weather report...")
}