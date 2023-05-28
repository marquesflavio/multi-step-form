import MenuLateral from "../MenuLateral/MenuLateral"
import Formulario from "../Formulario/Formulario"

const PaginaDois = () => {
    return(
        <div className='container'>
            <MenuLateral/>
            
        
            <Formulario
                info = "Select your plan"
                paragraph = "You have the option of monthly or yearly biling."
                button = "Next Step"        
            />
          
         </div>

    )
}

export default PaginaDois