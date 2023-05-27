import './MenuLateral.css'

const MenuLateral = () => {
    return(
        <div className='container_lateral'>
            <ul>
                <li className='container_lista'>
                    <p className='container_item'>1</p> 
                    <p>Step 1</p>
                    <p className='container_item_texto'>Your Info</p>
                </li>
            </ul>
            <ul>
                <li className='container_lista'>
                    <p className='container_item'>2</p> 
                    <p>Step 2</p>
                    <p className='container_item_texto'>Select Plan</p>
                </li>
            </ul>
            <ul>
                <li className='container_lista'>
                    <p className='container_item'>3</p> 
                    <p>Step 3</p>
                    <p className='container_item_texto'>Add-Ons</p>
                </li>
            </ul>
            <ul>
                <li className='container_lista'>
                    <p className='container_item'>4</p> 
                    <p>Step 4</p>
                    <p className='container_item_texto'>Summary</p>
                </li>
            </ul>

                

        </div>
    )
}

export default MenuLateral