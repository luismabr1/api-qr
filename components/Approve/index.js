import { useEffect } from "react";
import CheckIcon from "../CheckIcon";
import Button from "../Button";
import RejectIcon from "../RejectIcon";

const AuthButton = (props) => {

    let visible  = props.visible;
    let result  = props.result
    let error = props.error
    console.log(error)
    console.log(result)
    switch (visible){
      case true:
        return (
          <div>
              <CheckIcon />
              <Button >Detalles</Button>  
              <p>{result.nombre}</p>
          </div>
        )
        break;
      case false:
        return <RejectIcon />
        break;
      default:
        return null
    }
  };
  
  export default AuthButton;