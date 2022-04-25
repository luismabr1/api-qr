import { useState } from "react";
import CheckIcon from "../CheckIcon"
import Button from "../Button";

const Detalles = (props) => {
    const [mostrar, setMostrar] = useState(false)
    const handleDetalles = async (data) => {
        setMostrar(true)
        Promise.all([
          fetch('http://localhost:3001/listarUsuariosById'), 
          fetch('http://localhost:3001/listarEquiposById'),
          fetch('http://localhost:3001/listarDepartamentosById'),
          fetch('http://localhost:3001/listarMarcasById'),
  
        ]).then(([usuario, equipo, departamento, marca]) => {
  
        }).catch((err) => {
            console.log(err);
        });
      }


    return (
        <>
        
            <CheckIcon />
            <Button onClick={handleDetalles}></Button>
            {mostrar &&
                <p></p>
            
            }

        </>
    );
};

export default Detalles;