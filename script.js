let boton = document.getElementById("icon");
let link = document.getElementById("link");
let contador = 0;

boton.addEventListener("click", function(e){
    e.preventDefault();
    if(contador==0){
        link.className = ("link two")
        contador=1;
    }else{
        link.classList.remove("two")
        link.className = ("link one")
        contador=0
    }
})