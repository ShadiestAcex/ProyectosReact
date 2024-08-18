import Post from './components/Post';

const App = () => {
  return (
    <div>
      <h1 style={styles.title}>Animales De La Jungla</h1>
      <Post title="Jaguar" 
        content="Después del tigre y el león, el jaguar es el tercer 
      felino más grande del mundo y el más grande de América." 
        imageUrl="public/Imagenes/Jaguar.webp"/>
      <Post title="Guacamayo" 
        content="Los guacamayos 
      pueden vivir entre 30 y 50 años en la naturaleza, y aún más 
      tiempo en cautiverio." 
        imageUrl="public/Imagenes/Guacamaya.webp"/>
      <Post title="Anaconda" 
        content="La anaconda verde es la serpiente más pesada del 
        mundo, llegando a pesar más de 200 kg (440 libras)."
        imageUrl="public/Imagenes/Anaconda.webp"/>
      <Post title="Tucán"
        content="El pico del tucán puede llegar 
        a medir hasta un tercio de la longitud total del 
        ave, y es más largo que su propio cuerpo."
        imageUrl="public/Imagenes/Tucan.webp"/>
    </div>
  );
};

const styles = {
  title: {
    color: '#d8770c', // Color llamativo
    fontSize: '24px', // Tamaño de fuente grande
    fontWeight: 'bold', // Negrita
    textTransform: 'uppercase', // Mayúsculas
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Sombra de texto
    letterSpacing: '2px', // Espaciado entre letras
    fontFamily: "'Arial Black', Gadget, sans-serif", // Fuente llamativa
  },
}

export default App;