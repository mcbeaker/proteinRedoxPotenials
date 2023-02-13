import React from "react";

export default function Section({ Component, id }) {
  return (

    <div className="section">
      {/* <div className="section-content" id={id}> */}
        <Component />  
      {/* </div> */}
      </div>
    
  );
}