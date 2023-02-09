import './MovieList.css'
import StarIcon from '../../images/star.svg'
import UnfilledStarIcon from '../../images/unfilled_star.svg'
import { ModalContext } from "../../providers/ModalProvider";
import { useContext } from 'react';

// Components, props, hooks (useState, useEffect), class Components
// router, connecting libraries, Redux, RTK, Material-UI, Typescript project
// Ant-design, lifecycles.

const MovieList = () => {
    const {cartRefresher, data} = useContext(ModalContext)

    return (
        <div className="movie__list">
        {
            data.map((el, index) => {
                const unfilledStars = Array(5).fill(<img className="movie__rating__image" src={UnfilledStarIcon}/>)
                unfilledStars.fill(<img className="movie__rating__image" src={StarIcon}/>, 0, Math.floor(el.rating));
                return (
                    <div className="movie__item" onClick={() => cartRefresher(prev => [...prev, el])}>
                        <img className="movie__image" src={el.image}/>
                        <div className="movie__info__block">
                            <h3 className="movie__info__title">{el.title}</h3>
                            <p className="movie__info__content">{el.description}</p>
                            <div className="movie__rating__block">
                                <button className="movie__show__btn">Посмотреть</button>
                                <div className="movie__ratings">
                                    {
                                        unfilledStars.map(el => el)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default MovieList;