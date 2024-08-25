import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './PostStyles';

const Post = ({ title, content, imageUrl }) => {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]);

    const handleLike = () => {
    setLikes(likes + 1);
    };

    const handleAddComment = () => {
    const comment = prompt('Escribe tu comentario:');
    if (comment) {
        setComments([...comments, comment]);
    }
    };
    //Renderización del componente Post
    return (
    <div style={styles.postContainer}>
        {/*Renderiza la imagen si imageURL está presente*/}
        {imageUrl && (
        <div style={styles.imageContainer}>
            <img src={imageUrl} alt="Post" style={styles.image} />
        </div>
        )}
        {/*Renderiza el título del post*/}
        <div style={styles.title}>
            <h2 >{title}</h2>
        </div>
        {/*Renderiza el contenido del post*/}
        <div style={styles.content}> 
            <p>{content}</p>
        </div>
        {/*Botón para dar like y mostrar la cantidad de likes actuales*/}
        <button onClick={handleLike} style={styles.button}>
        👍 Like ({likes})
        </button>
        {/*Botón para agregar comentario y mostrar la cantidad de comentarios actuales*/}
        <button onClick={handleAddComment} style={styles.button}>
        💬 Comentarios ({comments.length})
        </button>
        {/*Renderiza los comentarios si hay alguno*/}
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