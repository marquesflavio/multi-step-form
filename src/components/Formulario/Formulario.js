import './Formulario.css'
import PaginaDois from '../PaginaDois/PaginaDois'

const Formulario = (props) => {

    function proximaPagina(){
        window.location.href = <PaginaDois/>
    }

    return (
        
        <form className="formulario">
            <h1>{props.info}</h1>
            <p>{props.paragraph}</p>

            <label>{props.name}</label>
            <input required type='text' placeholder='Nome completo' name="name"></input>

            <label>{props.address}</label>
            <input required type='text' placeholder='Rua, Bairro, Cidade, Estado' name="address"></input>

            <label>{props.phone}</label>
            <input type='tel' name="phone" placeholder= "(00) 123-456-789" pattern="[0-9]-{2}[0-9]{3}-[0-9]{3}-[0-9]{3}"></input>

            <button onClick={proximaPagina}>
                {props.button}
            </button>

        </form>


    )
}

export default Formulario