$("ul").on('click','li', function() { // añadimos método on porque servirá para elementos existentes y elementos potenciales
  $(this).toggleClass("completed"); // le metemos el listener al <ul> porque es el que existirá de primeras y luego indicamos que el click se hará sobre <li>
});

$("ul").on('click', 'span', function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove(); 
      // ojo, aqui ponemos sólo (this) porque es un this diferente al de arriba.Este this se refiere a (this).parent().
    });
  event.stopPropagation();
  // ponemos esto para que el evento no se extienda más allá del nivel superior de <li>; debemos meter event como argumento de la función.
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){ // la tecla enter es 13 en modo alfanumérico
    var todoText = $(this).val(); // convertimos a variable el valor que hayamos tecleado en el input 
    $(this).val(''); // esto actua como setter para dejar el input en blanco(BUENA IDEA!!)
    $('ul').prepend("<li> <span> <i class='fas fa-trash-alt'> </i> </span>" + todoText + "</li>"); // OJO! Uso de append para añadir nuevos elementos al <ul> 
    }
})

$('.fa-plus-circle').on('click', function(){
    $('input').fadeToggle(1000, function(){
        console.log('hello!')
    })
    });




