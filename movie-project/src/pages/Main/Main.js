import Header from '../../components/Header/Header'
import './Main.css'
import Slider from "../../components/Slider/Slider";
import MovieList from "../../components/Items/MovieList";
import Categories from "../../components/Categories/Categories";
// import { useEffect, useState } from "react";

function Main (props) {
    return (
        <div className="background">
            <Header />
            <Slider />
            <div className="movie__body">
                <Categories />
                <MovieList />
            </div>
        </div>
    )
}

export default Main;