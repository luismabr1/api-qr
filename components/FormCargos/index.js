import { useState, useEffect } from "react";

const FormCargos = (props) =>{
  const [nombre,setNombre] = useState("");
  const [apellido,setApellido] = useState("");
  const [cedula,setCedula] = useState("");
  const [sexo,setSexo] = useState("");
  const [departamento,setDepartamento] = useState(props.departamentos);
  const [equipo,setEquipo] = useState(null);
  const [cargo,setCargo] = useState(null);


  const handleCargos = (props) => {
      
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({nombre: nombre, departamento: departamento})
      };
      fetch('http://localhost:3001/cargos', requestOptions)
          .then(response => response.json())
          .then(data => setEquipo(data.id));
  
  }

  return(
      <>

      <div className="main">

          <h1>Agregar cargos</h1>


          <div className="CreatePost">
            <div className="uploadPost">
                <label>nombre: </label>
                <input type="text" onChange={(e)=> {
                    setNombre(e.target.value)
                }}/>

                <label>departamento: </label>
                <select name="select" onChange={e => setDepartamento(e.target.value)} >
                    {departamento.map(department => {
                                return(
                                    <option key={department.id} value={department.id}>{department.nombre}</option>
                                )
                            }   
                    )}

                </select>

                <button onClick={handleCargos}>Submit Post</button>
            </div>
          </div>
    </div>


      </>
  )

}
  

export default FormCargos;
