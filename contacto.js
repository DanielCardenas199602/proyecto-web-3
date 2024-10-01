window.addEventListener('load',() =>{







document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //NUMERO DE WHATSAPP VERIFICADO:
    let telefono = "+525520951905";
    var mensaje1= "garcias por tu mensaje";

  
    let nombre = document.querySelector("#nombre").value;
    let correo = document.querySelector("#E-mail").value;
    let tel = document.querySelector("#tel").value;
    let mensaje = document.querySelector("#mensaje").value;
    //let resp = document.querySelector("#respuesta");
  
  
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=

    
          ${nombre}%0A
          *nombre*%0A 
          ${correo}%0A
          *correo*%0A;
          ${tel}%0A
          *telefono*%0A
          ${mensaje}%0A
          *Mensaje*%0A`;

          
          
  
    if ( nombre === "") {
      alert("introduce un nombre valido")
      return false;

    }if(correo === ""){

      alert("introduce un correo completo ")
      return false;

    }if(tel ===""){

        alert("introduce un numero valido")
        return false;

    }if (mensaje ==="") {
        alert("introduce un comentario para ofrecerte informacion mas detallada")
        return false;
    } else {
        alert(mensaje1)
    }



    
    /*else{

        alert(mensaje1);
    }*/

    
    

  
    window.open(url);
  });

});
    