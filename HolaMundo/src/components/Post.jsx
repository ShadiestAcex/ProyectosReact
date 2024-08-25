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