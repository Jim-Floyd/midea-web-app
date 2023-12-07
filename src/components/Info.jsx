import React from 'react'

function Info (props){
    return (
      <div style={{border:'1px solid black',
                   margin:'10px',width:'20%'}}>
        
   
  <p> {props.model} </p>
   
   
        
   
  <p> {props.model_num}</p>
   
   
       </div>
   
    )
  }
  export default Info;