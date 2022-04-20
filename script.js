console.log("page loaded")

var temps = [24,18,27,19,21,16,26,21]

var thermometer = 1

function drawtemps(){
    console.log("calculating")
    console.log(document.querySelector(".temps p").innerHTML)
    document.getElementById("t1").innerHTML = (temps[0]+"&#176")
    document.getElementById("t2").innerHTML = (temps[1]+"&#176") 
    document.getElementById("t3").innerHTML = (temps[2]+"&#176") 
    document.getElementById("t4").innerHTML = (temps[3]+"&#176") 
    document.getElementById("t5").innerHTML = (temps[4]+"&#176") 
    document.getElementById("t6").innerHTML = (temps[5]+"&#176") 
    document.getElementById("t7").innerHTML = (temps[6]+"&#176")
    document.getElementById("t8").innerHTML = (temps[7]+"&#176")   
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