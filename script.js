// Función para mostrar mensaje de adopción
function mostrarMensaje(nombrePerrito) {
    // Crear el mensaje
    const mensajeHTML = `
        <div class="mensaje-contenido">
            <p>✨ ¡Gracias por tu interés en adoptar a ${nombrePerrito}! 
               Un voluntario se comunicará contigo pronto. 🐾</p>
            <button onclick="cerrarMensaje()">Cerrar</button>
        </div>
    `;
    
    const mensajeContainer = document.getElementById('mensaje-container');
    mensajeContainer.innerHTML = mensajeHTML;
    mensajeContainer.classList.add('mostrar');
    
    // Ocultar automáticamente después de 5 segundos
    setTimeout(cerrarMensaje, 5000);
}

// Función para cerrar el mensaje
function cerrarMensaje() {
    const mensajeContainer = document.getElementById('mensaje-container');
    mensajeContainer.classList.remove('mostrar');
}

// Agregar efecto de escritura al título
document.addEventListener('DOMContentLoaded', function() {
    const titulo = document.querySelector('header h1');
    const textoOriginal = titulo.textContent;
    titulo.textContent = '';
    
    let i = 0;
    function escribirTitulo() {
        if (i < textoOriginal.length) {
            titulo.textContent += textoOriginal.charAt(i);
            i++;
            setTimeout(escribirTitulo, 50);
        }
    }
    
    // Comentar la línea siguiente si no quieres el efecto de escritura
    // escribirTitulo();
    
    // Agregar contador de visitas (usando localStorage)
    let visitas = localStorage.getItem('visitasPerritos');
    if (visitas) {
        visitas = parseInt(visitas) + 1;
    } else {
        visitas = 1;
    }
    localStorage.setItem('visitasPerritos', visitas);
    
    // Mostrar contador de visitas (opcional)
    console.log(`Has visitado esta página ${visitas} veces`);
});

// Función para cambiar el color de fondo (opcional)
function cambiarColorFondo() {
    const colores = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    ];
    
    let indice = 0;
    setInterval(() => {
        document.body.style.background = colores[indice];
        indice = (indice + 1) % colores.length;
    }, 5000);
}

// Descomentar la siguiente línea si quieres que cambie el color de fondo
// cambiarColorFondo();

// Agregar efecto de hover en las tarjetas con JavaScript (opcional)
const tarjetas = document.querySelectorAll('.tarjeta-perrito');
tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    tarjeta.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
