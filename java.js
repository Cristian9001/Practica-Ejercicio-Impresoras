document.addEventListener('DOMContentLoaded', function() {
    var header = document.createElement('header');
    header.innerHTML = `   <h1>Impresoras 3D</h1>
        <nav>
            <ul>
                <li><a href="#destacadas">Impresoras destacadas</a></li>
                <li><a href="#marcas">Marcas</a></li>
                <li><a href="#ofertas">Ofertas</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>`;
    document.body.appendChild(header);

    var sectionsContent = {
        'destacadas': '<h2>Impresoras 3D destacadas</h2><div class="productos"></div>',
        'marcas': '<h2>Marcas de impresoras 3D</h2><div class="marcas"></div>',
        'ofertas': '<h2>Ofertas en impresoras 3D</h2><div class="ofertas"></div>',
        'contacto': '<h2>Contacto</h2><form id="formulario-contacto" class="formulario-contacto"></form>'
    };

    Object.keys(sectionsContent).forEach(function(sectionId) {
        var section = document.createElement('section');
        section.id = sectionId;
        section.innerHTML = sectionsContent[sectionId];
        document.body.appendChild(section);
    });

    var footer = document.createElement('footer');
    footer.innerHTML = '<p>&copy; 2024 Impresoras3D.com</p>';
    document.body.appendChild(footer);
});