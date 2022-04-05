import Link from 'next/link'
import { useState, useEffect } from 'react';

const MenuListas = (dataListas) => {
    const [lists, setLists] = useState()

 /*    const cadena = JSON.stringify(data)
    console.log(cadena)
    const cadena2 = JSON.parse(cadena)
    console.log(cadena2)
    const cadena3 = Object.values(cadena2.data.usuarios)
    const cadena4 = Object.values(cadena3)
    const cadena5 = Object.values(cadena4)
    const cadena6 = Object.keys(cadena5)
    console.log(cadena3)
    console.log(cadena6) */


const handleClick = async () =>{
/*     console.table(dataListas) */
 setLists(dataListas)
}

    return(
        <>
            <nav>
                <label onClick={handleClick}>Usuarios</label>
                <Link href='/'>Equipos</Link>
                <Link href='/'>Cargos</Link>
                <Link href='/'>Departamentos</Link>
            </nav> 
        
            <div className="mini-list">
                {lists &&
                    <ul>
                        {Object.values(lists).map(list =>{
                            {console.log(lists.data)}
                            <li key={list.id}> {list} </li>
                })}         
                    </ul>
                }
            </div>
        </>

        
    )
}

  
  
export default MenuListas;