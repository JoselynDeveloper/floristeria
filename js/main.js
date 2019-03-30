$(document).ready(function() {
	
	// Aqui comprobamos que la pagina esta en index es opcional, lo dejare para
	// conocimiento personal 
	if(window.location.href.indexOf('index') > -1){

         // Slider
         $('.bxslider').bxSlider({
         	auto: true,
         	autoControls: true,
         	stopAutoOnClick: true,
         	pager: true,
         	slideWidth: 1200,
         	responsive: true,
        });// Fin slider

     }


	// Posts | objeto json
	if(window.location.href.indexOf('index') > -1){

		var posts = [
		{
			title: 'Prueba de titulo 1',
			date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
		},
		{
			title: 'Prueba de titulo 2',
			date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
		},
		{
			title: 'Prueba de titulo 3',
			date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
		},
		{
			title: 'Prueba de titulo 4',
			date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
		},
		{
			title: 'Prueba de titulo 5',
			date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
		},
		{
			title: 'Prueba de titulo 6',
			date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
		},
		];

		posts.forEach(function(element, index){
		  // Crear una plantilla con la comillas especiales ``
		  var post = `
		  <article class="post">
		  <h2>${element.title}</h2>
		  <span class="date">${element.date}</span>
		  <p>${element.content}</p>
		  <a href="#" class="button-more">Leer mas</a>
		  </article>  `

		  $('#posts').append(post)
		});

	}

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
    });

    // Login falso
    $('#login form').submit(function() {
    	var nombre = $("#form_name").val();
    	var email = $("#form_email").val();
    	var usuarios = {
    		nombre: nombre,
    		email: email
    	};

    	localStorage.setItem('usuario', JSON.stringify(usuarios));

    });

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
    	});

     }

     // Reloj
     setInterval(function() {

        var reloj = moment().format('MMMM Do YYYY, h:mm:ss a');
        $('#reloj').html(reloj);

    }, 1000);




});// Fin ready