import CheckIcon from "../CheckIcon";
import RejectIcon from "../RejectIcon";



const AuthButton = (props) => {

    let visible  = props.visible;
    let result  = props.result
    let error = props.error
    
    switch (visible){
      case true:
        return <CheckIcon result={result} />
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