import {useState} from 'react'
import dynamic from "next/dynamic";
import AuthButton from '../Approve';
import Modal from '../Popup';

const QrReader = dynamic(() => import("modern-react-qr-reader"), { ssr: false});

const QR = () => {
    const [showModal, setShowModal] = useState(false)
    const [result, setResult] = useState()
    const [visible, setVisible] = useState(null)
    const [error, setError] = useState()

    const handleScan = async (data) =>  {
      //puede ser pedida despues y asi el console log de ariba se cambia al setEquipo y listo
          if(data) {
          const url = 'https://server-qr.vercel.app/api/equipos/' + data
          console.log(url)
          fetch(url, {mode:'cors'})
          .then(response => response.json())
          .then(data => {
            setResult(data.body)
            setShowModal(true)
            setVisible(true)
            console.log("DATA STORED", data.body)
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
                {result.id}
                {result.serial}
                 { result.map((value) =>{
                return(
                    <ul>
                        {console.log(value.serial)} 
                        <li key={value.id}>{value.serial}</li>
                    </ul>
                )}
        )}

            </Modal> 
          
            }
        </>
    );
};

export default QR;
  