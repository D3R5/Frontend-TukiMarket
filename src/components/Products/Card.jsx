import React from "react";
import cart from "../../assets/cartShop.png";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { useDispatch , useSelector} from "react-redux";
import {setCarrito , aumentarCantidad, getDetail} from "../../redux/actions";

export default function Card(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const darkModes = useSelector((state) => state.darkModes);
  const carrito = useSelector((state) => state.carrito);
  const handleNavigate = () => {
    navigate(`Detail/${props.id}`);
  };

  const buyProduct = (e, productDetail) => {
  const carrito=useSelector((state) => state.carrito);

  const handleNavigate = () => {
    navigate(`Detail/${props.id}`);
  }
  
  const buyProduct = async (e, props) => {
    e.preventDefault();
    const foundProduct = carrito.find((p) => p.id === props.id);
    if (foundProduct ) {
      dispatch(aumentarCantidad(foundProduct.id));
    } else {
      const newProduct = { ...props, cantidad: 1 };
      dispatch(setCarrito(newProduct));
    }
    console.log(carrito);
  };
  }
    

  return (
    <div className={darkModes ? "container-card-Darks" : "container-card"}>
      <img
        src={props.img}
        onClick={handleNavigate}
        className="card-img-top card-image"
        alt={props.name}
      />
      <div className="container-info">
        <h5 className="card-title">{props.name}</h5>
        <hr></hr>
        <div className="buy-info">
          <p className="card-price">${props.price} </p>
          <button
            type="button"
            className="button-buy"
            onClick={(e) => buyProduct(e, props)}
          >
            <img src={cart} alt="buy" />
          </button>
        </div>
      </div>
    </div>
  );
}

//agregar el onClick={
