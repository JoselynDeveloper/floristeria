$(document).ready(function() {

  // Selector de temas 
  var theme = $('#theme');   

  $('#to-green').click(function() {
  	theme.attr('href', 'css/theme/green.css');
  	localStorage.setItem("tema", "css/theme/green.css");
  });

  $('#to-red').click(function() {
  	theme.attr('href', 'css/theme/red.css');
  	localStorage.setItem("tema", "css/theme/red.css");
  });

  $('#to-blue').click(function() {
  	theme.attr('href', 'css/theme/blue.css');
  	localStorage.setItem("tema", "css/theme/blue.css");
  });

    // Comprobar si existe tema guardado en el Storage
    if(localStorage.getItem("tema")){
    	var storage = localStorage.getItem("tema");
    	theme.attr('href', storage);
    }else{
    	theme.attr('href', 'css/theme/green.css');  	
    }
    
    // Evento Scroll arriba de la web
    $('.subir').click(function(e) {
    	e.preventDefault();

    	$('html, body').animate({
    		scrollTop: 0
    	}, 700);

    	return false;
    });// Fin subir

    // Login falso
    $('#login form').submit(function() {
    	var nombre = $("#form_name").val();
    	var email = $("#form_email").val();
    	var usuarios = {
    		nombre: nombre,
    		email: email
    	};

    	localStorage.setItem('usuario', JSON.stringify(usuarios));

    });//Fin login-form

    var user = JSON.parse(localStorage.getItem('usuario'));

    if(user != null && user != 'undefined'){
    	var about_parrafo = $('#about p');
    	about_parrafo.html("<br><strong>Bienvenido, " + user.nombre + "</strong>");
    	about_parrafo.append("<br><br><a href='#' id='logout' >Cerrar session </a>");

    	$('#login').hide();

         // Cerrar session
         $("#logout").click(function(){
         	localStorage.removeItem('usuario');
    		// Recargar la pantalla
    		location.reload();
    	});// Fin logout

     }// Fin if

     // Crear acordion
     $('#acordion').accordion();

     // Reloj
     setInterval(function() {

      var reloj = moment().format('MMMM Do YYYY, h:mm:ss a');
      $('#reloj').html(reloj);

    }, 1000);

});// Fin ready