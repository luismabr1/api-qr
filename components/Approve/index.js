import { useState } from "react";
import CheckIcon from "../CheckIcon";
import Button from "../Button";
import RejectIcon from "../RejectIcon";
import Detalles from "../Detalles";


const AuthButton = (props) => {

    let visible  = props.visible;
    let result  = props.result
    let error = props.error
    console.log(error)
    console.log(result)
    switch (visible){
      case true:
        return (
          <Detalles result={result} />
        )
        break;
      case false:
        return (
            <div>
                <RejectIcon />
                <p>{error}</p>
            </div>
               
        )
        break;
      default:
        return null
    }
  };
  
  export default AuthButton;