import "../../components/Header.js";
import "../../components/EventsList.js";
import "../../components/Select-component.js";

ClassicEditor
    .create( document.querySelector( '#editor' ) )
    .catch( error => {
        console.error( error );
    } );
