import  React from 'react';
import './ImageLinkForm.css';



const ImageLinkForm  = ({onInputChange, onButtonSubmit}) => {
    return (
       <div >
           <p className = 'f3'>
             { 'This Magic Brain Detects your face in an Image.Give it a Try.'}  
           </p>
           <div className= 'center'>
               <div className ='form pa4 br3 shadow-5 center'>
               <input type='text' className = 'f4 pa2  w-70 center ' onChange={onInputChange}/>
               <button className= 'w-30 grow f4  link ph3 pv2 dib white bg-light-purple' 
               onClick={onButtonSubmit}>Detect</button>
               </div>
           </div>


       </div>
    );
}

export default ImageLinkForm;