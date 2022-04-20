console.log("page loaded")

var temps = [24,18,27,19,21,16,26,21]

function drawtemps(){
    console.log("calculating")
    console.log(document.querySelector(".temps p").innerHTML)
    document.querySelector(".temps p").innerHTML = (temps[0]+"&#176") 
}
drawtemps()

function remove(element){
    console.log("poof")
    element.parentElement.remove()
}