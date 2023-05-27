import './Formulario.css'

const Formulario = (props) => {
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

            <button>{props.button}</button>

        </form>

    )
}

export default Formulario