import  React from 'react';



const Navigation  = ({imageUrl}) => {
    return (
        <div className = 'center'>
            <img src = {imageUrl }  alt ='face to be detected'/>
        </div>
    );
}

export default Navigation;