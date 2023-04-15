alert("Espisificaciones hardware y software")
function comprobar(){
    let responsable
    responsable=document.getElementById("responsable").value
    document.getElementById("respuesta1").innerHTML="<h3> responsable:"+responsable+"</h3>"
    console.log(responsable)
    
    let producto
    document.getElementById("producto").value
    document.getElementById("respuesta2").innerHTML="<h3> nombre del producto:"+producto+"</h3>"
    console.log(producto)
}