import {useState} from 'react'
import dynamic from "next/dynamic";
import Button from '../Button';
import CheckIcon from '../Check';

const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false});

const QR = (props) => {
    console.log(props.equipos)
    const [result, setResult] = useState('No hay resultados')
    const [visible, setVisible] = useState(false)
    const [registro, setRegistro] = useState()
    const [marca, setMarca] = useState()
    const [tipo, setTipo] = useState()
    const [usuarios, setUsuarios] = useState()


    const handleScan = async (data) =>  {
      if(data){
        setVisible(true)
        const url = 'http://localhost:3001/listarEquipo/' + data
        fetch(url, {mode:'cors'})
          .then(response => response.json())
          .then(data => setResult(data));
      }
      }

    const handleDetalles = async (data) => {
      Promise.all([
        fetch('http://localhost:3001/listarUsuario/' + id), 
        fetch('http://localhost:3001/listarEquipo'),
        fetch('http://localhost:3001/listarDepartamento'),
        fetch('http://localhost:3001/listarMarca'),

      ]).then(([items, contactlist, itemgroup]) => {

      }).catch((err) => {
          console.log(err);
      });
    }
     const handleError = (err) => {
        console.error(err)
      } 

    return (
        <>
            <QrReader
            delay={300}
            onError={(err) => handleError(err)}
            onScan={(data) => handleScan(data)}
            style={{ width: '40vh' }}
            />
          {console.log(result)}

          {visible &&
            <div>
              <CheckIcon />
              <Button /* {handleDetalles(result.id)} */>Detalles</Button>  
              <p>{result.serial}</p>

           {/*  {departamento.filter(word => word.length > 6);} */}
            </div>
          }


        </>
    );
};

export default QR;
  