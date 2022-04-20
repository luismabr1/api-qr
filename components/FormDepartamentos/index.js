import { useState } from "react";
import styles from './departamentos.module.css' 
import Button from "../Button";
import ListasUsuarios from "../ListasUsuarios";

const FormDepartamentos = (props) =>{
  const users = props.users
  const equipos = props.equipos
  const departamentos = props.departamentos
  const cargos=props.cargos
  
  const [apellido,setApellido] = useState("");
  const [cedula,setCedula] = useState("");
  const [sexo,setSexo] = useState("");
  const [departamento,setDepartamento] = useState();
  const [equipo,setEquipo] = useState(null);
  const [cargo,setCargo] = useState(null);


  const handleDepartamentos = async (props) => {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({nombre: departamento})
      };

     await fetch('http://localhost:3001/departamentos', requestOptions)
          .then(response => response.json())
          .then(data => setDepartamento(data.id));
  
  }

  return(
      <>
      <div className="main">

{/*       <ListasUsuarios 
          users={users}
          equipos={equipos}
          departamentos={departamentos}
          cargos={cargos}
        /> */}

          <h1>Agregar Departamentos</h1>


          <div className={styles.CreatePost}>
            <div className="uploadPost">
                <label>nombre: </label>
                <input className={styles.inputText} type="text" onChange={(e)=> {
                    setDepartamento(e.target.value)
                }}/>
                <Button onClick={handleDepartamentos} name="Submit Departamentos"/>
                {/* <button onClick={handleDepartamentos}>Submit Departamentos</button> */}
            </div>
          </div>
    </div>


      </>
  )

}
  

export default FormDepartamentos;
