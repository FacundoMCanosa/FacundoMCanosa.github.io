document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', () => {
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const especialidad = document.getElementById('especialidad').value;

        localStorage.setItem('inscripcion', JSON.stringify({ /* Los valores obtenidos del formulario 
            se agrupan en un objeto, se convierten a una cadena JSON usando JSON.stringify, y luego se 
            almacenan en localStorage con la clave 'inscripcion'. localStorage es una API web que permite 
            almacenar datos de manera persistente en el navegador del usuario.     */
            
            nombre: nombre,
            email: email,
            especialidad: especialidad
        }));

        alert('Inscripción completada. Ahora puede matricularse en los cursos.');
    });
});