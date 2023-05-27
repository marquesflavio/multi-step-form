import './Container.css';
import MenuLateral from '../MenuLateral/MenuLateral';
import Formulario from '../Formulario/Formulario';

const Container = () => {
    return (
        <div className='container'>
            <MenuLateral/>
                
            
            <Formulario
                name = "Name"
                address = "Address"
                phone = "Phone Number"  
                button = "Next Step"        
            />
        </div>
    )
}

export default Container