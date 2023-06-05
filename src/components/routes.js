import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './Container/Container';
import PaginaDois from './PaginaDois/PaginaDois';


const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route to="/" element={<Container/>}></Route>
                <Route to="/pagina2" element={<PaginaDois/>}></Route>
            </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes