import PaginaDois from "../PaginaDois/PaginaDois"
import './Botao.css'

const Botao = (props) =>{

    function proximaPagina(){
        window.location.href = <PaginaDois/>
    }

    return(
        
            <button className="button" onClick={proximaPagina}>{props.button}</button>
    )
}
export default Botao