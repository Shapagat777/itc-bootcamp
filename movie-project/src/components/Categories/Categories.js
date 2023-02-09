import { useContext } from "react";
import { ModalContext } from "../../providers/ModalProvider";
import './Categories.css'

const Categories = () => {

    const {data} = useContext(ModalContext)

    return <div className="category__block">
        {
            data.map(el => <div className="category__item">
                <p className="category__item__text">{el.category}</p>
            </div>)
        }
    </div>
}

export default Categories;