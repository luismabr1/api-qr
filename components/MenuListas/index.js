import Link from 'next/link'
import { useState, useEffect } from 'react';

const MenuListas = ({data}) => {
    console.log(Object.values(data))
    const [lists, setLists] = useState(data)


const handleClick = (data) =>{
    if(data){
        console.table(data)
        setLists(data.usuarios)
        
    } 
}

    return(
        <>
            <nav>
                <label onClick={(data) => handleClick(data)}>Usuarios</label>
                <Link href='/'>Equipos</Link>
                <Link href='/'>Cargos</Link>
                <Link href='/'>Departamentos</Link>
            </nav> 
        
            <div className="mini-list">
                {lists &&
            
                    <ul>
                        {Object.values(lists).map(list =>(
                            <li key={list.id}> {list.nombre} </li>
                        ))}         
                    </ul>  

                }
            

            </div>
        </>

        
    )
}

  
  
export default MenuListas;