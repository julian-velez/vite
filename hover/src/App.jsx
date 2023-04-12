import "./App.css";
import imagenes from './imagenes/carro2.jpg';
import imagen2 from './imagenes/carro.jpg';
import imagen3 from './imagenes/carro3.jpg';



function profile() {
  return (
    <div>
      <h1 className="texto">Image Hover</h1>
      <img className="image" src={imagenes} alt="" />
      <img className="image2" src={imagen2} alt="" />
      <img className="image3" src={imagen3} alt="" />
    </div>
   
  );
}


export default profile







