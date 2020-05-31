import React, { useEffect, useState } from "react";

export const ProgressBar = ({color, percentage}) => {

  const [width, setWidth] = useState("0");
  const [inc, setInc] = useState(0);

  useEffect(() => {    
    let mounted=true;   
    requestAnimationFrame(() => {
      
      if(mounted){
        setWidth(percentage);
        if(inc<Number(percentage)){
          setInc(inc => inc + 1);
        }   
               
     }       
    });
    
    
    return () => {
      mounted = false;
    };
  });
  
  return (
    <>
      <span className="progressAmount">{inc}%</span>
      <div
        className="progress"
        style={{
          backgroundColor:"#ffffff"
        }}
      >
        <div              
            style={{                  
            width: width+"%",
            backgroundColor: color
            }}
            className="progressBar"
        />
      </div>
    </>
  );
};

