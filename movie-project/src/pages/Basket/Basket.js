import { ModalContext } from "../../providers/ModalProvider";
import { useContext } from "react";
import Header from "../../components/Header/Header";

const Basket = () => {

    // useContext (контекст, который вы использовали в провайдере) 
    // возвращает данные которые в провайдере
    const { cart } = useContext(ModalContext)

    return (
        <div>{cart.map(el => <p>{el.title}</p>)}
          <div className="background">
              <div className="inner__list"> 
              </div>
           
         </div>
         </div>
    )
}

export default Basket;