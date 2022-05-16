import { useState, useEffect } from "react";
import FormCargos from "../FormCargos";
import FormDepartamentos from "../FormDepartamentos";
import FormUsuarios from "../FormUsuarios";
import FormEquipos from "../FormEquipos";
import FormTipos from "../FormTipos";
import FormMarcas from "../FormMarcas"
import FormModelos from "../FormModelos"

const SelectForm = (props) =>{

    const users=props.users
    const equipos=props.equipos
    const departamentos=props.departamentos
    const cargos=props.cargos 
    const marcas=props.marcas 
    const modelos=props.modelos 
    const registros=props.registros
    const tipos=props.tipos

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
}, {
    id:'5',
    name:'REGISTROS'
}, {
    id:'6',
    name:'MARCAS'
}, {
    id:'7',
    name:'MODELOS'
}, {
    id:'8',
    name:'TIPOS'
}

];
const FormRender = ( {form} ) => {
    console.log(form)
    switch (form) {
/*       case "DEPARTAMENTOS":
        return <FormDepartamentos usuarios={users}
        marcas={marcas}
        tipos={tipos}
        registros={registros}
        />; */
      case "EQUIPOS":
        return <FormEquipos modelos={modelos}
        marcas={marcas}
        usuarios={users}
        tipos={tipos}
        registros={registros}
        />;
      case "USUARIOS":
        return <FormUsuarios departamentos={departamentos}
        cargos={cargos}
        equipos={equipos}
        />;
/*       case "CARGOS":
        return <FormCargos departamentos={departamentos}
        cargos={cargos}
        equipos={equipos} 
        />;
      case "MARCAS":
        return <FormMarcas />;
      case "MODELOS":
        return <FormModelos 
            marcas={marcas}
        />;
      case "TIPOS":
        return <FormTipos />; */
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
