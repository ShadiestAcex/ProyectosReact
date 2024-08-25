import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './PostStyles'; // Importa los estilos desde PostStyles.js

// Definición del componente funcional Post
// Recibe tres props: title (título de la publicación), content (contenido de la publicación), e imageUrl (URL de la imagen)
const Post = ({ title, content, imageUrl }) => {
    // Hook useState para gestionar el número de likes en la publicación
    const [likes, setLikes] = useState(0);

    // Hook useState para gestionar la lista de comentarios en la publicación
    const [comments, setComments] = useState([]);

    // Función que se ejecuta cuando el usuario hace clic en el botón "Like"
    const handleLike = () => {
        // Incrementa el número de likes en 1
        setLikes(likes + 1);
    };

    // Función que se ejecuta cuando el usuario hace clic en el botón "Comentarios"
    const handleAddComment = () => {
        // Solicita al usuario que ingrese un comentario a través de un prompt
        const comment = prompt('Escribe tu comentario:');
        // Si el comentario no está vacío, se añade a la lista de comentarios
        if (comment) {
            // Actualiza el estado de comments agregando el nuevo comentario al final del array
            setComments([...comments, comment]);
        }
    };

    // Renderización del componente Post
    return (
        <div style={styles.postContainer}>
            {/* Renderiza la imagen si imageUrl está presente */}
            {imageUrl && (
                <div style={styles.imageContainer}>
                    <img src={imageUrl} alt="Post" style={styles.image} />
                </div>
            )}
            {/* Renderiza el título de la publicación */}
            <div style={styles.title}>
                <h2>{title}</h2>
            </div>
            {/* Renderiza el contenido de la publicación */}
            <div style={styles.content}>
                <p>{content}</p>
            </div>
            {/* Botón para dar "Like", que muestra el número de likes actuales */}
            <button onClick={handleLike} style={styles.button}>
                👍 Like ({likes})
            </button>
            {/* Botón para agregar un comentario, que muestra el número de comentarios actuales */}
            <button onClick={handleAddComment} style={styles.button}>
                💬 Comentarios ({comments.length})
            </button>
            {/* Si hay comentarios, renderiza la lista de comentarios */}
            {comments.length > 0 && (
                <div style={styles.commentsContainer}>
                    {/* Mapea cada comentario en el array comments y lo renderiza como un párrafo */}
                    {comments.map((comment, index) => (
                        <p key={index} style={styles.comment}>{comment}</p>
                    ))}
                </div>
            )}
        </div>
    );
};

// Definición de los tipos y requisitos de las props que el componente Post espera recibir
Post.propTypes = {
    title: PropTypes.string.isRequired, // title debe ser una cadena y es obligatorio
    content: PropTypes.string.isRequired, // content debe ser una cadena y es obligatorio
    imageUrl: PropTypes.string, // imageUrl debe ser una cadena, pero es opcional
};

// Exporta el componente Post para que pueda ser utilizado en otros archivos
export default Post;