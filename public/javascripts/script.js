$( document ).ready ( function () { 
    console.log("ready");
    $( '#doit' ).click ( function () {
        var person = $( '#person-select' ).val();
        var message = $ ( '#message' ).val().trim();
        console.log( person + " " + message );
        $.ajax({
            url: 'http://localhost:3000/sendMessage',
            method: 'POST',
            dataType: 'json',
            data: {
                person: person,
                message: message
            }
        }).done ( function ( data ) {
            alert(data.message);  
        }).fail ( function ( error ) {
            alert(JSON.stringify(error));
        });
    });
    
});
