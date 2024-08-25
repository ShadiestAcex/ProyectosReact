// Definición de los estilos en un objeto `styles`
const styles = {
    // Estilo para el contenedor principal del post
    postContainer: {
        border: '1px solid #ddd', // Borde gris claro
        padding: '16px', // Espaciado interno
        marginBottom: '16px', // Espaciado inferior entre posts
        borderRadius: '8px', // Bordes redondeados
        backgroundColor: '#efeae4', // Color de fondo beige claro
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Sombra ligera para dar profundidad
        maxWidth: '600px', // Ancho máximo del contenedor
        margin: '0 auto', // Centrado horizontal del contenedor
    },
    // Estilo para el contenedor de la imagen
    imageContainer: {
        width: '100%', // La imagen ocupa todo el ancho del contenedor
        height: '70px', // Altura fija del contenedor de la imagen
        overflow: 'hidden', // Oculta cualquier desbordamiento de la imagen
        borderRadius: '8px', // Bordes redondeados
        marginBottom: '16px', // Espaciado inferior entre la imagen y el contenido
    },
    // Estilo para el título del post
    title: {
        textAlign: 'center', // Centrado del texto del título
        color: '#737373', // Color gris oscuro para el texto
        fontSize: '14px', // Tamaño de fuente mediano
        fontWeight: 'bold', // Texto en negrita
        textTransform: 'uppercase', // Transformación del texto a mayúsculas
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Sombra ligera para destacar el texto
        letterSpacing: '2px', // Espaciado entre letras para un mejor legibilidad
        fontFamily: "'Arial Black', Gadget, sans-serif", // Fuente llamativa y fuerte
    },
    // Estilo para el contenido del post
    content: {
        textAlign: 'justify', // Justificación del texto para alinearlo a ambos lados
        fontStyle: 'italic', // Texto en cursiva para darle énfasis
        color: '#7e9991', // Color gris verdoso para el texto
        fontFamily: 'Georgia, serif', // Fuente elegante y clásica
        fontSize: '20px', // Tamaño de fuente más grande para facilitar la lectura
    },
    // Estilo para la imagen dentro del contenedor
    image: {
        width: '100%', // La imagen ocupa todo el ancho del contenedor
        height: '100%', // La imagen ocupa toda la altura del contenedor
        objectFit: 'contain', // La imagen se escala para caber dentro del contenedor sin recortarse
    },
    // Estilo para los botones de "Like" y "Comentarios"
    button: {
        marginRight: '8px', // Espaciado derecho entre botones
        padding: '8px 16px', // Espaciado interno del botón
        fontSize: '14px', // Tamaño de fuente mediano
        cursor: 'pointer', // Cursor de mano al pasar sobre el botón
        borderRadius: '4px', // Bordes redondeados del botón
        border: 'none', // Sin borde adicional
        backgroundColor: '#007bff', // Color de fondo azul para destacar el botón
        color: '#fff', // Color blanco para el texto del botón
    },
    // Estilo para el contenedor de los comentarios
    commentsContainer: {
        marginTop: '16px', // Espaciado superior para separar del contenido anterior
        padding: '8px', // Espaciado interno del contenedor de comentarios
        borderRadius: '8px', // Bordes redondeados
        backgroundColor: '#efeae4', // Color de fondo consistente con el post
    },
    // Estilo para cada comentario individual
    comment: {
        margin: '4px 0', // Espaciado vertical entre comentarios
        padding: '8px', // Espaciado interno de cada comentario
        borderRadius: '4px', // Bordes redondeados del comentario
        backgroundColor: '#e8bf8e', // Color de fondo cálido para los comentarios
    },
};

export default styles; // Exporta el objeto `styles` por defecto para su uso en otros componentes