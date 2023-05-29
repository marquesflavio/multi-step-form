import MenuLateral from "../MenuLateral/MenuLateral"
import Botao from "../Botao/Botao"

const PaginaDois = () => {
    return(
        <div className='container'>
            <MenuLateral/>
            
            <Botao button="Go Back"/>
            <Botao button="Next Step"/>
          
         </div>

    )
}

export default PaginaDois