import './Container.css';
import MenuLateral from '../MenuLateral/MenuLateral';
import Formulario from '../Formulario/Formulario';

const Container = () => {
    return (
        <div className='container'>
            <MenuLateral/>
                
            <Formulario
                info = "Personal info"
                paragraph = "Please provide your name, email address, and phone number."
                name = "Name"
                address = "Address"
                phone = "Phone Number"         
            />
        </div>
    )
}

export default Container