import { ModalContext } from "../../providers/ModalProvider";
import { useContext } from "react";

const Basket = () => {

    // useContext (контекст, который вы использовали в провайдере) 
    // возвращает данные которые в провайдере
    const {cart} = useContext(ModalContext)

    return (
        <div>{cart.map(el => <p>{el.title}</p>)}</div>
    )
}

export default Basket;