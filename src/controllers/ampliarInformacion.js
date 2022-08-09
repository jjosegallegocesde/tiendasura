let contenedorProductos=document.getElementById("fila")

//escucho clic en la fila
contenedorProductos.addEventListener("click",function(evento){
    if(evento.target.classList.contains("img-fluid")){
        console.log(evento.target.parentElement.querySelector("h3").textContent)
        console.log(evento.target.parentElement.querySelector("h2").textContent)

    }
  
})

