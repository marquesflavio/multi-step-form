import './Formulario.css'

const Formulario = () => {
    return (

        <form className="formulario">
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>

            <label>Name</label>
            <input></input>

            <label>Email Address</label>
            <input></input>

            <label>Phone Number</label>
            <input></input>

            <button>Next Step</button>

        </form>

    )
}

export default Formulario