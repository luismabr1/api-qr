import { useState, useEffect } from "react";

const FormEquipos = () =>{
  const [nombre,setNombre] = useState("");
  const [apellido,setApellido] = useState("");
  const [cedula,setCedula] = useState("");
  const [sexo,setSexo] = useState("");
  const [departamento,setDepartamento] = useState(null);
  const [equipo,setEquipo] = useState(null);
  const [cargo,setCargo] = useState(null);


  const handleEquipo = () => {
      
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({nombre: nombre, apellido: apellido, cedula: cedula, sexo: sexo, departamento: departamento, equipo: equipo, cargo:cargo})
      };
      fetch('http://localhost:3001/agregar', requestOptions)
          .then(response => response.json())
          .then(data => setEquipo(data.id));
  
  }

  return(
      <>

      <div className="main">

          <h1>Agregar Equipos</h1>


          <div className="CreatePost">
            <div className="uploadPost">
                <label>nombre: </label>
                <input type="text" onChange={(e)=> {
                    setNombre(e.target.value)
                }}/>
                <label>apellido: </label>
                <input type="text" onChange={(e)=>{
                    setApellido(e.target.value)
                }}/>
                <label>cedula: </label>
                <input type="number" onChange={(e)=>{
                    setCedula(e.target.value)
                }}/>
                <label>Sexo: </label>
                <input type="number" onChange={(e)=>{
                    setSexo(e.target.value)
                }}/>
                <label>departamento: </label>
                <input type="number" onChange={(e)=>{
                    setDepartamento(e.target.value)
                }}/>
                <label>Equipo: </label>
                <input type="number" onChange={(e)=>{
                    setEquipo(e.target.value)
                }}/>
                <label>Cargo: </label>
                <input type="number" onChange={(e)=>{
                    setCargo(e.target.value)
                }}/>
                <button onClick={handleEquipo}>Submit Post</button>
            </div>
          </div>
    </div>


      </>
  )

}
  

export default FormEquipos;
