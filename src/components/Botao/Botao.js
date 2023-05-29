import PaginaDois from "../PaginaDois/PaginaDois"
import './Botao.css'

const Botao = (props) =>{

    function proximaPagina(){
        window.location.href = <PaginaDois/>
    }

    return(
        
        <div className="button-container">
            <button className="button" onClick={proximaPagina}>{props.button}</button>
        </div>
    )
}
export default Botao