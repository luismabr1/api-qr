import { useState, useEffect } from "react";
import FormCargos from "../FormCargos";
import FormDepartamentos from "../FormDepartamentos";
import FormUsuarios from "../FormUsuarios";
import FormEquipos from "../FormEquipos";

const SelectForm = (props) =>{

    const users=props.usuarios
    const equipos=props.equipos
    const departamentos=props.departamentos
    const cargos=props.cargos 
  const [form, setForm] = useState('USUARIOS');
  const Forms = [{
    id: '1',
    name: 'DEPARTAMENTOS'
}, {
   id: '2',
   name: 'EQUIPOS'
}, {
    id:'3',
    name:'USUARIOS'
}, {
    id:'4',
    name:'CARGOS'
}

];
const FormRender = ( {form} ) => {
    console.log(form)
    switch (form) {
      case "DEPARTAMENTOS":
        return <FormDepartamentos departamentos={departamentos}
        cargos={cargos}
        equipos={equipos} />;
      case "EQUIPOS":
        return <FormEquipos departamentos={departamentos}
        cargos={cargos}
        equipos={equipos} />;
      case "USUARIOS":
        return <FormUsuarios departamentos={departamentos}
        cargos={cargos}
        equipos={equipos}/>;
      case "CARGOS":
        return <FormCargos departamentos={departamentos}
        cargos={cargos}
        equipos={equipos} />;
      default:
        return null;
    }
  };

  return(
      <>
          <h1>Elegir Formulario</h1>
                <div className="caja">
                    <select name="select" onChange={e => setForm(e.target.value)} >
                        {Forms.map(form => {
                                    return(
                                        <option key={form.id} value={form.name}>{form.name}</option>
                                    )
                                }   
                        )}

                    </select>
                    
                    </div>


                    <FormRender form={form} />
                    

      </>
  )

}
  

export default SelectForm;
