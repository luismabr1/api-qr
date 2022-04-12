import { useState, useEffect } from "react";

const FormEquipos = (props) =>{
    const departamentos1 = props.departamentos
    const cargos1 = props.cargos
    const equipos1 = props.equipo
    console.log(equipos1)

  const [nombre,setNombre] = useState("");
  const [apellido,setApellido] = useState("");
  const [cedula,setCedula] = useState("");
  const [sexo,setSexo] = useState("");
  const [departamento,setDepartamento] = useState(props.departamentos);
  const [equipo,setEquipo] = useState(null);
  const [cargos,setCargo] = useState(props.cargos);


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
                <select name="select" onChange={e => setDepartamento(e.target.value)} >
                
                    {departamentos1.map(department => {
                                return(
                                    <option key={department.id} value={department.id}>{department.nombre}</option>
                                )
                            }   
                    )}

                </select>
                <label>Equipo: </label>
                <select name="select" onChange={e => setDepartamento(e.target.value)} >
                
                    {equipos1.map(equipo => {
                                return(
                                    <option key={equipo.id} value={equipo.id}>{equipo.nombre}</option>
                                )
                            }   
                    )}

                </select>
                <label>Cargo: </label>
                <select name="select" onChange={e => setCargo(e.target.value)}>
                    {cargos1.map( cargo => {
                                return(
                                    <option key={cargo.id}value={cargo.id}>{cargo.nombre}</option>
                                )
                            }   
                    )}
                </select>
                <button onClick={handleEquipo}>Submit Post</button>
            </div>
          </div>
    </div>


      </>
  )

}
  

export default FormEquipos;
