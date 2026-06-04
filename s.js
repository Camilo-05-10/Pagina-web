document.addEventListener('DOMContentLoaded', () => {
    // Capturamos los dos botones de interacción azul
    const btnAdd1 = document.getElementById('btn-add-1');
    const btnAdd2 = document.getElementById('btn-add-2');


    function insertarNuevaSeccion(evento) {
        const botonPulsado = evento.target;
        

        const nuevaSeccion = document.createElement('div');
        nuevaSeccion.style.backgroundColor = '#e2f0d9';
        nuevaSeccion.style.border = '2px dashed #385723';
        nuevaSeccion.style.padding = '20px';
        nuevaSeccion.style.margin = '20px 0';
        nuevaSeccion.style.borderRadius = '6px';
        
        nuevaSeccion.innerHTML = `
            <h4 style="margin-bottom: 10px; color: #385723;">¡Nueva sección interactiva activada!</h4>
            <p style="font-size: 14px;">Camilo, este bloque se generó dinámicamente ejecutando código JavaScript al escuchar el evento 'click' en el entorno de desarrollo.</p>
        `;

        // Insertamos el bloque justo antes del contenedor del botón pulsado
        botonPulsado.parentElement.insertBefore(nuevaSeccion, botonPulsado);
        
        // Deshabilitamos el botón para evitar spam de bloques repetidos
        botonPulsado.textContent = "SECCIÓN AÑADIDA";
        botonPulsado.style.backgroundColor = "#6c757d";
        botonPulsado.disabled = true;
    }

    if (btnAdd1) btnAdd1.addEventListener('click', insertarNuevaSeccion);
    if (btnAdd2) btnAdd2.addEventListener('click', insertarNuevaSeccion);
});