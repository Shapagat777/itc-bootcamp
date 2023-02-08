import { useState, useEffect } from "react";
import { getDataFromBackend } from "../../utils/config";
import './Categories.css'

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getDataFromBackend().then(res => {
            setCategories(res.map(el => el.category))
        })
    }, [])

    return <div className="category__block">
        {
            categories.map(el => <div className="category__item">
                <p className="category__item__text">{el}</p>
            </div>)
        }
    </div>
}

export default Categories;