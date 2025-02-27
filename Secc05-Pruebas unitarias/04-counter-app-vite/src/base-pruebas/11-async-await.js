
export const getImagen = async() => {

    try {

        const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';//clave pa autenticar las solicitudes a la API de Giphy.
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);//llama a API con GIF aleatorio.
        const { data } = await resp.json(); //await hace que el código espere a que la solicitud se complete antes de continuar

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        console.error(error);
        return 'No se encontro la imagen';
    }
    
    
    
}

 getImagen();



