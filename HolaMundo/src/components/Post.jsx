import { useState } from 'react';
import PropTypes from 'prop-types';

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

  // Definición de los estilos
    const styles = {
    postContainer: {
        border: '1px solid #ddd',
        padding: '16px',
        marginBottom: '16px',
        borderRadius: '8px',
        backgroundColor: '#efeae4',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '0 auto',
    },
    imageContainer: {
        width: '100%', // Ancho fijo del contenedor
        height: '70px', // Altura fija del contenedor
        overflow: 'hidden', // Oculta el desbordamiento si la imagen es más grande
        borderRadius: '8px',
        marginBottom: '16px',
    },
    title: {
        textAlign: 'center',
        color: '#737373',
        fontSize: '14px', // Tamaño de fuente grande
        fontWeight: 'bold', // Negrita
        textTransform: 'uppercase', // Mayúsculas
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Sombra de texto
        letterSpacing: '2px', // Espaciado entre letras
        fontFamily: "'Arial Black', Gadget, sans-serif", // Fuente llamativa
    },
    content: {
        textAlign: 'justify',
        textStyle: 'italic',
        color: '#7e9991',
        fontFamily: 'Georgia, serif',
        fontSize: '20px',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'contain', // La imagen llenará se adapta al contenedor
    },
    button: {
        marginRight: '8px',
        padding: '8px 16px',
        fontSize: '14px',
        cursor: 'pointer',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
    },
    commentsContainer: {
        marginTop: '16px',
        padding: '8px',
        borderRadius: '8px',
        backgroundColor: '#efeae4',
    },
    comment: {
        margin: '4px 0',
        padding: '8px',
        borderRadius: '4px',
        backgroundColor: '#e8bf8e',
    },
    };

    return (
    <div style={styles.postContainer}>
        {imageUrl && (
        <div style={styles.imageContainer}>
            <img src={imageUrl} alt="Post" style={styles.image} />
        </div>
        )}
        <div style={styles.title}>
            <h2 >{title}</h2>
        </div>
        <div style={styles.content}> 
            <p>{content}</p>
        </div>
        <button onClick={handleLike} style={styles.button}>
        👍 Like ({likes})
        </button>
        <button onClick={handleAddComment} style={styles.button}>
        💬 Comentarios ({comments.length})
        </button>
        {comments.length > 0 && (
        <div style={styles.commentsContainer}>
            {comments.map((comment, index) => (
            <p key={index} style={styles.comment}>{comment}</p>
            ))}
        </div>
        )}
    </div>
    );
};

Post.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
};

export default Post;