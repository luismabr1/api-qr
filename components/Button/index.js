import { colors } from "../../styles/theme";
import { useState } from "react";

const Button = ({ children, name, onClick }) =>{

  return (
    <>
      <button className="cssbuttons-io-button">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
        <span>Ver mas</span>
        </button>
      {/* <button onClick={onClick}>
        {children}
      </button> */}
      <style jsx>{`
/* From uiverse.io by @adamgiebl */
/* From uiverse.io by @adamgiebl */
.cssbuttons-io-button {
 display: flex;
 align-items: center;
 font-family: inherit;
 font-weight: 500;
 font-size: 16px;
 padding: 0.7em 1.4em 0.7em 1.1em;
 color: white;
 background: #ad5389;
 background: linear-gradient(0deg, rgba(20,167,62,1) 0%, rgba(102,247,113,1) 100%);
 border: none;
 box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
 letter-spacing: 0.05em;
 border-radius: 20em;
}

.cssbuttons-io-button svg {
 margin-right: 6px;
}

.cssbuttons-io-button:hover {
 box-shadow: 0 0.5em 1.5em -0.5em #14a73e98;
}

.cssbuttons-io-button:active {
 box-shadow: 0 0.3em 1em -0.5em #14a73e98;
}
      `}</style>
    </>
  )
}
export default Button