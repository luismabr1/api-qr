import {useState, useEffect} from 'react'
import dynamic from "next/dynamic";
import AuthButton from '../Approve';

const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false});

const QR = (props) => {
    const [result, setResult] = useState()
    const [visible, setVisible] = useState(null)
    const [error, setError] = useState()
    const [registro, setRegistro] = useState()
    const [marca, setMarca] = useState()
    const [tipo, setTipo] = useState()
    const [usuarios, setUsuarios] = useState()

    const handleScan = async (data) =>  {
      if(data){
        const url = 'http://localhost:3001/listarDepartamento/' + data
        fetch(url, {mode:'cors'})
          .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else return response.json();
          })
          .then((data) => {
            setResult(data);
            setVisible(true)
            console.log("DATA STORED");
          })
          .catch((error) => {
            setError('Valor no encontrado: ' + error);
            console.info(error)
            setVisible(false);
          });
      }
      }

      const handleError = (err) => {
        setError()
        console.error(err)
      } 

      const handleDetalles = async (data) => {
        Promise.all([
          fetch('http://localhost:3001/listarUsuarios'), 
          fetch('http://localhost:3001/listarEquipos'),
          fetch('http://localhost:3001/listarDepartamentos'),
          fetch('http://localhost:3001/listarMarcas'),
  
        ]).then(([items, contactlist, itemgroup]) => {
  
        }).catch((err) => {
            console.log(err);
        });
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

          {

              <AuthButton
                visible={visible}
                result={result}
                error={error}
              />
          

/*           visible

              ? 
                    <div>
                          <CheckIcon />
                          <Button >Detalles</Button>  
                          <p>{result.serial}</p>
                    </div>

              : 
              
              <RejectIcon />

          
          
           } */
          }

        </>
    );
};

export default QR;
  