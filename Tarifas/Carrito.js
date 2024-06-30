document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];/*Se obtiene el carrito almacenado en 
    localStorage 
    (si existe) y se convierte de una cadena JSON a un objeto JavaScript. Si no hay un carrito 
    almacenado, se inicializa como un arreglo vacío.  */
    const cartItemsContainer = document.getElementById('cart-items'); /*Se selecciona el contenedor donde 
    se mostrarán los elementos del carrito.  */
    const totalPriceElement = document.getElementById('total-price'); /*e selecciona el elemento donde se 
    mostrará el precio total.  */
    const confirmPurchaseButton = document.getElementById('confirm-purchase');  /*Se selecciona el botón de 
    confirmación de compra.  */
    const confirmationMessage = document.getElementById('confirmation-message');  /*Se selecciona el elemento donde 
    se mostrará el mensaje de confirmación.  */

    document.querySelectorAll('.add-to-cart').forEach(button => {  /*Se seleccionan todos los botones con la clase 
        .add-to-cart y se les añade un manejador de eventos 'click'.   */
        button.addEventListener('click', event => {
            const inscripcion = JSON.parse(localStorage.getItem('inscripcion'));  /*Se obtiene la inscripción almacenada 
            en localStorage.  */

            if (!inscripcion) {
                alert('Debe completar el formulario de inscripción antes de agregar cursos al carrito.');
                return;
            }

            const courseElement = event.target.closest('.course'); /*Se obtiene el elemento del curso más 
            cercano al botón clicado.  */
            const courseName = courseElement.getAttribute('data-course'); /*Se obtiene el nombre del curso 
            desde el atributo data-course.  */
            const coursePrice = parseFloat(courseElement.getAttribute('data-price')); /* Se obtiene el precio 
            del curso desde el atributo data-price y se convierte a número. */

            const cartItem = { name: courseName, price: coursePrice }; /* Se crea un objeto con el nombre y 
            el precio del curso. */
            cart.push(cartItem);  /*Se añade el objeto al carrito.  */
            updateCart();  /* Se actualiza la visualización del carrito. */
        });
    });

    confirmPurchaseButton.addEventListener('click', () => {  /*Se añade un manejador de eventos 'click' al 
        botón de confirmación de compra.  */
        if (cart.length > 0) {  /* Si el carrito no está vacío, se muestra el mensaje de 
            confirmación y se vacía el carrito. */
            
            confirmationMessage.style.display = 'block';
            setTimeout(() => {
                confirmationMessage.style.display = 'none';
            }, 5000);

           
            cart.length = 0;  /* Se vacía el arreglo del carrito. */
            localStorage.removeItem('cart');  /*Se elimina el carrito de localStorage.  */
            updateCart();  /* Se actualiza la visualización del carrito */
        } else {
            alert('El carrito está vacío. Agregue cursos antes de confirmar la compra.');
        }
    });

    function updateCart() {  /* Esta función actualiza la visualización del carrito y el precio total.  */
        cartItemsContainer.innerHTML = '';  /*Se vacía el contenido del contenedor del carrito.*/

        let total = 0;
        cart.forEach(item => {  /*Se recorre cada elemento del carrito y se añade al contenedor.  */
            const listItem = document.createElement('li'); /*Se crea un nuevo elemento HTML <li> (elemento de lista)   */
            listItem.classList.add('list-group-item'); /*Se añade la clase list-group-item al elemento de lista recién creado. 
            Esto generalmente se hace para aplicar estilos CSS específicos a los elementos de la lista, como los que se encuentran 
            en una lista de Bootstrap.  */
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(listItem); /*Se añade el elemento de lista (listItem) al contenedor de elementos del carrito 
            (cartItemsContainer). Este contenedor es un elemento HTML que está destinado a contener la lista de artículos del carrito. 
            El método appendChild añade el nuevo elemento al final de la lista de elementos hijos del contenedor.   */

            total += item.price;
        });

        totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;

         // Almacenar el carrito actualizado en localStorage
         localStorage.setItem('cart', JSON.stringify(cart));
    }
    // Inicializar el carrito al cargar la página
    updateCart();

});
