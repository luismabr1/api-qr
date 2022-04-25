import {useState, useEffect} from 'react'
import dynamic from "next/dynamic";
import AuthButton from '../Approve';

const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false});

const QR = (props) => {
    const [result, setResult] = useState({})
    const [visible, setVisible] = useState(null)
    const [error, setError] = useState()
    const [scan, setScan] = useState(false)
    const [equipo, setEquipo] = useState({})
    console.log(scan)

    const handleScan = async (data) =>  {
      if(data){
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ equipo_id:equipo })
      };
      fetch('http://localhost:3001/registros', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data.id));
      //puede ser pedida despues y asi el console log de ariba se cambia al setEquipo y listo

      const url = 'http://localhost:3001/listarEquipo/' + data
      fetch(url, {mode:'cors'})
          .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else return response.json();
          })
          .then((data) => {
            setResult(data)
            setScan(true)
            console.log(scan)
            setEquipo(data.id)
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


    return (
        <>
            <QrReader
            delay={300}
            onError={(err) => handleError(err)}
            onScan={(data) => handleScan(data)}
            style={{ width: '40vh' }}
            />
          {console.log(result)}

          { scan &&
              <Popup/>   
            } 
            <AuthButton
              visible={visible}
              result={result}
              error={error}
            />
          

        </>
    );
};

export default QR;
  