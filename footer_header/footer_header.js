document.querySelector("header").innerHTML = `
<h1 id="titulo_pagina">Escuela de
    Artes Marciales Mixtas "Fuerza y Honor"</h1>
<div>

    <button class="abrir"></button>
    <nav class="topnav">
        <ul class="nav-list">
            <button class="cerrar"></button>
            <li><a href="../index.html" class="enlace" style="text-transform: uppercase; font-weight: bold; "
                    accesskey="1">Inicio</a></li>
            <li><a class="enlace" href="../quiene-somos/quienes-somos.html"
                    style="text-transform: uppercase; font-weight: bold;" accesskey="2">Quiénes
                    Somos</a></li>
            <li><a class="enlace" href="../especialidades/especialidades.html"
                    style="text-transform: uppercase; font-weight: bold; " accesskey="3">Especialidades</a></li>
            <li><a class="enlace" href="../horarios/horarios.html"
                    style="text-transform: uppercase; font-weight: bold; " accesskey="4">Horarios</a>
            </li>
            <li><a class="enlace" href="../Tarifas/Tarifas.html"
                    style="text-transform: uppercase; font-weight: bold; " accesskey="5">Tarifas</a></li>
            <li><a class="enlace" href="../inscripcion/inscripcion.html"
                    style="text-transform: uppercase; font-weight: bold; " accesskey="6">Inscripción</a></li>
            <li><a class="enlace" href="../contacto/contacto.html"
                    style="text-transform: uppercase; font-weight: bold; " accesskey="7">Contacto</a>
            </li>

        </ul>
    </nav>
</div>

`


document.querySelector("footer").innerHTML = `

<div class="footer-content">
        <div class="left">
            <img src="../imagenes/Punching-Bag.png" alt="Bolsa" class="bolsa">
        </div>
        <div class="center">
            <div class="social-icons">
                <a href="https://www.whatsapp.com" target="_blank" class="icon whatsapp">
                    <img src="../imagenes/WhatsApp_icon.png" alt="WhatsApp">
                </a>
                <a href="https://www.facebook.com" target="_blank" class="icon facebook">
                    <img src="../imagenes/Facebook_Logo_2023.png" alt="Facebook">
                </a>
                <a href="https://www.twitter.com" target="_blank" class="icon twitter">
                    <img src="../imagenes/twitter-logo-2429.png" alt="Twitter">
                </a>
            </div>
            <p>&copy; 2024 Escuela de Artes Marciales Mixtas</p>
        </div>
        <div class="right">
            <a href="https://www.youtube.com/watch?v=VUfZe1gOups&list=WL&index=16" target="_blank">
                <img src="../imagenes/pngtree-world-champion-martial-arts-belt-pattern-png-image_14140153.png" alt="Belt">
            </a>
        </div>
    </div>
`