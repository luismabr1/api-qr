import {useState} from 'react'
import dynamic from "next/dynamic";
import AuthButton from '../Approve';
import Modal from '../Popup';

const QrReader = dynamic(() => import("modern-react-qr-reader"), { ssr: false});

const QR = () => {
    const [showModal, setShowModal] = useState(false)
    const [result, setResult] = useState([])
    const [visible, setVisible] = useState(null)
    const [error, setError] = useState()

    const handleScan = async (data) =>  {
      //puede ser pedida despues y asi el console log de ariba se cambia al setEquipo y listo
          if(data) {
          const url = 'https://server-qr.vercel.app/api/equipos/info/' + data
          console.log(url)
           fetch(url, {mode:'cors'})
         /*.then(response => response.json())
          .then(data => {
            setResult(data.body)
            setShowModal(true)
            setVisible(true)
            console.log("DATA STORED", data.body)
          }) */
          .then((response) => {
            if(!response){
              throw new Error(response.status);
            } 
            else{
              return response.json();
            } 
          })
          .then((data) => {
            console.log(data.body[0])
            setResult(data.body[0])
            setShowModal(true)
            setVisible(true)
            console.log("DATA STORED", data);
          })
          .catch((error) => {
            setError('Valor no encontrado: ' + error);
            console.info(error)
            setVisible(false);
          })
        }
      }

      const handleError = (err) => {
        setError()
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
 
            <AuthButton
                visible={visible}
                result={result}
                error={error}
            /> 
            
            {result &&
             <Modal data={result.id} show={showModal} onClose={()=> setShowModal(false)}>
                {console.log(result)}
              <h1>NOMBRE</h1>
               
              

              <div>
                      <ul>
                      <span>MARCA</span>
                        <li>{result.marca}</li>

                        <span>MODELO</span>
                        <li>{result.modelo}</li>

                        <span>SERIAL</span>
                        <li>{result.serial}</li>

                        <span>ASIGNADO A:</span>
                        <li>{result.usuario}</li>

                        <span>DEPARTAMENTO</span>
                        <li>{result.departamento}</li>

                        <span>CARGO</span>
                        <li>{result.cargo}</li>

                        <span>TIPO</span>
                        <li>{result.tipo}</li>
    
              </ul>
              </div>

            </Modal> 
          
            }
        </>
    );
};

export default QR;
  