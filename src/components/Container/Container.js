import './Container.css';
import MenuLateral from '../MenuLateral/MenuLateral';
import Formulario from '../Formulario/Formulario';

const Container = () => {
    return (
        <div className='container'>
            <MenuLateral/>
            <Formulario/>
        </div>
    )
}

export default Container