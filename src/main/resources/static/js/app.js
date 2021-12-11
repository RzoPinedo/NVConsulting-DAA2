$(document).ready(function(){


    //slideDown al titulo

    if($("#parrafo").hide()){
        $("#parrafo").slideDown(1000);
    }
  
    //Ocultamos el texto de los cards
    $("#satisfaccion").hide();
    $("#gestion").hide();
    $("#validacion").hide();
    $("#Mascursos").hide();
    $("#riesgo").hide();
    $("#control").hide();
    $("#aseguramiento").hide();

    //Mostrar informacion de los cards
    $("#btnMostrar1").click(function () { 
        $("#satisfaccion").toggle(2000);
        
    });
    $("#btnMostrar2").click(function () { 
        $("#gestion").toggle(2000);
        
    });
    $("#btnMostrar3").click(function () { 
        $("#validacion").toggle(2000);
        
    });
    $("#btnMostrar4").click(function () { 
        $("#riesgo").toggle(2000);
        
    });
    $("#btnMostrar5").click(function () { 
        $("#control").toggle(2000);
        
    });
    $("#btnMostrar6").click(function () { 
        $("#aseguramiento").toggle(2000);
        
    });

    $("#mas").click(function () { 
        $("#Mascursos").toggle(1000);
        
    });

    //SECCION AYUDA
    $("#profesores").hide();
    $("#beca").hide();
    $("#covid").hide();
    $("#solicitud").hide();
    
    $("#correo").click(function () { 
        $("#consultas").hide(1000);
        $("#beca").hide(1000);
        $("#covid").hide(1000);
        $("#solicitud").hide(1000);
        $("#profesores").show(1000);
        
    });

    $("#socio").click(function () { 
        $("#profesores").hide(1000);
        $("#consultas").hide(1000);
        $("#covid").hide(1000);
        $("#solicitud").hide(1000);
        $("#beca").show(1000);
        
    });

    $("#ayuda").click(function () { 
        $("#profesores").hide(1000);
        $("#consultas").hide(1000);
        $("#beca").hide(1000);
        $("#solicitud").hide(1000);
        $("#covid").show(1000);
        
    });

    $("#generales").click(function () { 
        $("#profesores").hide(1000);
        $("#consultas").hide(1000);
        $("#covid").hide(1000);
        $("#beca").hide(1000);
        $("#solicitud").show(1000);
        
    });



    $(".efecto-curso").mouseover(function (e) {
        $(this).css({'padding-top': '10px'});
    });
    $(".efecto-curso").mouseout(function (e) {
        $(this).css({'padding-top': '0px'});
    });
    
    $("#parrafo").mouseover(function (e) {
        $(this).css({'color': '#ffbc00'});
    });
    $("#parrafo").mouseout(function (e) {
        $(this).css({'color': 'white'});
    });
    
    $(".efecto-lista-curso").mouseover(function (e) {
        $(this).css({'color': 'yellow'});
    });
    $(".efecto-lista-curso").mouseout(function (e) {
        $(this).css({'color': 'white'});
    });
    
    $("#imagen-nostros").mouseover(function (e) {
        $(this).attr({'src': 'imagenes/nosotros.jpg'});
    });
    $("#imagen-nostros").mouseout(function (e) {
        $(this).attr({'src': 'imagenes/PE.png'});
    });
    


});

