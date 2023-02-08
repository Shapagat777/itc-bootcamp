import { Route, Routes, Navigate } from 'react-router'
import { BrowserRouter } from "react-router-dom";
import Categories from "../components/Categories/Categories";
import Basket from '../pages/Basket/Basket';
import Main from '../pages/Main/Main';

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Navigate to={'/movie'}/>} />
            <Route path={'/movie'} element={<Main />} />
            <Route path={'/categories'} element={<Categories />} />
            <Route path={'/basket'} element={<Basket />} />
            <Route path={'*'} element={<div>Error! Page not found. 404</div>}/>
        </Routes>
    </BrowserRouter>
}

export default Router;