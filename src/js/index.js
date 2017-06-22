$('#generate').click(function(){
    let pass = GenModule.randomPassword();
    $('#passwd').text(pass);
    $('#copied').hide();
});

$('#copyBut').click(function(){
    $('#copied').show();
});

$( function() {
    var handle = $( "#custom-handle" );

    $( "#slider" ).slider({
        value : 10,
        min : 10,
        max : 20,
        create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
      },
      change: function( event, ui ) {
        var selection = $( "#slider" ).slider( "value" );
        GenModule.setNumberOfCharacters(selection);
        let pass = GenModule.randomPassword();
        $('#passwd').text(pass);
      }
    });
});

clipboard = new Clipboard('.clip');
