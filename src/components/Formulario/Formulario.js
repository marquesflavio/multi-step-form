import './Formulario.css'
import PaginaDois from '../PaginaDois/PaginaDois'

const Formulario = (props) => {

    // function submeteu(e){
    //     e.preventDefault()
    //     console.log('submeteu formulário')
        
    // }

    function proximaPagina(e){
        e.preventDefault()
        window.location.href = <PaginaDois/>
    }

    return (
        
        <form className="formulario">
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>

            <label>{props.name}</label>
            <input type='text' name="name"></input>

            <label>{props.address}</label>
            <input></input>

            <label>{props.phone}</label>
            <input></input>

            <button onClick={proximaPagina}>
                {props.button}
            </button>

        </form>


    )
}

export default Formulario