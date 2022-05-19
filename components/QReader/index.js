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
             <Modal data={result.equipo_id} show={showModal} onClose={()=> setShowModal(false)}>
                {console.log(result)}
              <h1>{result.usuario}</h1>
              <div className='lista'>
                  <ul>
                    <h3>MARCA</h3>
                        <li>{result.marca}</li>

                        <h3>MODELO</h3>
                        <li>{result.modelo}</li>

                        <h3>SERIAL</h3>
                        <li>{result.serial}</li>

                        <h3>DEPARTAMENTO</h3>
                        <li>{result.departamento}</li>

                        <h3>CARGO</h3>
                        <li>{result.cargo}</li>

                        <h3>TIPO DE DISPOSITIVO</h3>
                        <li>{result.tipo}</li>
    
              </ul>
              </div>

            </Modal> 
          
            }
        </>
    );
};

export default QR;
  