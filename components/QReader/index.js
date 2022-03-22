import {useState} from 'react'
import dynamic from "next/dynamic";
import Result from '../Result';
import Button from '../Button';

const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false});

const QR = (props) => {
    const [result, setResult] = useState('No hay resultados')
    const [visible, setVisible] = useState(false)

    const handleScan = async (data) =>  {
      if(data){
        setVisible(true)
        const url = 'http://localhost:3001/' + data
        fetch(url, {mode:'cors'})
          .then(response => response.json())
          .then(data => setResult(data.nombre));
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
            style={{ width: '40vh' }}
            />
          {console.log(result)}

          {visible &&
          <Button className='visible'>Detalles</Button>  

          }
             <p>{result}</p>


        </>
    );
};

export default QR;
 