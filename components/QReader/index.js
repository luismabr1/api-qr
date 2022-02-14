import {useState} from 'react'
import dynamic from "next/dynamic";

const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false});

const QR = () => {
    const [result, setResult] = useState('No hay resultados')

    const handleScan = (data) =>  {
        if (data) {
          setResult(data)
        }
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
            style={{ width: '100%' }}
            />


            <p>{result}</p>


        </>
    );
};

export default QR;
 